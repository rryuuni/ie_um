import { useParams } from 'react-router-dom';
import { DummyPlace } from '../../constants/DummyData';
import Maps from '../../components/Maps';
import * as S from './Style/MainDetailStyle';
import { RiPushpinFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const MainResultDetail = ({ resources = DummyPlace }) => {
   const { id } = useParams();
   const data = resources.find((item) => String(item.id) === id);
   const navigate = useNavigate();

   return (
      <S.Wrap>
         <S.MapContainer>
            <Maps lat={data.lat} lng={data.lng} />
         </S.MapContainer>
         <S.CardWrap>
            <S.CardDateWrap>
               {' '}
               <RiPushpinFill color="#959595" />
               <S.CardDate>{data.date}</S.CardDate>
            </S.CardDateWrap>
            <S.CardTitle>{data.title}</S.CardTitle>
            <S.CardPlace>
               {data.place} | {data.address}{' '}
            </S.CardPlace>
            <S.CardBtn
               onClick={() =>
                  navigate('/cooperate/write', { state: { place: data.place } })
               }
            >
               동행 구하기
            </S.CardBtn>
            <S.SaveBtn>저장하기</S.SaveBtn>
         </S.CardWrap>
      </S.Wrap>
   );
};

export default MainResultDetail;
