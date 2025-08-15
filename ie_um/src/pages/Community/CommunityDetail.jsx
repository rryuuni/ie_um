import { DummyCommunity } from '../../constants/DummyData';
import { useParams } from 'react-router-dom';
import * as S from './Style/CommunityDetailStyle';
import { RiMapPinFill, RiHeart3Line, RiMore2Fill } from 'react-icons/ri';
import useModal from '../../hooks/useModal';
import EditModal from '../../components/Modal/EditModal';

const CommunityDetail = ({ community = DummyCommunity }) => {
   const { id } = useParams();
   const data = community.find((item) => String(item.id) === id);
   const { openModal, closeModal } = useModal();

   return (
      <S.Container>
         <EditModal onclose={() => closeModal('Cooperate_edit_modal')} />
         <S.Inform>
            <S.ProfileImage></S.ProfileImage>
            <S.WriteData>
               <S.Nickname>{data.nickname}</S.Nickname>
               <S.Date>{data.date}</S.Date>
            </S.WriteData>
            <S.MoreButton onClick={() => openModal('Cooperate_edit_modal')}>
               <RiMore2Fill size={20} color="#555" />
            </S.MoreButton>
         </S.Inform>

         <S.LocationWrap>
            <RiMapPinFill></RiMapPinFill>
            <S.Location>{data.location}</S.Location>
         </S.LocationWrap>
         <S.Title>{data.title}</S.Title>
         <S.Content>{data.content}</S.Content>
         <S.HeartWrap>
            <RiHeart3Line></RiHeart3Line>
            <S.HeartCount>{data.heart}</S.HeartCount>
         </S.HeartWrap>
      </S.Container>
   );
};

export default CommunityDetail;
