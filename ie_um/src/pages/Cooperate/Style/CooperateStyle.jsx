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

export const CardList = styled.div`
   width: 100%;
   min-height: 550px; /* 카드 영역 최소 높이 확보 */
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
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
   background-color: ${(props) => {
      switch (props.role) {
         case 'PENDING':
            return '#b4b4b4'; // 대기중
         case 'ACCEPTED':
            return '#004193'; // 수락됨 (기본)
         case 'REJECTED':
            return '#ba5c65'; // 거절됨
         case 'LEAVE':
            return '#3e2f2f'; // 탈퇴함 (원하면)
         default:
            return '#0086D1'; // 신청하기 기본 색
      }
   }};
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

export const MoreButton = styled.button`
   background: none;
   border: none;
   cursor: pointer;
   padding: 4px;
   position: absolute;
   right: 40px;
`;
