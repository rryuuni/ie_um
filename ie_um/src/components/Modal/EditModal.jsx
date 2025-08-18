import * as S from './EditModalStyle';
import { useNavigate } from 'react-router-dom';

const EditModal = ({ onclose, editTo }) => {
   const navigate = useNavigate();

   const handleEdit = () => {
      if (editTo) navigate(editTo);
      onclose?.();
   };

   const deletePost = () => {};

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

export default EditModal;
