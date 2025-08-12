import { RiBookmarkFill, RiMore2Fill } from 'react-icons/ri';
import * as S from './Style/MyScrapsStyle';

const MOCK_DATA = Array.from({ length: 6 }).map((_, i) => ({
   id: i + 1,
   title: '고척스카이돔',
   address: '서울특별시 구로구 경인로 430',
}));

const MyScrapsLocation = () => {
   return (
      <S.Container>
         <S.Title>저장한 장소</S.Title>
         {MOCK_DATA.map((item) => (
            <S.Item key={item.id}>
               <S.IconWrap>
                  <RiBookmarkFill color="white" size={20} />
               </S.IconWrap>

               <S.TextWrap>
                  <S.LocationTitle>{item.title}</S.LocationTitle>
                  <S.Address>{item.address}</S.Address>
               </S.TextWrap>

               <S.MoreButton>
                  <RiMore2Fill size={20} color="#555" />
               </S.MoreButton>
            </S.Item>
         ))}
      </S.Container>
   );
};

export default MyScrapsLocation;
