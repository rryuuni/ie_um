import { useState, useEffect } from 'react';
import * as S from './Style/EditProfileStyle';

const EditProfile = () => {
   const [nickname, setNickName] = useState('');
   const [age, setAge] = useState('');
   const [gender, setGender] = useState('');
   const [buttonActive, setButtonActive] = useState('');

   const ageOptions = ['10대', '20대', '30대'];
   const genderOptions = ['여자', '남자'];

   // 저장된 정보 불러오기
   useEffect(() => {
      const saved = localStorage.getItem('profile');
      if (saved) {
         const { nickname = '', age = '', gender = '' } = JSON.parse(saved);
         setNickName(nickname);
         setAge(age);
         setGender(gender);
      }
   }, []);

   const isValid = nickname.trim() !== '' && !!age && !!gender;

   // 저장 로직
   const handleSubmit = (e) => {
      e.preventDefault();
      if (isValid) {
         const data = { nickname: nickname.trim(), age, gender };
         localStorage.setItem('profile', JSON.stringify(data));
         alert('저장되었습니다.');
      }
   };

   return (
      <S.Container>
         <S.Title>당신에게 딱 맞는 자원을 추천하기 위해 필요해요.</S.Title>
         <S.Label htmlFor="nickname">닉네임</S.Label>
         <S.Input
            id="nickname"
            type="text"
            placeholder="닉네임을 입력하세요."
            value={nickname}
            onChange={(e) => setNickName(e.target.value)}
         />

         <S.Label>나이</S.Label>
         <S.ToggleGroup>
            {ageOptions.map((option) => (
               <S.ToggleButton
                  key={option}
                  selected={age === option}
                  onClick={() => setAge(option)}
               >
                  {option}
               </S.ToggleButton>
            ))}
         </S.ToggleGroup>

         <S.Label>성별</S.Label>
         <S.ToggleGroup>
            {genderOptions.map((option) => (
               <S.ToggleButton
                  key={option}
                  selected={gender === option}
                  onClick={() => setGender(option)}
               >
                  {option}
               </S.ToggleButton>
            ))}
         </S.ToggleGroup>
         <S.ButtonWrap>
            <S.SaveButton onClick={handleSubmit}>저장</S.SaveButton>
         </S.ButtonWrap>
      </S.Container>
   );
};

export default EditProfile;
