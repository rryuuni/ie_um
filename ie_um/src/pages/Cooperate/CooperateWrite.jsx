import * as S from './Style/CooperateWriteStyle';

const CooperateWrite = () => {
   return (
      <S.Wrap>
         <S.InputWrap>
            <S.ItemWrap>
               <S.InputTitle>제목</S.InputTitle>
               <S.Input type="text" placeholder="제목을 입력해주세요." />
            </S.ItemWrap>
            <S.ItemWrap>
               <S.InputTitle>내용</S.InputTitle>
               <S.TextArea placeholder="내용을 입력해주세요." />
            </S.ItemWrap>
            <S.ItemWrap>
               <S.InputTitle>정원</S.InputTitle>
               <S.Input type="number" placeholder="정원을 입력해주세요." />
            </S.ItemWrap>
            <S.ItemWrap>
               <S.InputTitle>장소</S.InputTitle>
               <S.Input placeholder="장소를 입력해주세요." />
            </S.ItemWrap>
            <S.ItemWrap>
               <S.InputTitle>일시</S.InputTitle>
               <S.Input
                  type="datetime-local"
                  placeholder="제목을 입력해주세요."
               />
            </S.ItemWrap>
         </S.InputWrap>
         <S.BtnWrap>
            <S.Btn>취소하기</S.Btn>
            <S.Btn>저장하기</S.Btn>
         </S.BtnWrap>
      </S.Wrap>
   );
};

export default CooperateWrite;
