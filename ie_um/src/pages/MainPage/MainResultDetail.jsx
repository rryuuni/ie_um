import { useParams, useNavigate } from 'react-router-dom';
import Maps from '../../components/Maps';
import * as S from './Style/MainDetailStyle';
import { RiPushpinFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';

const MainResultDetail = () => {
   const { id } = useParams();
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
   const navigate = useNavigate();

   const data = resources.find((item) => String(item.id) === id);

   if (!data) return <div>데이터를 찾을 수 없습니다.</div>; // 안전 처리

   return (
      <S.Wrap>
         <S.MapContainer>
            <Maps latitude={data.latitude} longitude={data.longitude} />
         </S.MapContainer>
         <S.CardWrap>
            <S.CardDateWrap>
               {' '}
               <RiPushpinFill color="#959595" />
               <S.CardDate>{data.address}</S.CardDate>
            </S.CardDateWrap>
            <S.CardTitle>{data.name}</S.CardTitle>
            <S.CardPlace>{data.description}</S.CardPlace>
            <S.CardBtn
               onClick={() =>
                  navigate('/cooperate/write', { state: { place: data.name } })
               }
            >
               동행 구하기
            </S.CardBtn>
         </S.CardWrap>
      </S.Wrap>
   );
};

export default MainResultDetail;
