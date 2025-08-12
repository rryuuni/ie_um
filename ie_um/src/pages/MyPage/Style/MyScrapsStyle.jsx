import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
`;

export const Title = styled.h1`
   text-align: center;
   font-size: 25px;
   margin: 50px 0;
`;

export const Item = styled.div`
   display: flex;
   align-items: center;
   padding: 14px 16px;
   border-bottom: 1px solid #eee;
`;

export const IconWrap = styled.div`
   width: 36px;
   height: 36px;
   background-color: ${(props) => props.theme.lightBlue};
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const TextWrap = styled.div`
   flex: 1;
   margin-left: 12px;
`;

export const LocationTitle = styled.div`
   font-size: 18px;
   font-weight: 600;
   margin-bottom: 4px;
`;

export const Address = styled.div`
   font-size: 13px;
   color: #737373;
`;

export const MoreButton = styled.button`
   background: none;
   border: none;
   cursor: pointer;
   padding: 4px;
`;
