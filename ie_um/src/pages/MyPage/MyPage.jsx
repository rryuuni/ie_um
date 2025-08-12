import { useNavigate } from 'react-router-dom';
import { RiPencilLine, RiCameraLine } from 'react-icons/ri';
import * as S from './Style/MyPageStyle';
import theme from '../../styles/theme';

const MyPage = () => {
   const navigate = useNavigate();
   const userName = '김멋사';

   const menuList = [
      { name: '내가 쓴 글', path: '/mypage/posts' },
      { name: '좋아요한 글', path: '/mypage/likes' },
      { name: '저장한 장소', path: '/mypage/scraps-location' },
      { name: '나의 동행 그룹', path: '/mypage/my-accompanies' },
      { name: '신청한 동행 그룹', path: '/mypage/applied-accompanies' },
   ];
   return (
      <S.Container>
         <S.ProfileWrap>
            <S.ProfileImage></S.ProfileImage>
            <S.CameraWrap>
               <RiCameraLine color="#374957" size={14} />
            </S.CameraWrap>

            <S.UserName>
               <span style={{ color: theme.mainColor }}>{userName}</span>님
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
            <S.MenuItem>로그아웃</S.MenuItem>
         </S.MenuWrap>
      </S.Container>
   );
};

export default MyPage;
