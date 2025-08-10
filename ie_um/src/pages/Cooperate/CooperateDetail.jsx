import { DummyCooperate } from '../../constants/DummyData';
import { useParams } from 'react-router-dom';
import * as S from '../Cooperate/Style/CooperateDetailStyle';
import { CiMenuKebab } from 'react-icons/ci';

const CooperateDetail = ({ cooperate = DummyCooperate }) => {
   const { id } = useParams();
   const data = cooperate.find((item) => String(item.id) === id);

   return (
      <S.Wrap>
         <S.TitleWrap>
            <S.Title>{data.title}</S.Title>
            <S.MenuBtn>
               <CiMenuKebab />
            </S.MenuBtn>
         </S.TitleWrap>
         <S.UnderLine />
         <S.Content>{data.content}</S.Content>
         <S.UnderLine />
         <S.Detail>
            <S.DetailOne>
               <S.DetailTitle>일시</S.DetailTitle>
               <div>{data.date}</div>
            </S.DetailOne>
            <S.DetailOne>
               <S.DetailTitle>장소</S.DetailTitle>
               <div>{data.place}</div>
            </S.DetailOne>
            <S.DetailOne>
               <S.DetailTitle>정원</S.DetailTitle>
               <div>
                  {data.people} / {data.capacity}
               </div>
            </S.DetailOne>
            <S.BtnWrap>
               <S.DetailBtn>신청하기</S.DetailBtn>
            </S.BtnWrap>
         </S.Detail>
      </S.Wrap>
   );
};

export default CooperateDetail;
