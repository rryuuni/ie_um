import * as S from './Style/CooperateWriteStyle';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../api/AxiosInstance';
import { useEffect, useState } from 'react';

const CooperateWrite = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const placeFromDetail = location.state?.place || '';
   const { id } = useParams();
   const isEdit = Boolean(id);

   const [board, setBoard] = useState({
      title: '',
      content: '',
      maxPersonnel: 0,
      time: '',
      address: '',
   });

   const { title, content, maxPersonnel, time, address } = board;

   useEffect(() => {
      if (isEdit) {
         axiosInstance
            .get(`/api/accompanies/${id}`)
            .then((res) => setBoard(res.data.data))
            .catch((err) => console.error(err));
      } else if (placeFromDetail) {
         setBoard((prev) => ({ ...prev, address: placeFromDetail }));
      }
   }, [id, isEdit, placeFromDetail]);

   const onChange = (e) => {
      const { value, name } = e.target;
      setBoard({
         ...board,
         [name]: value,
      });
   };

   const saveBoard = async () => {
      try {
         if (isEdit) {
            await axiosInstance.put(`/api/accompanies/${id}`, board);
            alert('수정되었습니다.');
            navigate(`/cooperate/${id}`);
         } else {
            await axiosInstance.post(`/api/accompanies`, board);
            alert('등록되었습니다.');
            navigate('/cooperate');
         }
      } catch (err) {
         alert('등록하기 실패');
         console.error(err);
      }
   };

   return (
      <S.Wrap>
         <S.InputWrap>
            <S.ItemWrap>
               <S.InputTitle>제목</S.InputTitle>
               <S.Input
                  type="text"
                  placeholder="제목을 입력해주세요."
                  name="title"
                  value={title}
                  onChange={onChange}
               />
            </S.ItemWrap>
            <S.ItemWrap>
               <S.InputTitle>내용</S.InputTitle>
               <S.TextArea
                  placeholder="내용을 입력해주세요."
                  name="content"
                  value={content}
                  onChange={onChange}
               />
            </S.ItemWrap>
            <S.ItemWrap>
               <S.InputTitle>정원</S.InputTitle>
               <S.Input
                  type="number"
                  placeholder="정원을 입력해주세요."
                  name="maxPersonnel"
                  value={maxPersonnel}
                  onChange={onChange}
               />
            </S.ItemWrap>
            <S.ItemWrap>
               <S.InputTitle>장소</S.InputTitle>
               <S.Input
                  placeholder="장소를 입력해주세요."
                  name="address"
                  value={address}
                  onChange={onChange}
               />
            </S.ItemWrap>
            <S.ItemWrap>
               <S.InputTitle>일시</S.InputTitle>
               <S.Input
                  type="datetime-local"
                  name="time"
                  value={time}
                  onChange={onChange}
               />
            </S.ItemWrap>
         </S.InputWrap>
         <S.BtnWrap>
            <S.Btn onClick={() => navigate('/cooperate')}>취소하기</S.Btn>
            <S.Btn type="button" onClick={saveBoard}>
               저장하기
            </S.Btn>
         </S.BtnWrap>
      </S.Wrap>
   );
};

export default CooperateWrite;
