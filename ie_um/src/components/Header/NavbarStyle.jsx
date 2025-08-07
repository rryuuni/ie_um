import styled from 'styled-components';

// 블러 배경 오버레이
export const Overlay = styled.div`
   position: absolute;
   inset: 0;
   backdrop-filter: blur(2px);
   pointer-events: ${(props) => (props.open ? 'auto' : 'none')};
   opacity: ${(props) => (props.open ? 1 : 0)};
`;

// 네비게이션 바 컨테이너
export const NavbarContainer = styled.nav`
   position: absolute;
   top: 0;
   right: 0;
   width: 200px;
   background-color: ${(props) => props.theme.lightGray};
   padding: 30px;
   border-radius: 10px;
   display: ${(props) => (props.open ? 'flex' : 'none')};
`;

export const MenuList = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 16px;
`;

export const MenuItem = styled.li`
   font-size: 16px;
   cursor: pointer;
   padding: 8px 16px;
`;
