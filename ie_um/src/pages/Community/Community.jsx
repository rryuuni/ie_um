import { useState } from 'react';
import * as S from './Style/CommunityStyle';
import { RiHeart3Line, RiSearchLine } from 'react-icons/ri';
import MyPagination from '../../components/Pagination';

const Community = () => {
   const [activePage, setActivePage] = useState(1);

   const MOCK = Array.from({ length: 16 }).map((_, i) => ({
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
         <S.Title>커뮤니티</S.Title>
         <S.SearchWrap>
            <S.Search
               id="search-title"
               type="text"
               placeholder="제목으로 검색하기"
            ></S.Search>
            <S.SearchIcon>
               <RiSearchLine color="white" />
            </S.SearchIcon>
         </S.SearchWrap>
         <S.List>
            {currentItems.map((item) => (
               <li key={item.id}>
                  <S.Row>
                     <div>
                        <S.PostTitle>{item.title}</S.PostTitle>
                        <S.PostDate>{item.date}</S.PostDate>
                     </div>

                     <S.HeartWrap>
                        <RiHeart3Line size={11} />
                        <S.HeartCount>{item.like}</S.HeartCount>
                     </S.HeartWrap>
                  </S.Row>
                  <S.Divider />
               </li>
            ))}
         </S.List>
         <S.ButtonWrap>
            <S.WriteButton>글 작성</S.WriteButton>
         </S.ButtonWrap>
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

export default Community;
