import * as S from '../Cooperate/Style/CooperateStyle';
import { useState, useEffect } from 'react';
import MyPagination from '../../components/Pagination';
import { RiMore2Fill } from 'react-icons/ri';
import useModal from '../../hooks/useModal';
import DeleteModal from '../../components/Modal/DeleteModal';
import axiosInstance from '../../api/AxiosInstance';

const MyCooperate = () => {
   const [activePage, setActivePage] = useState(1);
   const { openModal, closeModal } = useModal();
   const [data, setData] = useState([]);
   const itemsPerPage = 4;
   const LastItem = activePage * itemsPerPage;
   const FirstItem = LastItem - itemsPerPage;
   const currentItems = (data ?? []).slice(FirstItem, LastItem);

   const handlePageChange = (pageNumber) => {
      setActivePage(pageNumber);
   };

   useEffect(() => {
      axiosInstance
         .get(`/api/accompanies/member`)
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
         <S.Title>나의 동행그룹</S.Title>
         {currentItems.map((item) => (
            <S.Card key={item.id}>
               <DeleteModal onclose={() => closeModal('Delete_modal')} />
               <S.StyledLink to={`/cooperate/${item.id}`}>
                  <S.CardWrap>
                     <div>
                        <S.CardTitle>{item.title}</S.CardTitle>
                        <S.CardDate>{item.time}</S.CardDate>
                        <S.CardPlace>{item.address}</S.CardPlace>
                     </div>
                     <S.BtnWrap>
                        <S.CardCapacity>모집인원</S.CardCapacity>
                        <S.CardBtn>
                           {item.currentPersonnel} / {item.maxPersonnel}
                        </S.CardBtn>
                     </S.BtnWrap>
                  </S.CardWrap>
               </S.StyledLink>
               <S.MoreButton onClick={() => openModal('Delete_modal')}>
                  <RiMore2Fill size={20} color="#555" />
               </S.MoreButton>
            </S.Card>
         ))}

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

export default MyCooperate;
