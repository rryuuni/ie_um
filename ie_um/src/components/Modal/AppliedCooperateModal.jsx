import * as S from './DeleteModalStyle';
import axiosInstance from '../../api/AxiosInstance';

const AppliedCooperateModal = ({ onclose, id }) => {
   const unApplyBtn = async () => {
      try {
         await axiosInstance.delete(`/api/accompanies/unapply/${id}`);
         alert('취소되었습니다.');
         onclose();
      } catch (err) {
         alert('취소 실패');
         console.error(err);
      }
   };
   return (
      <S.Dialog
         id="Applied_cooperate_modal"
         onClick={(e) => {
            if (e.target === e.currentTarget) {
               onclose();
            }
         }}
      >
         <S.Button style={{ color: '#BD1A1A' }} onClick={unApplyBtn}>
            취소하기
         </S.Button>
      </S.Dialog>
   );
};

export default AppliedCooperateModal;
