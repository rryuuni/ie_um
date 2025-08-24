import styled from 'styled-components';

export const Wrap = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   min-height: calc(100vh - 56px);
   padding: 0 40px;
`;

export const Title = styled.div`
   display: flex;
   justify-content: center;
   font-size: 24px;
   font-weight: 500;
   margin-bottom: 64px;
`;

export const TagTitle = styled.div`
   font-size: 20px;
   font-weight: 400;
   margin-bottom: 10px;
`;

export const TagBtn = styled.button`
   width: 66px;
   height: 42px;
   background-color: ${(props) => (props.active ? '#eeeeee' : '#ffffff')};
   border: 1px solid #d9d9d9;
   margin: 8px 5px;
   padding: 8px 5px;
   border-radius: 30px;
   border: 'none';
   cursor: 'pointer';
   font-size: 16px;
   font-weight: 400;
   color: black;

   @media only screen and (max-width: 380px) {
      padding: 3px 2px;
      margin: 5px 2px;
   }
`;

export const Btn = styled.button`
   margin-top: 60px;
   width: 178px;
   height: 57px;
   border-radius: 50px;
   font-size: 16px;
   font-weight: 700;

   background-color: ${(props) => props.theme.mainColorLight};
   color: white;
`;

export const BtnWrap = styled.div`
   display: flex;
   justify-content: center;
`;
