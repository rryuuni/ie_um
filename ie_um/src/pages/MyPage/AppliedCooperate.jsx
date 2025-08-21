import * as S from '../Cooperate/Style/CooperateStyle';
import { DummyCooperate } from '../../constants/DummyData';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MyPagination from '../../components/Pagination';

const LABEL_BY_STATE = {
   rejected: '거절됨',
   pending: '대기중',
   accepted: '수락됨',
};

const AppliedCooperate = ({ cooperate = DummyCooperate }) => {
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
         <S.Title>신청한 동행그룹</S.Title>
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
                        <S.StateBtn $status={item.state}>
                           {LABEL_BY_STATE[item.state]}
                        </S.StateBtn>
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

export default AppliedCooperate;
