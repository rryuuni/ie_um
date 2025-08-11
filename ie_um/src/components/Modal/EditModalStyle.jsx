// EditModalStyle.js
import styled from 'styled-components';

export const Dialog = styled.dialog`
   border: none;
   padding: 0;
   border-radius: 15px;
`;
export const Button = styled.button`
   width: 100%;
   padding: 20px 24px;
   font-weight: 600;
   border: none;
   background: #fdfdfd;

   &:hover {
      background: ${(props) => props.theme.lightBlue};
      color: white;
   }
`;
