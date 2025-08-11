import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   margin: 0 auto;
   padding: 2rem;
`;

export const ProfileWrap = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 2rem;
`;

export const ProfileImage = styled.div`
   width: 100px;
   height: 100px;
   background-color: #ddd;
   border-radius: 50%;
   margin-bottom: 10px;

   position: relative;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`;

export const CameraWrap = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   position: absolute;
   right: 5px;
   bottom: 5px;

   width: 20px;
   height: 20px;
   background-color: #f5f5f5;
   border-radius: 50%;
`;

export const UserName = styled.div`
   display: flex;
   align-items: center;
   font-size: 16px;
   gap: 3px;
`;

export const MenuWrap = styled.div`
   width: 270px;
   padding: 10px 0;
   margin: 0 auto;
   border-radius: 10px;
   box-shadow: 0 0 3px 1px rgb(0, 0, 0, 0.12);
`;

export const MenuItem = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 70px;
   cursor: pointer;
`;

export const Divider = styled.hr`
   border: none;
   border-top: 1px solid #d9d9d9;
   margin: 0 auto;
   width: 150px;
`;
