import * as S from './Style/CooperateStyle';
import { DummyCooperate } from '../../constants/DummyData';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MyPagination from '../../components/Pagination';

const Cooperate = ({ cooperate = DummyCooperate }) => {
   const navigate = useNavigate();
   const [activePage, setActivePage] = useState(1);

   const itemsPerPage = 4;
   const LastItem = activePage * itemsPerPage;
   const FirstItem = LastItem - itemsPerPage;
   const currentItems = cooperate.slice(FirstItem, LastItem);

   const handlePageChange = (pageNumber) => {
      setActivePage(pageNumber);
   };

   return (
      <S.Wrap>
         <S.Title>동행그룹</S.Title>
         <S.CreateBtn onClick={() => navigate('/cooperate/write')}>
            그룹생성
         </S.CreateBtn>
         {currentItems.map((item) => (
            <S.Card key={item.id}>
               <S.StyledLink to={`/cooperate/${item.id}`}>
                  <S.CardWrap>
                     <div>
                        <S.CardTitle>{item.title}</S.CardTitle>
                        <S.CardDate>{item.date}</S.CardDate>
                        <S.CardPlace>{item.place}</S.CardPlace>
                     </div>
                     <S.BtnWrap>
                        <S.CardCapacity>
                           {item.people} / {item.capacity}
                        </S.CardCapacity>
                        <S.CardBtn>신청하기</S.CardBtn>
                     </S.BtnWrap>
                  </S.CardWrap>
               </S.StyledLink>
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

export default Cooperate;
