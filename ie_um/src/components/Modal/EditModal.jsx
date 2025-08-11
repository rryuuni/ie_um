import * as S from './EditModalStyle';

const EditModal = ({ onclose }) => {
   return (
      <S.Dialog
         id="Cooperate_edit_modal"
         onClick={(e) => {
            if (e.target === e.currentTarget) {
               onclose();
            }
         }}
      >
         <S.Button onClick={onclose}>수정하기</S.Button>
         <S.Button style={{ color: '#BD1A1A' }} onClick={onclose}>
            삭제하기
         </S.Button>
      </S.Dialog>
   );
};

export default EditModal;
