import { createBrowserRouter } from 'react-router-dom';
import Community from '../pages/Community/Community';
import Cooperate from '../pages/Cooperate/Cooperate';
import Login from '../pages/Login/Login';
import MainPage from '../pages/MainPage/MainPage';
import MyPage from '../pages/MyPage/MyPage';
import Layout from '../components/Layout';
import CooperateDetail from '../pages/Cooperate/CooperateDetail';
import CooperateWrite from '../pages/Cooperate/CooperateWrite';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         { path: '/', element: <MainPage /> },
         { path: '/community', element: <Community /> },
         { path: '/cooperate', element: <Cooperate /> },
         { path: '/cooperate/:id', element: <CooperateDetail /> },
         { path: '/cooperate/write', element: <CooperateWrite /> },
         { path: '/mypage', element: <MyPage /> },
      ],
   },
   {
      path: '/login',
      element: <Login />, // Header 없이 렌더링됨
   },
]);
