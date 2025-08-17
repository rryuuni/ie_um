import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SearchWrap = styled.div`
   position: relative;
`;

export const Search = styled.input`
   background-color: #7fc1e7;
   border: none;
   outline: none;
   width: 335px;
   height: 45px;
   border-radius: 20px;
   margin-top: 10px;
   padding: 0 40px 0 20px;
   color: white;

   &::placeholder {
      color: white;
      font-size: 16px;
   }
`;

export const SearchIcon = styled.div`
   position: absolute;
   top: 40%;
   right: 10px;
   cursor: pointer;
`;

export const ButtonWrap = styled.div`
   text-align: end;
`;

export const WriteButton = styled.button`
   width: 60px;
   height: 30px;
   border-radius: 20px;
   color: white;
   background-color: ${(props) => props.theme.mainColor};
`;
