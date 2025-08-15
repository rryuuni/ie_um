import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
   margin: 0 auto;
   padding: 0 30px;
`;

export const Title = styled.h1`
   text-align: center;
   font-size: 25px;
   margin-top: 50px;
`;

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
   margin-top: 20px;
   padding: 0 40px 0 20px;
   color: white;

   &::placeholder {
      color: white;
      font-size: 16px;
   }
`;

export const SearchIcon = styled.div`
   position: absolute;
   top: 50%;
   right: 10px;
   cursor: pointer;
`;

export const List = styled.ul`
   list-style: none;
   padding: 0;
`;

export const PostLink = styled(Link)`
   display: flex;
   justify-content: space-between;
   margin-top: 20px;
   text-decoration: none;
   color: black;
`;

export const PostTitle = styled.div`
   font-size: 18px;
   font-weight: 500;
   margin-bottom: 10px;
`;

export const PostDate = styled.div`
   font-size: 14px;
   font-weight: 200;
`;

export const HeartWrap = styled.div`
   display: flex;
   align-items: end;
   gap: 6px;
`;

export const HeartCount = styled.span`
   font-size: 11px;
`;

export const Divider = styled.div`
   height: 1px;
   background-color: #7f9fc8;
   margin: 10px 0;
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
