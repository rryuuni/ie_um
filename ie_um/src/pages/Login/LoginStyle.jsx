import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   min-height: 100vh;
   padding-top: 33vh;
`;

export const Logo = styled.img`
   width: 200px;
   height: auto;
   margin-bottom: 100px;
`;

const BaseButton = styled.button`
   width: 300px;
   height: 50px;
   border-radius: 10px;

   display: flex;
   align-items: center;
   justify-content: center;
   gap: 8px;
   font-size: 16px;
   font-weight: 600;
   margin-bottom: 10px;
`;

export const KakaoButton = styled(BaseButton)`
   background-color: #fddc3f;
   color: #3a2929;
`;

export const NaverButton = styled(BaseButton)`
   background-color: #03c75a;
   color: #ffffff;
`;

export const NaverLogo = styled.img`
   width: 35px;
`;
