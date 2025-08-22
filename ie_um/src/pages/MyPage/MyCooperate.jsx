import * as S from '../Cooperate/Style/CooperateStyle';
import { DummyCooperate } from '../../constants/DummyData';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MyPagination from '../../components/Pagination';
import { RiMore2Fill } from 'react-icons/ri';
import useModal from '../../hooks/useModal';
import DeleteModal from '../../components/Modal/DeleteModal';

const MyCooperate = ({ cooperate = DummyCooperate }) => {
   const [activePage, setActivePage] = useState(1);
   const { openModal, closeModal } = useModal();

   const itemsPerPage = 4;
   const LastItem = activePage * itemsPerPage;
   const FirstItem = LastItem - itemsPerPage;
   const currentItems = cooperate.slice(FirstItem, LastItem);

   const handlePageChange = (pageNumber) => {
      setActivePage(pageNumber);
   };

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
                        <S.CardDate>{item.date}</S.CardDate>
                        <S.CardPlace>{item.place}</S.CardPlace>
                     </div>
                     <S.BtnWrap>
                        <S.CardCapacity>모집인원</S.CardCapacity>
                        <S.CardBtn>
                           {item.people} / {item.capacity}
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
            totalItemsCount={cooperate.length}
            pageRangeDisplayed={itemsPerPage}
            onChange={handlePageChange}
         />
      </S.Wrap>
   );
};

export default MyCooperate;
