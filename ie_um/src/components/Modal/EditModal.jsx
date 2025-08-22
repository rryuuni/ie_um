// EditModal.jsx
import * as S from './EditModalStyle';

const EditModal = ({ modalId = 'edit_modal', onClose, onEdit, onDelete }) => {
   return (
      <S.Dialog
         id={modalId}
         onClick={(e) => {
            if (e.target === e.currentTarget && typeof onClose === 'function') {
               onClose();
            }
         }}
      >
         <S.Button
            onClick={() => {
               onEdit?.();
               onClose?.();
            }}
         >
            수정하기
         </S.Button>
         <S.Button
            style={{ color: '#BD1A1A' }}
            onClick={() => {
               onDelete?.();
               onClose?.();
            }}
         >
            삭제하기
         </S.Button>
      </S.Dialog>
   );
};

export default EditModal;
