import { RiBookmarkFill, RiMore2Fill } from 'react-icons/ri';
import * as S from './Style/MyScrapsStyle';

import { useState } from 'react';
import MyPagination from '../../components/Pagination';

const MyScrapsLocation = () => {
   const [activePage, setActivePage] = useState(1);

   const MOCK = Array.from({ length: 20 }).map((_, i) => ({
      id: i + 1,
      title: '고척스카이돔',
      address: '서울특별시 구로구 경인로 430',
   }));

   const itemsPerPage = 6;
   const LastItem = activePage * itemsPerPage;
   const FirstItem = LastItem - itemsPerPage;
   const currentItems = MOCK.slice(FirstItem, LastItem);

   const handlePageChange = (pageNumber) => {
      setActivePage(pageNumber);
   };

   return (
      <S.Container>
         <S.Title>저장한 장소</S.Title>
         {currentItems.map((item) => (
            <S.Item key={item.id}>
               <S.IconWrap>
                  <RiBookmarkFill color="white" size={20} />
               </S.IconWrap>

               <S.TextWrap>
                  <S.LocationTitle>{item.title}</S.LocationTitle>
                  <S.Address>{item.address}</S.Address>
               </S.TextWrap>

               <S.MoreButton>
                  <RiMore2Fill size={20} color="#555" />
               </S.MoreButton>
            </S.Item>
         ))}

         <MyPagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={MOCK.length}
            pageRangeDisplayed={itemsPerPage}
            onChange={handlePageChange}
         />
      </S.Container>
   );
};

export default MyScrapsLocation;
