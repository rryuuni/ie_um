import * as S from '../Cooperate/Style/CooperateStyle';
import { useState, useEffect } from 'react';
import MyPagination from '../../components/Pagination';
import useModal from '../../hooks/useModal';
import AppliedCooperateModal from '../../components/Modal/AppliedCooperateModal';
import { RiMore2Fill } from 'react-icons/ri';
import axiosInstance from '../../api/AxiosInstance';

const AppliedCooperate = () => {
   const [activePage, setActivePage] = useState(1);
   const { openModal, closeModal } = useModal();
   const [data, setData] = useState();

   const itemsPerPage = 4;
   const LastItem = activePage * itemsPerPage;
   const FirstItem = LastItem - itemsPerPage;
   const currentItems = (data ?? []).slice(FirstItem, LastItem);

   const handlePageChange = (pageNumber) => {
      setActivePage(pageNumber);
   };

   useEffect(() => {
      axiosInstance
         .get(`/api/accompanies/apply`)
         .then((r) => {
            setData(r.data.data.accompanyInfoResDtos);
         })

         .catch((err) => {
            alert('불러오기 실패');
            console.error(err);
         });
   }, []);

   return (
      <S.Wrap>
         <S.Title>신청한 동행그룹</S.Title>
         <S.CardList>
            {currentItems.map((item) => (
               <S.Card key={item.id}>
                  <AppliedCooperateModal
                     id={item.id}
                     onclose={() => closeModal('Applied_cooperate_modal')}
                  />
                  <S.StyledLink to={`/cooperate/${item.id}`}>
                     <S.CardWrap>
                        <div>
                           <S.CardTitle>{item.title}</S.CardTitle>
                           <S.CardDate>{item.time}</S.CardDate>
                           <S.CardPlace>{item.address}</S.CardPlace>
                        </div>
                        <S.BtnWrap>
                           <S.CardBtn role={item.role}>
                              {item.role === 'OWNER'
                                 ? '내 그룹'
                                 : item.role === 'PENDING'
                                   ? '대기중'
                                   : item.role === 'ACCEPTED'
                                     ? '수락됨'
                                     : item.role === 'REJECTED'
                                       ? '거절됨'
                                       : item.role === 'LEAVE'
                                         ? '탈퇴함'
                                         : item.role}
                           </S.CardBtn>
                        </S.BtnWrap>
                     </S.CardWrap>
                  </S.StyledLink>
                  <S.MoreButton
                     onClick={() => openModal('Applied_cooperate_modal')}
                  >
                     <RiMore2Fill size={20} color="#555" />
                  </S.MoreButton>
               </S.Card>
            ))}
         </S.CardList>

         <MyPagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={data?.length ?? 0}
            pageRangeDisplayed={itemsPerPage}
            onChange={handlePageChange}
         />
      </S.Wrap>
   );
};

export default AppliedCooperate;
