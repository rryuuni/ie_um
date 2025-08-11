import { DummyCooperate } from '../../constants/DummyData';
import { useParams } from 'react-router-dom';
import * as S from '../Cooperate/Style/CooperateDetailStyle';
import { CiMenuKebab } from 'react-icons/ci';
import useModal from '../../hooks/useModal';
import EditModal from '../../components/Modal/EditModal';

const CooperateDetail = ({ cooperate = DummyCooperate }) => {
   const { id } = useParams();
   const data = cooperate.find((item) => String(item.id) === id);
   const { openModal, closeModal } = useModal();

   return (
      <S.Wrap>
         <S.TitleWrap>
            <S.Title>{data.title}</S.Title>
            <S.MenuBtn onClick={() => openModal('Cooperate_edit_modal')}>
               <CiMenuKebab />
            </S.MenuBtn>{' '}
         </S.TitleWrap>{' '}
         <EditModal onclose={() => closeModal('Cooperate_edit_modal')} />
         <S.UnderLine />
         <S.Content>{data.content}</S.Content>
         <S.UnderLine />
         <S.Detail>
            <S.DetailOne>
               <S.DetailTitle>일시</S.DetailTitle>
               <div>{data.date}</div>
            </S.DetailOne>
            <S.DetailOne>
               <S.DetailTitle>장소</S.DetailTitle>
               <div>{data.place}</div>
            </S.DetailOne>
            <S.DetailOne>
               <S.DetailTitle>정원</S.DetailTitle>
               <div>
                  {data.people} / {data.capacity}
               </div>
            </S.DetailOne>
            <S.BtnWrap>
               <S.DetailBtn>신청하기</S.DetailBtn>
            </S.BtnWrap>
         </S.Detail>
      </S.Wrap>
   );
};

export default CooperateDetail;
