import * as S from './Style/MainPageStyle';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
   const navigate = useNavigate();

   return (
      <S.Wrap>
         <S.TextWrap>
            {' '}
            <S.TextFirst>어떤 자원을 </S.TextFirst>
            <S.TextSecond> 찾고 있나요?</S.TextSecond>
         </S.TextWrap>
         <S.Logo src="/images/ie_um.png" />
         <S.Btn onClick={() => navigate('/hashtag')}>
            나에게 맞는 공간 찾기
         </S.Btn>
      </S.Wrap>
   );
};

export default MainPage;
