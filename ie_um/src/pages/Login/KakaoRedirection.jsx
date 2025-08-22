import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/AxiosInstance';
import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100dvh;
   display: flex;
   align-items: center;
   justify-content: center;
`;

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

            // 토큰 저장 + 헤더 세팅
            const accessToken = data?.accessToken ?? data?.data?.accessToken;
            if (accessToken) {
               localStorage.setItem('accessToken', accessToken);
               axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
            }

            // 사용자 정보 불러오기
            const me = await axiosInstance.get('/api/members');
            const { id, name, nickName } = me.data.data;

            // 사용자 정보 저장(아이디/이름)
            localStorage.setItem('memberId', String(id));
            localStorage.setItem('oauthName', name ?? nickName ?? '');

            console.log('로그인 성공');
            console.log('memberId:', id);
            console.log('name:', name ?? nickName ?? '');

            navigate('/');
         } catch (err) {
            console.error(err);
            alert('로그인 실패');
            navigate('/login');
         }
      })();
   }, [navigate]);

   return (
      <Container>
         <ClipLoader color="#004193" />
      </Container>
   );
};

export default KakaoRedirection;
