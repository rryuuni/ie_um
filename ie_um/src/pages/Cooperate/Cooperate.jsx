import * as S from './Style/CooperateStyle';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MyPagination from '../../components/Pagination';
import { useEffect } from 'react';
import axiosInstance from '../../api/AxiosInstance';

const Cooperate = () => {
   const navigate = useNavigate();
   const [activePage, setActivePage] = useState(1);
   const [data, setData] = useState([]);

   useEffect(() => {
      axiosInstance
         .get(`/api/accompanies`)
         .then((r) => {
            setData(r.data.data.accompanyInfoResDtos);
         })

         .catch((err) => {
            alert('불러오기 실패');
            console.error(err);
         });
   }, []);

   const itemsPerPage = 4;
   const LastItem = activePage * itemsPerPage;
   const FirstItem = LastItem - itemsPerPage;
   const currentItems = (data ?? []).slice(FirstItem, LastItem);

   const handlePageChange = (pageNumber) => {
      setActivePage(pageNumber);
   };

   const ApplyBtn = async (applyId) => {
      try {
         await axiosInstance.post(`/api/accompanies/apply/${applyId}`);
         alert('신청되었습니다.');
      } catch (err) {
         alert('이미 신청하였습니다.');
         console.error(err);
      }
   };

   return (
      <S.Wrap>
         <S.Title>동행그룹</S.Title>
         <S.CreateBtn onClick={() => navigate('/cooperate/write')}>
            그룹생성
         </S.CreateBtn>
         <S.CardList>
            {currentItems.map((item) => (
               <S.Card key={item.id}>
                  <S.StyledLink to={`/cooperate/${item.id}`}>
                     <S.CardWrap>
                        <div>
                           <S.CardTitle>{item.title}</S.CardTitle>
                           <S.CardDate>{item.time}</S.CardDate>
                           <S.CardPlace>{item.address}</S.CardPlace>
                        </div>
                        <S.BtnWrap>
                           <S.CardCapacity>
                              {item.currentPersonnel} / {item.maxPersonnel}
                           </S.CardCapacity>
                           <S.CardBtn onClick={() => ApplyBtn(item.id)}>
                              신청하기
                           </S.CardBtn>
                        </S.BtnWrap>
                     </S.CardWrap>
                  </S.StyledLink>
               </S.Card>
            ))}
         </S.CardList>

         <MyPagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={data?.length ?? 0}
            pageRangeDisplayed={itemsPerPage}
            onChange={handlePageChange}
         />
      </S.Wrap>
   );
};

export default Cooperate;
