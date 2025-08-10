import * as S from './Style/CooperateStyle';
import { DummyCooperate } from '../../constants/DummyData';

const Cooperate = ({ cooperate = DummyCooperate }) => {
   return (
      <S.Wrap>
         <S.Title>동행그룹</S.Title>
         <S.CreateBtn>그룹생성</S.CreateBtn>
         {cooperate.map((item) => (
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
      </S.Wrap>
   );
};

export default Cooperate;
