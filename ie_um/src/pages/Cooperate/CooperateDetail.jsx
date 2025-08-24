import { useParams } from 'react-router-dom';
import * as S from '../Cooperate/Style/CooperateDetailStyle';
import { CiMenuKebab } from 'react-icons/ci';
import useModal from '../../hooks/useModal';
import CooperateEditModal from '../../components/Modal/CooperateEditModal';
import { useEffect, useState } from 'react';
import axiosInstance from '../../api/AxiosInstance';
import ApplyMember from './ApplyMember';
import ClipLoader from 'react-spinners/ClipLoader';

const CooperateDetail = () => {
   const { id } = useParams();
   const { openModal, closeModal } = useModal();
   const [data, setData] = useState({});
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      axiosInstance
         .get(`/api/accompanies/${id}`)
         .then((r) => {
            setData(r.data.data);
         })

         .catch((err) => {
            alert('불러오기 실패');
            console.error(err);
         })
         .finally(() => {
            setLoading(false); // 데이터 로딩 완료
         });
   }, [id]);

   const ApplyBtn = async (applyId) => {
      try {
         await axiosInstance.post(`/api/accompanies/apply/${applyId}`);
         alert('신청되었습니다.');
      } catch (err) {
         alert('이미 신청하였습니다.');
         console.error(err);
      }
   };

   if (loading) {
      return (
         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               marginTop: '2rem',
            }}
         >
            <ClipLoader color="#004193" size={50} />
         </div>
      );
   }

   return (
      <S.Wrap>
         <S.TitleWrap>
            <S.Title>{data.title}</S.Title>
            {data.role === 'OWNER' && (
               <S.MenuBtn
                  onClick={() => openModal('Cooperate_edit_modal')}
                  $editTo={`/cooperate/edit/${data.id}`}
               >
                  <CiMenuKebab />
               </S.MenuBtn>
            )}
         </S.TitleWrap>{' '}
         <CooperateEditModal
            editTo={`/cooperate/edit/${data.id}`}
            onclose={() => closeModal('Cooperate_edit_modal')}
            id={data.id}
         />
         <S.UnderLine />
         <S.Content>{data.content}</S.Content>
         <S.UnderLine />
         <S.Detail>
            <S.DetailOne>
               <S.DetailTitle>일시</S.DetailTitle>
               <div>{data.time}</div>
            </S.DetailOne>
            <S.DetailOne>
               <S.DetailTitle>장소</S.DetailTitle>
               <div>{data.address}</div>
            </S.DetailOne>
            <S.DetailOne>
               <S.DetailTitle>정원</S.DetailTitle>
               <div>
                  {data.currentPersonnel} / {data.maxPersonnel}
               </div>
            </S.DetailOne>
            <S.BtnWrap>
               {data.role !== 'OWNER' && (
                  <S.DetailBtn
                     role={data.role}
                     onClick={() => {
                        if (
                           data.role !== 'OWNER' &&
                           data.role !== 'PENDING' &&
                           data.role !== 'ACCEPTED' &&
                           data.role !== 'REJECTED' &&
                           data.role !== 'LEAVE'
                        ) {
                           ApplyBtn(id);
                        }
                     }}
                     disabled={
                        data.role === 'OWNER' ||
                        data.role === 'PENDING' ||
                        data.role === 'ACCEPTED' ||
                        data.role === 'REJECTED' ||
                        data.role === 'LEAVE'
                     }
                  >
                     {data.role === 'OWNER'
                        ? '내 그룹'
                        : data.role === 'PENDING'
                          ? '대기중'
                          : data.role === 'ACCEPTED'
                            ? '수락됨'
                            : data.role === 'REJECTED'
                              ? '거절됨'
                              : data.role === 'LEAVE'
                                ? '탈퇴함'
                                : '신청하기'}
                  </S.DetailBtn>
               )}
            </S.BtnWrap>
         </S.Detail>{' '}
         <ApplyMember />
      </S.Wrap>
   );
};

export default CooperateDetail;
