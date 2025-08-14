import * as S from './Style/MainTagStyle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainTag = () => {
   const navigate = useNavigate();

   const hashtagCategories = {
      장소: ['식당', '카페', '도서관', '복지', '병원', '약국', '공원', '학원'],
      분위기: ['조용한', '힙한', '뷰좋은', '없음'],
      목적: ['친목', '데이트', '휴식', '없음'],
   };

   const [selectedTags, setSelectedTags] = useState({
      장소: '',
      분위기: '',
      목적: '',
   });

   const selectTag = (category, tag) => {
      setSelectedTags((prev) => ({
         ...prev,
         [category]: prev[category] === tag ? '' : tag, // 같은 거 클릭 시 해제
      }));
   };

   return (
      <S.Wrap>
         <S.Title>태그를 선택해주세요.</S.Title>
         {Object.keys(hashtagCategories).map((category) => (
            <div key={category} style={{ marginBottom: '15px' }}>
               <S.TagTitle>{category}</S.TagTitle>
               {hashtagCategories[category].map((tag) => (
                  <S.TagBtn
                     key={tag}
                     onClick={() => selectTag(category, tag)}
                     active={selectedTags[category] === tag}
                  >
                     #{tag}
                  </S.TagBtn>
               ))}
            </div>
         ))}

         <S.BtnWrap>
            <S.Btn onClick={() => navigate('/ai/result')}>
               AI 추천 시작하기
            </S.Btn>
         </S.BtnWrap>
      </S.Wrap>
   );
};

export default MainTag;
