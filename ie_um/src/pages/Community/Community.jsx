import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Style/CommunityStyle';
import * as P from '../../styles/PostStyle';
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
      <P.Container>
         <P.Title>커뮤니티</P.Title>
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
         <P.List>
            {currentItems.map((item) => (
               <li key={item.id}>
                  <P.PostLink to={`/community/${item.id}`}>
                     <div>
                        <P.PostTitle>{item.title}</P.PostTitle>
                        <P.PostDate>{item.date}</P.PostDate>
                     </div>

                     <P.HeartWrap>
                        <RiHeart3Line size={11} />
                        <P.HeartCount>{item.heart}</P.HeartCount>
                     </P.HeartWrap>
                  </P.PostLink>
                  <P.Divider />
               </li>
            ))}
         </P.List>
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
      </P.Container>
   );
};

export default Community;
