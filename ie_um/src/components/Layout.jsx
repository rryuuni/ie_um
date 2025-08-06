import { Outlet } from 'react-router-dom';

const Layout = () => {
   return (
      <>
         {/**여기에 헤더 */}
         <main>
            <Outlet />
         </main>
      </>
   );
};

export default Layout;
