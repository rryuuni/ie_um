import * as S from './EditModalStyle';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/AxiosInstance';

const CooperateEditModal = ({ onclose, editTo, id }) => {
   const navigate = useNavigate();

   const handleEdit = () => {
      if (editTo) navigate(editTo);
      onclose();
   };

   const deletePost = async () => {
      try {
         await axiosInstance.delete(`/api/accompanies/${id}`);
         alert('삭제되었습니다.');
         navigate('/cooperate');
      } catch (err) {
         alert('삭제 실패');
         console.error(err);
      }
   };

   return (
      <S.Dialog
         id="Cooperate_edit_modal"
         onClick={(e) => {
            if (e.target === e.currentTarget) {
               onclose();
            }
         }}
      >
         <S.Button onClick={handleEdit}>수정하기</S.Button>
         <S.Button style={{ color: '#BD1A1A' }} onClick={deletePost}>
            삭제하기
         </S.Button>
      </S.Dialog>
   );
};

export default CooperateEditModal;
