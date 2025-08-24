import * as S from './LoginStyle';
import { RiKakaoTalkFill } from 'react-icons/ri';

const KakaoLogin = () => {
   const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
   const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
   const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

   const handleKakaoLogin = () => {
      window.location.href = kakaoURL;
   };

   return (
      <S.KakaoButton onClick={handleKakaoLogin}>
         <RiKakaoTalkFill size={35} />
         카카오 아이디로 로그인
      </S.KakaoButton>
   );
};

export default KakaoLogin;
