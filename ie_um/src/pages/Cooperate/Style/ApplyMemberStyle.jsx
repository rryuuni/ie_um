import styled from 'styled-components';

export const Wrap = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

export const DetailTitle = styled.p`
   font-weight: 600;
   margin-bottom: 8px;
`;

export const UnderLine = styled.div`
   border: 1px solid ${(props) => props.theme.lightGray};
   width: 100%;
   margin-bottom: 8px;
`;

export const CardWrap = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 6px 0;
   border-bottom: 1px solid ${(props) => props.theme.lightGray};
`;

export const BtnGroup = styled.div`
   display: flex;
   gap: 5px;
`;

export const AcceptBtn = styled.button`
   background-color: ${(props) => props.theme.mainColorLight};
   color: white;
   border: none;
   padding: 6px 14px;
   border-radius: 10px;
   font-weight: 600;
`;

export const RejectBtn = styled.button`
   background-color: #c44d58;
   color: white;
   border: none;
   padding: 6px 14px;
   border-radius: 10px;
   font-weight: 600;
`;
