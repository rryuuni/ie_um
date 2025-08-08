import * as S from './LoginStyle';
import KakaoLogin from './KakaoLogin';
import NaverLogin from './NaverLogin';

const Login = () => {
   return (
      <S.Container>
         <S.Logo src="images/ie_um.png" />
         <KakaoLogin />
         <NaverLogin />
      </S.Container>
   );
};

export default Login;
