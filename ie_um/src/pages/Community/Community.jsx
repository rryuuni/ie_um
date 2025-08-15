import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Style/CommunityStyle';
import { RiHeart3Line, RiSearchLine } from 'react-icons/ri';
import MyPagination from '../../components/Pagination';
import { DummyCommunity } from '../../constants/DummyData';

const Community = ({ community = DummyCommunity }) => {
   const navigate = useNavigate();
   const [activePage, setActivePage] = useState(1);

   const itemsPerPage = 7;
   const LastItem = activePage * itemsPerPage;
   const FirstItem = LastItem - itemsPerPage;
   const currentItems = community.slice(FirstItem, LastItem);

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
                  <S.PostLink to={`/community/${item.id}`}>
                     <div>
                        <S.PostTitle>{item.title}</S.PostTitle>
                        <S.PostDate>{item.date}</S.PostDate>
                     </div>

                     <S.HeartWrap>
                        <RiHeart3Line size={11} />
                        <S.HeartCount>{item.heart}</S.HeartCount>
                     </S.HeartWrap>
                  </S.PostLink>
                  <S.Divider />
               </li>
            ))}
         </S.List>
         <S.ButtonWrap>
            <S.WriteButton onClick={() => navigate('/community/write')}>
               글 작성
            </S.WriteButton>
         </S.ButtonWrap>
         <MyPagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={community.length}
            pageRangeDisplayed={itemsPerPage}
            onChange={handlePageChange}
         />
      </S.Container>
   );
};

export default Community;
