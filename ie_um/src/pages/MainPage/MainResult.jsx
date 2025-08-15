import * as S from './Style/MainResultStyle';
import { DummyPlace } from '../../constants/DummyData';
import { RiPushpinFill } from 'react-icons/ri';

const MainResult = ({ resources = DummyPlace }) => {
   return (
      <S.Wrap>
         <S.Title>오늘 여기 어때요?</S.Title>
         <S.SecTitle>AI가 당신에게 딱 맞는 자원을 추천합니다!</S.SecTitle>

         {resources.map((resources, idx) => (
            <S.CardWrap key={idx}>
               {' '}
               <S.LinkSt to={`/ai/result/${resources.id}`}>
                  <S.CardDateWrap>
                     <RiPushpinFill color="#959595" />
                     <S.CardDate>{resources.date}</S.CardDate>
                  </S.CardDateWrap>
                  <S.CardTitle>{resources.title}</S.CardTitle>
                  <S.CardPlace>
                     {resources.place} | {resources.address}
                  </S.CardPlace>
               </S.LinkSt>
            </S.CardWrap>
         ))}
      </S.Wrap>
   );
};

export default MainResult;
