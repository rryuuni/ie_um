import * as S from './LoginStyle';
import naverLogo from './images/naver_logo.png';

function NaverLogin() {
   const NAVER_REST_API_KEY = import.meta.env.VITE_NAVER_REST_API_KEY;
   const NAVER_REDIRECT_URI = `http://localhost:5173/oauth/naver`;
   const naverURL = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_REST_API_KEY}&response_type=code&redirect_uri=${NAVER_REDIRECT_URI}&state=${import.meta.env.VITE_NAVER_STATE}`;

   const handleNaverLogin = () => {
      window.location.href = naverURL;
   };

   return (
      <S.NaverButton onClick={handleNaverLogin}>
         <S.NaverLogo src={naverLogo} />
         네이버 아이디로 로그인
      </S.NaverButton>
   );
}

export default NaverLogin;
