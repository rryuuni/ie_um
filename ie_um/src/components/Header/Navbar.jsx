import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './NavbarStyle';

const Navbar = ({ open, setOpen }) => {
   const location = useLocation();
   const navigate = useNavigate();

   const menu = [
      { name: '커뮤니티', path: '/community' },
      { name: '동행그룹', path: '/cooperate' },
      { name: '마이페이지', path: '/mypage' },
   ];

   return (
      <>
         <S.Overlay open={open} onClick={() => setOpen(false)} />

         <S.NavbarContainer open={open}>
            <S.MenuList>
               {menu.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                     <S.MenuItem
                        key={item.path}
                        $active={isActive}
                        onClick={() => {
                           setOpen(false);
                           navigate(item.path);
                        }}
                     >
                        <span>{item.name}</span>
                     </S.MenuItem>
                  );
               })}
            </S.MenuList>
         </S.NavbarContainer>
      </>
   );
};

export default Navbar;
