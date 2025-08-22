import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   padding: 10px 30px;
`;

export const Title = styled.div`
   font-size: 25px;
   font-weight: 500;
   margin-bottom: 30px;
`;

export const CreateBtn = styled.button`
   background-color: ${(props) => props.theme.mainColor};
   color: white;
   width: 68px;
   height: 30px;
   border-radius: 10px;
   font-weight: 600;
   margin-top: -34px;
   margin-bottom: 8px;
   margin-left: auto;
   margin-right: 3px;
`;

export const CardWrap = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`;

export const Card = styled.div`
   display: flex;
   flex-direction: column;
   box-shadow: 0 0 3px 1px rgb(0, 0, 0, 0.12);
   border-radius: 10px;
   width: 100%;
   height: 118px;
   margin-bottom: 20px;
   padding: 25px;
`;

export const CardTitle = styled.div`
   font-weight: 700;
   font-size: 20px;
`;

export const CardDate = styled.div`
   font-weight: 400;
   font-size: 13px;
   padding-top: 15px;
`;

export const CardPlace = styled.div`
   font-weight: 500;
   font-size: 13px;
   color: ${(props) => props.theme.mainColor};
   padding-top: 5px;
`;

export const CardCapacity = styled.div`
   font-weight: 400;
   font-size: 10px;
`;

export const CardBtn = styled.button`
   width: 62px;
   height: 26px;
   border-radius: 10px;
   margin-top: 3px;
   color: white;
   font-size: 12px;
   font-weight: 600;
   background-color: ${(props) => props.theme.mainColorLight};
`;

export const BtnWrap = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: auto;
   margin-bottom: -5px;
`;

export const StyledLink = styled(Link)`
   text-decoration: none;
   color: black;
`;

// 마이페이지 동행그룹 스타일 컴포넌트
export const StateBtn = styled.button`
   width: 62px;
   height: 26px;
   border-radius: 10px;
   margin-top: 3px;
   color: white;
   font-size: 12px;
   font-weight: 600;

   background: ${({ $status, theme }) =>
      $status === 'rejected'
         ? '#BA5C65'
         : $status === 'pending'
           ? '#B4B4B4'
           : theme.mainColorLight}; /* accepted */
`;

export const MoreButton = styled.button`
   background: none;
   border: none;
   cursor: pointer;
   padding: 4px;
   position: absolute;
   right: 40px;
`;
