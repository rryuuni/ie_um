import { RiBookmarkFill, RiMore2Fill } from 'react-icons/ri';
import * as S from './Style/MyScrapsStyle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyPagination from '../../components/Pagination';
import useModal from '../../hooks/useModal';
import DeleteModal from '../../components/Modal/DeleteModal';
import { DummyPlace } from '../../constants/DummyData';

const MyScrapsLocation = ({ place = DummyPlace }) => {
   const [activePage, setActivePage] = useState(1);
   const { openModal, closeModal } = useModal();
   const navigate = useNavigate();

   const itemsPerPage = 6;
   const LastItem = activePage * itemsPerPage;
   const FirstItem = LastItem - itemsPerPage;
   const currentItems = place.slice(FirstItem, LastItem);

   const handlePageChange = (pageNumber) => {
      setActivePage(pageNumber);
   };

   return (
      <S.Container>
         <S.Title>저장한 장소</S.Title>
         <DeleteModal onclose={() => closeModal('Delete_modal')} />
         {currentItems.map((item) => (
            <S.Item
               key={item.id}
               onClick={() => navigate(`../ai/result/${item.id}`)}
            >
               <S.IconWrap>
                  <RiBookmarkFill color="white" size={20} />
               </S.IconWrap>

               <S.TextWrap>
                  <S.LocationTitle>{item.place}</S.LocationTitle>
                  <S.Address>{item.address}</S.Address>
               </S.TextWrap>

               <S.MoreButton onClick={() => openModal('Delete_modal')}>
                  <RiMore2Fill size={20} color="#555" />
               </S.MoreButton>
            </S.Item>
         ))}

         <MyPagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={place.length}
            pageRangeDisplayed={itemsPerPage}
            onChange={handlePageChange}
         />
      </S.Container>
   );
};

export default MyScrapsLocation;
