import { createBrowserRouter } from 'react-router-dom';
import RequireAuth from './RequireAuth';

import MainPage from '../pages/MainPage/MainPage';
import MainTag from '../pages/MainPage/MainTag';
import MainResult from '../pages/MainPage/MainResult';
import MainResultDetail from '../pages/MainPage/MainResultDetail';

//마이페이지
import MyPage from '../pages/MyPage/MyPage';
import MyPosts from '../pages/MyPage/MyPosts';
import MyLikes from '../pages/MyPage/MyLikes';
import MyScraps from '../pages/MyPage/MyScraps';
import EditProfile from '../pages/MyPage/EditProfile';
import MyCooperate from '../pages/MyPage/MyCooperate';
import AppliedCooperate from '../pages/MyPage/AppliedCooperate';

//커뮤니티
import Community from '../pages/Community/Community';
import CommunityDetail from '../pages/Community/CommunityDetail';
import CommunityWrite from '../pages/Community/CommunityWrite';

//동행
import Cooperate from '../pages/Cooperate/Cooperate';
import CooperateDetail from '../pages/Cooperate/CooperateDetail';
import CooperateWrite from '../pages/Cooperate/CooperateWrite';

//로그인
import Login from '../pages/Login/Login';
import Layout from '../components/Layout';
import KakaoRedirection from '../pages/Login/KakaoRedirection';

// export const router = createBrowserRouter([
//    {
//       path: '/',
//       element: <Layout />,
//       children: [
//          { path: '/', element: <MainPage /> },
//          { path: '/community', element: <Community /> },
//          { path: '/cooperate', element: <Cooperate /> },
//          { path: '/cooperate/:id', element: <CooperateDetail /> },
//          { path: '/cooperate/write', element: <CooperateWrite /> },
//          { path: '/mypage', element: <MyPage /> },
//          { path: '/hashtag', element: <MainTag /> },
//          { path: '/ai/result', element: <MainResult /> },
//          { path: '/ai/result/:id', element: <MainResultDetail /> },
//          { path: '/mypage/edit-profile', element: <EditProfile /> },
//          { path: '/mypage/posts', element: <MyPosts /> },
//          { path: '/mypage/likes', element: <MyLikes /> },
//          { path: '/mypage/scraps-location', element: <MyScraps /> },
//          { path: '/community', element: <Community /> },
//          { path: '/community/:id', element: <CommunityDetail /> },
//          { path: '/community/write', element: <CommunityWrite /> },
//       ],
//    },
//    {
//       path: '/login',
//       element: <Login />, // Header 없이 렌더링됨
//    },
//    { path: '/api/oauth2/callback/kakao', element: <KakaoRedirection /> },
// ]);

export const router = createBrowserRouter([
   { path: '/login', element: <Login /> },
   { path: '/api/oauth2/callback/kakao', element: <KakaoRedirection /> },

   {
      path: '/',
      element: (
         <RequireAuth>
            <Layout />
         </RequireAuth>
      ),
      children: [
         { path: '/', element: <MainPage /> },
         { path: '/community', element: <Community /> },
         { path: '/cooperate', element: <Cooperate /> },
         { path: '/cooperate/:id', element: <CooperateDetail /> },
         { path: '/cooperate/write', element: <CooperateWrite /> },
         { path: '/hashtag', element: <MainTag /> },
         { path: '/ai/result', element: <MainResult /> },
         { path: '/ai/result/:id', element: <MainResultDetail /> },
         { path: '/mypage', element: <MyPage /> },
         { path: '/mypage/edit-profile', element: <EditProfile /> },
         { path: '/mypage/posts', element: <MyPosts /> },
         { path: '/mypage/likes', element: <MyLikes /> },
         { path: '/mypage/scraps-location', element: <MyScraps /> },
         { path: '/mypage/my-cooperate', element: <MyCooperate /> },
         { path: '/mypage/applied-cooperate', element: <AppliedCooperate /> },
         { path: '/community', element: <Community /> },
         { path: '/community/:id', element: <CommunityDetail /> },
         { path: '/community/write', element: <CommunityWrite /> },
         { path: '/community/edit/:id', element: <CommunityWrite /> },
      ],
   },
]);
