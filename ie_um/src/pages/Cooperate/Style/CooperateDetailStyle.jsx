import styled from 'styled-components';

export const Wrap = styled.div`
   display: flex;
   flex-direction: column;
   padding: 100px 30px;
`;

export const TitleWrap = styled.div`
   display: flex;
   justify-content: space-between;
   padding-bottom: 27px;
`;

export const Title = styled.div`
   font-weight: 700;
   font-size: 22px;
`;

export const MenuBtn = styled.button`
   background: none;
   font-size: 17px;
`;

export const Content = styled.div`
   padding: 50px 0;
   font-size: 18px;
   font-weight: 400;
`;

export const UnderLine = styled.div`
   border: 1px solid ${(props) => props.theme.lightGray};
   width: 100%;
`;

export const Detail = styled.div`
   padding-top: 40px;
`;

export const DetailOne = styled.div`
   padding-bottom: 15px;
   font-size: 15px;
`;

export const DetailTitle = styled.div`
   font-weight: 600;
   margin-bottom: 3px;
`;

export const BtnWrap = styled.div`
   margin-top: 60px;
   display: flex;
   justify-content: center;
`;
export const DetailBtn = styled.button`
   width: 87px;
   height: 36px;
   background-color: ${(props) => props.theme.mainColorLight};
   font-weight: 600;
   font-size: 16px;
   border-radius: 15px;
   color: white;
`;
