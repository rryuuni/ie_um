import styled from 'styled-components';

export const Container = styled.div`
   width: 325px;
   padding: 30px 20px;
   margin: 50px auto;
   border-radius: 10px;
   box-shadow: 0 0 3px 1px rgb(0, 0, 0, 0.12);

   display: flex;
   flex-direction: column;
   gap: 30px;
`;

export const Inform = styled.div`
   display: flex;
   gap: 15px;
   align-items: center;
`;

export const ProfileImage = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-color: #ccc;
`;

export const WriteData = styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;
   gap: 8px;
`;

export const Nickname = styled.span``;

export const Date = styled.span`
   font-size: 12px;
`;

export const MoreButton = styled.div`
   cursor: pointer;
`;

export const LocationWrap = styled.div`
   display: flex;
   align-items: center;
`;

export const Location = styled.span`
   margin-left: 10px;
`;

export const Title = styled.h1`
   font-size: 20px;
   font-weight: 600;
`;

export const Content = styled.span`
   line-height: 20px;
`;

export const HeartWrap = styled.div`
   display: flex;
   gap: 10px;
   justify-content: end;
`;

export const HeartCount = styled.span``;
