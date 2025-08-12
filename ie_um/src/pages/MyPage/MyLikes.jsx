import { RiHeart3Fill } from 'react-icons/ri';
import * as S from './Style/MyLikesStyle';

const MOCK = Array.from({ length: 7 }).map((_, i) => ({
   id: i + 1,
   title: '성공회대 근처 맛집 후기',
   date: '2025.08.03',
   like: 123,
}));

const MyLikes = () => {
   return (
      <S.Container>
         <S.Title>좋아요한 글</S.Title>

         <S.List>
            {MOCK.map((item) => (
               <li key={item.id}>
                  <S.Row>
                     <div>
                        <S.PostTitle>{item.title}</S.PostTitle>
                        <S.PostDate>{item.date}</S.PostDate>
                     </div>

                     <S.HeartWrap>
                        <RiHeart3Fill size={11} />
                        <S.HeartCount>{item.like}</S.HeartCount>
                     </S.HeartWrap>
                  </S.Row>
                  <S.Divider />
               </li>
            ))}
         </S.List>
      </S.Container>
   );
};

export default MyLikes;
