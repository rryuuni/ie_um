import * as S from './DeleteModalStyle';

const DeleteModal = ({ onclose }) => {
   return (
      <S.Dialog
         id="Delete_modal"
         onClick={(e) => {
            if (e.target === e.currentTarget) {
               onclose();
            }
         }}
      >
         <S.Button style={{ color: '#BD1A1A' }} onClick={onclose}>
            삭제하기
         </S.Button>
      </S.Dialog>
   );
};

export default DeleteModal;
