import * as S from './Style/MyPageStyle';
import theme from '../../styles/theme';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiPencilLine, RiCameraLine } from 'react-icons/ri';
import { useMemberStore } from '../../store/useMemberStore';
import { fetchMyProfile, updateProfileImage } from '../../api/profile';

const MyPage = () => {
   const navigate = useNavigate();
   const loadMe = useMemberStore((s) => s.loadMe);
   const name = useMemberStore((s) => s.name);
   const nickName = useMemberStore((s) => s.nickName);

   const [avatar, setAvatar] = useState(
      localStorage.getItem('profileImg') || '',
   );
   const fileRef = useRef(null);

   const oauthName = localStorage.getItem('oauthName') || '';
   const displayName =
      (nickName && nickName.trim()) || (name && name.trim()) || oauthName || '';

   useEffect(() => {
      loadMe();
      (async () => {
         try {
            const me = await fetchMyProfile();
            if (me?.profileImg) {
               setAvatar(me.profileImg);
               localStorage.setItem('profileImg', me.profileImg);
            }
         } catch {}
      })();
   }, [loadMe]);

   const openFile = (e) => {
      e.preventDefault();
      e.stopPropagation();
      fileRef.current?.click();
   };

   const onChangeFile = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      try {
         const res = await updateProfileImage(file);
         const url = res?.profileImg;
         if (url) {
            setAvatar(url);
            localStorage.setItem('profileImg', url);
         }
         alert('프로필 이미지가 변경되었습니다.');
      } catch (err) {
         console.error(err);

         if (err.response?.status === 413) {
            alert('이미지 파일이 너무 큽니다. 더 작은 파일을 업로드해주세요.');
         } else {
            alert('이미지 업로드에 실패했습니다.');
         }
      } finally {
         e.target.value = '';
      }
   };

   const menuList = [
      { name: '내가 쓴 글', path: '/mypage/posts' },
      { name: '좋아요한 글', path: '/mypage/likes' },
      { name: '저장한 장소', path: '/mypage/scraps-location' },
      { name: '나의 동행 그룹', path: '/mypage/my-cooperate' },
      { name: '신청한 동행 그룹', path: '/mypage/applied-cooperate' },
   ];

   return (
      <S.Container>
         <S.ProfileWrap>
            <S.ProfileImage>
               {avatar ? (
                  <img
                     src={avatar}
                     alt="profile"
                     style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                     }}
                  />
               ) : null}
               <S.CameraWrap onClick={openFile}>
                  <RiCameraLine color="#374957" size={14} />
               </S.CameraWrap>
               <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={onChangeFile}
               />
            </S.ProfileImage>

            <S.UserName>
               <span style={{ color: theme.mainColor }}>
                  {displayName || '사용자'}
               </span>
               님
               <RiPencilLine
                  style={{ cursor: 'pointer' }}
                  color="#999"
                  size={15}
                  onClick={() => navigate('/mypage/edit-profile')}
               />
            </S.UserName>
         </S.ProfileWrap>

         <S.MenuWrap>
            {menuList.map((item, index) => (
               <div key={item.path}>
                  <S.MenuItem onClick={() => navigate(item.path)}>
                     {item.name}
                  </S.MenuItem>
                  {index < menuList.length && <S.Divider />}
               </div>
            ))}
            <S.MenuItem
               onClick={() => {
                  localStorage.removeItem('accessToken');
                  localStorage.removeItem('memberId');
                  localStorage.removeItem('oauthName');
                  localStorage.removeItem('profileImg');
                  alert('로그아웃 되었습니다.');
                  navigate('/login');
               }}
            >
               로그아웃
            </S.MenuItem>
         </S.MenuWrap>
      </S.Container>
   );
};

export default MyPage;
