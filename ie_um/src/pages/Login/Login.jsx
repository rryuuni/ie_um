import * as S from './LoginStyle';
import KakaoLogin from './KakaoLogin';

const Login = () => {
   return (
      <S.Container>
         <S.Logo src="images/ie_um.png" />
         <KakaoLogin />
      </S.Container>
   );
};

export default Login;
