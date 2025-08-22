import { RiHeart3Fill } from 'react-icons/ri';
import * as S from '../../styles/PostStyle';
import { useState } from 'react';
import MyPagination from '../../components/Pagination';
import { DummyCommunity } from '../../constants/DummyData';

const MyLikes = ({ posts = DummyCommunity }) => {
   const [activePage, setActivePage] = useState(1);

   const itemsPerPage = 7;
   const LastItem = activePage * itemsPerPage;
   const FirstItem = LastItem - itemsPerPage;
   const currentItems = posts.slice(FirstItem, LastItem);

   const handlePageChange = (pageNumber) => {
      setActivePage(pageNumber);
   };
   return (
      <S.Container>
         <S.Title>좋아요한 글</S.Title>

         <S.List>
            {currentItems.map((item) => (
               <li key={item.id}>
                  <S.PostLink to={`/community/${item.id}`}>
                     <div>
                        <S.PostTitle>{item.title}</S.PostTitle>
                        <S.PostDate>{item.date}</S.PostDate>
                     </div>

                     <S.HeartWrap>
                        <RiHeart3Fill size={11} />
                        <S.HeartCount>{item.heart}</S.HeartCount>
                     </S.HeartWrap>
                  </S.PostLink>
                  <S.Divider />
               </li>
            ))}
         </S.List>

         <MyPagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={posts.length}
            pageRangeDisplayed={itemsPerPage}
            onChange={handlePageChange}
         />
      </S.Container>
   );
};

export default MyLikes;
