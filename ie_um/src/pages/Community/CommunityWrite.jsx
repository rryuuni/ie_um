import { RiMapPinFill } from 'react-icons/ri';
import * as S from './Style/CommunityWriteStyle';
import { useNavigate } from 'react-router-dom';

const CommunityWrite = () => {
   const navigate = useNavigate();

   return (
      <S.Container>
         <S.Title>글 작성</S.Title>
         <S.Form>
            <S.PostTitleInput type="text" placeholder="제목을 입력하세요." />
            <S.LocationWrap>
               <S.PinIcon>
                  <RiMapPinFill size={17} color="#374957"></RiMapPinFill>
               </S.PinIcon>
               <S.LocationInput type="text" placeholder="장소를 검색하세요." />
            </S.LocationWrap>
            <S.ContentInput type="text" placeholder="내용을 입력하세요." />
            <S.ButtonWrap>
               <S.CancelButton onClick={() => navigate(-1)}>
                  취소
               </S.CancelButton>
               <S.SubmitButton>작성</S.SubmitButton>
            </S.ButtonWrap>
         </S.Form>
      </S.Container>
   );
};

export default CommunityWrite;
