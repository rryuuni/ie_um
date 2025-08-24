import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Style/EditProfileStyle';
import {
   useMemberStore,
   AGE_MAP,
   GENDER_MAP,
} from '../../store/useMemberStore';

const ageOptions = ['10대', '20대', '30대', '40대 이상'];
const genderOptions = ['여자', '남자'];

const EditProfile = () => {
   const navigate = useNavigate();
   const loadMe = useMemberStore((s) => s.loadMe);
   const storeName = useMemberStore((s) => s.name);
   const storeNick = useMemberStore((s) => s.nickName);
   const storeAge = useMemberStore((s) => s.age);
   const storeGender = useMemberStore((s) => s.gender);
   const saveProfile = useMemberStore((s) => s.saveProfile);

   const [nickname, setNickName] = useState('');
   const [ageLabel, setAgeLabel] = useState('');
   const [genderLabel, setGenderLabel] = useState('');

   // 저장되어 있는 정보 불러오기
   useEffect(() => {
      loadMe();
   }, [loadMe]);

   // 스토어 -> 입력값 동기화
   useEffect(() => {
      setNickName(storeNick?.trim() || storeName || '');
      setAgeLabel(storeAge ? AGE_MAP[storeAge] : '');
      setGenderLabel(storeGender ? GENDER_MAP[storeGender] : '');
   }, [storeName, storeNick, storeAge, storeGender]);

   // 유효성 검사
   const isValid = nickname.trim() !== '' && !!ageLabel && !!genderLabel;

   // 저장 로직
   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!isValid) return;

      try {
         await saveProfile({ nickName: nickname, ageLabel, genderLabel });
         alert('저장되었습니다.');
         navigate('/mypage');
      } catch (err) {
         console.error(err);
         alert('저장에 실패했습니다. 잠시 후 다시 시도해 주세요.');
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
                  selected={ageLabel === option}
                  onClick={() => setAgeLabel(option)}
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
                  selected={genderLabel === option}
                  onClick={() => setGenderLabel(option)}
               >
                  {option}
               </S.ToggleButton>
            ))}
         </S.ToggleGroup>
         <S.ButtonWrap>
            <S.SaveButton onClick={handleSubmit} disabled={!isValid}>
               저장
            </S.SaveButton>
         </S.ButtonWrap>
      </S.Container>
   );
};

export default EditProfile;
