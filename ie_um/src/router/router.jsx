import { createBrowserRouter } from 'react-router-dom';
import Community from '../pages/Community/Community';
import Cooperate from '../pages/Cooperate/Cooperate';
import Login from '../pages/Login/Login';
import MainPage from '../pages/MainPage/MainPage';
import MyPage from '../pages/MyPage/MyPage';
import Layout from '../components/Layout';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         { path: '/', element: <MainPage /> },
         { path: '/community', element: <Community /> },
         { path: '/cooperate', element: <Cooperate /> },
         { path: '/mypage', element: <MyPage /> },
         { path: '/login', element: <Login /> },
      ],
   },
]);
