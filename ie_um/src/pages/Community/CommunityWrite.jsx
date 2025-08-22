import { RiMapPinFill } from 'react-icons/ri';
import * as S from './Style/CommunityWriteStyle';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DummyCommunity } from '../../constants/DummyData';

const CommunityWrite = () => {
   const navigate = useNavigate();
   const { id } = useParams();
   const isEdit = Boolean(id);

   const [title, setTitle] = useState('');
   const [location, setLocation] = useState('');
   const [content, setContent] = useState('');

   // 수정 모드
   useEffect(() => {
      if (isEdit) {
         const post = DummyCommunity.find((item) => String(item.id) === id);
         if (post) {
            setTitle(post.title);
            setLocation(post.location);
            setContent(post.content);
         }
      }
   }, [id, isEdit]);

   const handleSubmit = () => {
      if (isEdit) {
         console.log('수정된 데이터: ', { title, location, content });
      } else {
         console.log('새 글 데이터: ', { title, location, content });
      }
      navigate('/community');
   };

   return (
      <S.Container>
         <S.Title>{isEdit ? '글 수정' : '글 작성'}</S.Title>
         <S.Form>
            <S.PostTitleInput
               type="text"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               placeholder="제목을 입력하세요."
            />
            <S.LocationWrap>
               <S.PinIcon>
                  <RiMapPinFill size={17} color="#374957"></RiMapPinFill>
               </S.PinIcon>
               <S.LocationInput
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="장소를 검색하세요."
               />
            </S.LocationWrap>
            <S.ContentInput
               type="text"
               value={content}
               onChange={(e) => setContent(e.target.value)}
               placeholder="내용을 입력하세요."
            />
            <S.ButtonWrap>
               <S.CancelButton onClick={() => navigate(-1)}>
                  취소
               </S.CancelButton>
               <S.SubmitButton onClick={handleSubmit}>
                  {isEdit ? '수정' : '작성'}
               </S.SubmitButton>
            </S.ButtonWrap>
         </S.Form>
      </S.Container>
   );
};

export default CommunityWrite;
