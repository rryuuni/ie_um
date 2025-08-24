import * as S from './HeaderStyle';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
   const [open, setOpen] = useState(false);

   return (
      <>
         <S.HeaderSt>
            <Link to="/">
               <S.Logo src="/images/ie_um.png" />
            </Link>
            <S.Nav onClick={() => setOpen(true)}>
               <RxHamburgerMenu size={24} />
            </S.Nav>
         </S.HeaderSt>

         <Navbar open={open} setOpen={setOpen} />
      </>
   );
};

export default Header;
