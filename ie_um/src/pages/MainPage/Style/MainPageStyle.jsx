import styled from 'styled-components';

export const Wrap = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   min-height: calc(100vh - 56px);
`;

export const TextWrap = styled.div`
   font-size: 20px;
   font-weight: 700;
   display: flex;
   flex-direction: row;
`;

export const TextFirst = styled.div`
   margin-right: 5px;
   margin-bottom: 20px;
`;

export const TextSecond = styled.div`
   margin-top: 25px;
`;

export const Logo = styled.img`
   width: 212px;
   height: 157px;
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
