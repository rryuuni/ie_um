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

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            path: '/',
            element: (
               <RequireAuth>
                  <MainPage />
               </RequireAuth>
            ),
         },
         {
            path: '/hashtag',
            element: (
               <RequireAuth>
                  <MainTag />
               </RequireAuth>
            ),
         },
         {
            path: '/ai/result',
            element: (
               <RequireAuth>
                  <MainResult />
               </RequireAuth>
            ),
         },
         {
            path: '/ai/result/:id',
            element: (
               <RequireAuth>
                  <MainResultDetail />
               </RequireAuth>
            ),
         },

         {
            path: '/mypage',
            element: (
               <RequireAuth>
                  <MyPage />
               </RequireAuth>
            ),
         },
         {
            path: '/mypage/edit-profile',
            element: (
               <RequireAuth>
                  <EditProfile />
               </RequireAuth>
            ),
         },
         {
            path: '/mypage/posts',
            element: (
               <RequireAuth>
                  <MyPosts />
               </RequireAuth>
            ),
         },
         {
            path: '/mypage/likes',
            element: (
               <RequireAuth>
                  <MyLikes />
               </RequireAuth>
            ),
         },
         {
            path: '/mypage/my-cooperate',
            element: (
               <RequireAuth>
                  <MyCooperate />
               </RequireAuth>
            ),
         },
         {
            path: '/mypage/applied-cooperate',
            element: (
               <RequireAuth>
                  <AppliedCooperate />
               </RequireAuth>
            ),
         },

         {
            path: '/community',
            element: (
               <RequireAuth>
                  <Community />
               </RequireAuth>
            ),
         },
         {
            path: '/community/:id',
            element: (
               <RequireAuth>
                  <CommunityDetail />
               </RequireAuth>
            ),
         },
         {
            path: '/community/write',
            element: (
               <RequireAuth>
                  <CommunityWrite />
               </RequireAuth>
            ),
         },

         {
            path: '/cooperate',
            element: (
               <RequireAuth>
                  <Cooperate />
               </RequireAuth>
            ),
         },
         {
            path: '/cooperate/:id',
            element: (
               <RequireAuth>
                  <CooperateDetail />
               </RequireAuth>
            ),
         },
         {
            path: '/cooperate/write',
            element: (
               <RequireAuth>
                  <CooperateWrite />
               </RequireAuth>
            ),
         },
         {
            path: '/cooperate/edit/:id',
            element: (
               <RequireAuth>
                  <CooperateWrite />{' '}
               </RequireAuth>
            ),
         },
      ],
   },
   { path: '/login', element: <Login /> },
   { path: '/api/oauth2/callback/kakao', element: <KakaoRedirection /> },
]);
