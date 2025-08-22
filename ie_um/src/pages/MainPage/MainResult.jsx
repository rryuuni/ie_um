import * as S from './Style/MainResultStyle';
import { RiPushpinFill } from 'react-icons/ri';
import { useState, useEffect } from 'react';

const MainResult = () => {
   const [resources, setResources] = useState([]);

   useEffect(() => {
      const result = localStorage.getItem('aiResult');
      if (result) {
         try {
            const parsed = JSON.parse(result);
            // 응답 구조에서 places만 꺼내기
            if (parsed?.data?.places && Array.isArray(parsed.data.places)) {
               setResources(parsed.data.places);
            } else {
               console.warn('places 배열이 없음:', parsed);
            }
         } catch (e) {
            console.error('AI 결과 파싱 실패:', e);
         }
      }
   }, []);

   return (
      <S.Wrap>
         <S.Title>오늘 여기 어때요?</S.Title>
         <S.SecTitle>AI가 당신에게 딱 맞는 자원을 추천합니다!</S.SecTitle>

         {resources.length > 0 ? (
            resources.map((resources, idx) => (
               <S.CardWrap key={idx}>
                  {' '}
                  <S.LinkSt to={`/ai/result/${resources.id}`}>
                     <S.CardDateWrap>
                        <RiPushpinFill color="#959595" />
                        <S.CardDate>{resources.address}</S.CardDate>
                     </S.CardDateWrap>
                     <S.CardTitle>{resources.name}</S.CardTitle>
                     <S.CardPlace>{resources.description}</S.CardPlace>
                  </S.LinkSt>
               </S.CardWrap>
            ))
         ) : (
            <p>추천결과 없음.</p>
         )}
      </S.Wrap>
   );
};

export default MainResult;
