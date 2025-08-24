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
   font-weight: 600;
   font-size: 16px;
   border-radius: 15px;
   color: white;
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
