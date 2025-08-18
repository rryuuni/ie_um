import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/AxiosInstance';

const KakaoRedirection = () => {
   const navigate = useNavigate();

   useEffect(() => {
      const code = new URL(window.location.href).searchParams.get('code');
      if (!code) {
         navigate('/login');
         return;
      }

      (async () => {
         try {
            const { data } = await axiosInstance.get(
               '/api/oauth2/callback/kakao',
               {
                  params: {
                     code,
                     redirectUri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
                  },
               },
            );

            //토큰 확인
            // const token = data?.accessToken ?? data?.data?.accessToken;
            // console.log(token);

            // 받은 토큰 localStorage 저장
            localStorage.setItem('accessToken', data.accessToken);

            // 메인 페이지로 이동
            navigate('/');

            // 에러 처리
         } catch (err) {
            console.error(err);
            alert('로그인 실패');
            navigate('/login');
         }
      })();
   }, [navigate]);

   return <div>로그인 중...</div>;
};

export default KakaoRedirection;
