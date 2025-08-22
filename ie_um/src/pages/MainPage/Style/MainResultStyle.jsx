import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 40px 30px;
`;

export const Title = styled.div`
   font-size: 24px;
   font-weight: 400;
   margin-bottom: 10px;
`;

export const SecTitle = styled.div`
   font-size: 13px;
   font-weight: 400;
   color: #959595;
   margin-bottom: 50px;
`;

export const CardWrap = styled.div`
   display: flex;
   flex-direction: column;
   box-shadow: 0 0 3px 1px rgb(0, 0, 0, 0.12);
   padding: 25px 15px;
   border-radius: 20px;
   margin-bottom: 25px;
   width: 100%;
`;

export const CardDateWrap = styled.div`
   display: flex;
   flex-direction: row;
`;

export const CardDate = styled.div`
   font-size: 15px;
   color: ${(props) => props.theme.mainColor};
   font-weight: 400;
   margin-left: 5px;
   margin-bottom: 15px;
`;

export const CardTitle = styled.div`
   font-size: 20px;
   font-weight: 400;
   margin-bottom: 10px;
`;

export const CardPlace = styled.div`
   font-size: 13px;
   font-weight: 400;
   color: #959595;
`;

export const LinkSt = styled(Link)`
   text-decoration: none;
   color: black;
`;
