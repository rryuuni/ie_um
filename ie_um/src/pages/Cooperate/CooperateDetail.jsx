import { useParams } from 'react-router-dom';
import * as S from '../Cooperate/Style/CooperateDetailStyle';
import { CiMenuKebab } from 'react-icons/ci';
import useModal from '../../hooks/useModal';
import CooperateEditModal from '../../components/Modal/CooperateEditModal';
import { useEffect, useState } from 'react';
import axiosInstance from '../../api/AxiosInstance';

const CooperateDetail = () => {
   const { id } = useParams();
   const { openModal, closeModal } = useModal();
   const [data, setData] = useState({});
   const isEdit = Boolean(id);

   useEffect(() => {
      axiosInstance
         .get(`/api/accompanies/${id}`)
         .then((r) => {
            setData(r.data.data);
         })

         .catch((err) => {
            alert('불러오기 실패');
            console.error(err);
         });
   }, []);

   const ApplyBtn = async (applyId) => {
      try {
         await axiosInstance.post(`/api/accompanies/apply/${applyId}`);
         alert('신청되었습니다.');
      } catch (err) {
         alert('이미 신청하였습니다.');
         console.error(err);
      }
   };

   return (
      <S.Wrap>
         <S.TitleWrap>
            <S.Title>{data.title}</S.Title>
            <S.MenuBtn
               onClick={() => openModal('Cooperate_edit_modal')}
               editTo={`/cooperate/edit/${data.id}`}
            >
               <CiMenuKebab />
            </S.MenuBtn>{' '}
         </S.TitleWrap>{' '}
         <CooperateEditModal
            onclose={() => closeModal('Cooperate_edit_modal')}
            editTo={`/cooperate/edit/${data.id}`}
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
               <S.DetailBtn onClick={ApplyBtn}>신청하기</S.DetailBtn>
            </S.BtnWrap>
         </S.Detail>
      </S.Wrap>
   );
};

export default CooperateDetail;
