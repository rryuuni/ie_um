import { RiHeart3Fill } from 'react-icons/ri';
import * as S from './Style/MyLikesStyle';
import { useState } from 'react';
import MyPagination from '../../components/Pagination';

const MyLikes = () => {
   const [activePage, setActivePage] = useState(1);

   const MOCK = Array.from({ length: 20 }).map((_, i) => ({
      id: i + 1,
      title: '성공회대 근처 맛집 후기',
      date: '2025.08.03',
      like: 123,
   }));

   const itemsPerPage = 7;
   const LastItem = activePage * itemsPerPage;
   const FirstItem = LastItem - itemsPerPage;
   const currentItems = MOCK.slice(FirstItem, LastItem);

   const handlePageChange = (pageNumber) => {
      setActivePage(pageNumber);
   };
   return (
      <S.Container>
         <S.Title>좋아요한 글</S.Title>

         <S.List>
            {currentItems.map((item) => (
               <li key={item.id}>
                  <S.Row>
                     <div>
                        <S.PostTitle>{item.title}</S.PostTitle>
                        <S.PostDate>{item.date}</S.PostDate>
                     </div>

                     <S.HeartWrap>
                        <RiHeart3Fill size={11} />
                        <S.HeartCount>{item.like}</S.HeartCount>
                     </S.HeartWrap>
                  </S.Row>
                  <S.Divider />
               </li>
            ))}
         </S.List>

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

export default MyLikes;
