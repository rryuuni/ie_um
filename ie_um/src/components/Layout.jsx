import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import styled from 'styled-components';

export const Main = styled.main`
   padding-top: 56px;
`;

const Layout = () => {
   return (
      <>
         <Header />
         <Main>
            <Outlet />
         </Main>
      </>
   );
};

export default Layout;
