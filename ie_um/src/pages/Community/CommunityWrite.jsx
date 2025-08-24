import { RiMapPinFill } from 'react-icons/ri';
import * as S from './Style/CommunityWriteStyle';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
   createCommunity,
   updateCommunity,
   getCommunity,
} from '../../api/community';

const CommunityWrite = () => {
   const navigate = useNavigate();
   const { id } = useParams();
   const isEdit = Boolean(id);
   const { state } = useLocation();
   const origin = state?.from ?? 'community';

   const [title, setTitle] = useState('');
   const [address, setAddress] = useState('');
   const [content, setContent] = useState('');

   // 수정 모드
   useEffect(() => {
      if (!isEdit) return;
      (async () => {
         try {
            const post = await getCommunity(id);
            setTitle(post?.title ?? '');
            setAddress(post?.address ?? '');
            setContent(post?.content ?? '');
         } catch (e) {
            console.error(e);
            alert('게시글 정보를 불러오지 못했어요.');
            navigate('/community');
         }
      })();
   }, [isEdit, id, navigate]);

   // 유효성
   const canSubmit = title.trim() && address.trim() && content.trim();

   // 게시글 등록
   const handleSubmit = async () => {
      if (!canSubmit) {
         alert('제목/장소/내용을 모두 입력해주세요.');
         return;
      }
      try {
         let newId = null;
         if (isEdit) {
            await updateCommunity({
               id,
               title: title.trim(),
               content: content.trim(),
               address: address.trim(),
            });
            navigate(`/community/${encodeURIComponent(String(id))}`, {
               replace: true,
               state: { from: origin },
            });
            return;
         } else {
            // newId = await createCommunity({
            const res = await createCommunity({
               title: title.trim(),
               content: content.trim(),
               address: address.trim(),
            });
            newId = res?.id ?? res?.data?.id ?? res?.data?.data?.id ?? null;
         }
         alert(isEdit ? '수정되었습니다.' : '작성되었습니다.');
         if (newId) {
            navigate(`/community/${encodeURIComponent(String(id))}`, {
               replace: true,
               state: { from: origin },
            });
         } else {
            navigate('/community', { replace: true });
         }
      } catch (e) {
         console.error(e);
         alert(isEdit ? '수정에 실패했습니다.' : '작성에 실패했습니다.');
      }
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
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="장소를 입력하세요."
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
