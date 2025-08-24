import styled from 'styled-components';

export const Wrap = styled.div`
   display: flex;
   flex-direction: column;
   padding: 60px 30px;

   @media only screen and (max-width: 380px) {
      padding: 20px 30px;
   }
`;

export const InputWrap = styled.div`
   border: 1px solid ${(props) => props.theme.lightGray};
   width: 100%;
   padding: 40px 24px;
   border-radius: 10px;
`;

export const ItemWrap = styled.div`
   margin-bottom: 15px;
`;

export const InputTitle = styled.div`
   margin-bottom: 6px;
   font-size: 18px;
   font-weight: 500;
`;

export const TextArea = styled.textarea`
   border: 1px solid ${(props) => props.theme.mainColorLight};
   border-radius: 10px;
   resize: none;
   width: 100%;
   height: 70px;
   padding: 25px 10px;
`;

export const Input = styled.input`
   border: 1px solid ${(props) => props.theme.mainColorLight};
   width: 100%;
   height: 37px;
   border-radius: 10px;
   padding: 0 10px;
`;

export const BtnWrap = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-top: 60px;

   @media only screen and (max-width: 380px) {
      margin-top: 20px;
   }
`;

export const Btn = styled.button`
   background-color: ${(props) => props.theme.mainColorLight};
   width: 77px;
   height: 35px;
   border-radius: 15px;
   margin-right: 5px;
   font-size: 15px;
   font-weight: 600;
   color: white;
`;
