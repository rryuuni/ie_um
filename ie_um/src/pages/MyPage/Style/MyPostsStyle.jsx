import styled from 'styled-components';

export const Container = styled.div`
   margin: 0 auto;
   padding: 0 30px;
`;

export const Title = styled.h1`
   text-align: center;
   font-size: 25px;
   margin: 50px 0;
`;

export const List = styled.ul`
   list-style: none;
   padding: 0;
   margin: 50px 0;
`;

export const Row = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 20px;
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
