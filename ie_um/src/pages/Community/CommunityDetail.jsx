import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Style/CommunityDetailStyle';
import {
   RiMapPinFill,
   RiHeart3Line,
   RiMore2Fill,
   RiHeart3Fill,
} from 'react-icons/ri';
import useModal from '../../hooks/useModal';
import EditModal from '../../components/Modal/EditModal';
import {
   getCommunity,
   deleteCommunity,
   likeCommunity,
   unlikeCommunity,
} from '../../api/community';

const CommunityDetail = () => {
   const { id } = useParams();
   const { openModal, closeModal } = useModal();
   const navigate = useNavigate();

   const [post, setPost] = useState(null);
   const [loading, setLoading] = useState(true);

   const [likeCount, setLikeCount] = useState(0);
   const [liked, setLiked] = useState(false);
   const [likeBusy, setLikeBusy] = useState(false);

   const myId = Number(localStorage.getItem('memberId'));

   const toLocal = (s) => {
      if (!s) return '';
      const d = new Date(s.replace(' ', 'T'));
      d.setHours(d.getHours() + 9);
      return d.toLocaleString([], {
         year: 'numeric',
         month: '2-digit',
         day: '2-digit',
         hour: '2-digit',
         minute: '2-digit',
         hour12: false,
      });
   };

   // 좋아요 로직
   const toggleLike = async () => {
      if (likeBusy) return;
      setLikeBusy(true);
      const prevLiked = liked;
      const prevCount = likeCount;
      if (prevLiked) {
         setLiked(false);
         setLikeCount((c) => Math.max(0, c - 1));
         try {
            await unlikeCommunity(Number(id));
         } catch (e) {
            setLiked(prevLiked);
            setLikeCount(prevCount);
            console.error(e);
         } finally {
            setLikeBusy(false);
         }
      } else {
         setLiked(true);
         setLikeCount((c) => c + 1);
         try {
            await likeCommunity(Number(id));
         } catch (e) {
            setLiked(prevLiked);
            setLikeCount(prevCount);
            console.error(e);
         } finally {
            setLikeBusy(false);
         }
      }
   };

   useEffect(() => {
      (async () => {
         try {
            setLoading(true);
            const data = await getCommunity(Number(id));
            setPost(data);
            setLikeCount(data?.likeCount ?? 0);
            setLiked(Boolean(data?.myLike));
         } catch (e) {
            console.error(e);
            alert('게시글을 불러오지 못했습니다.');
            navigate('/community');
         } finally {
            setLoading(false);
         }
      })();
   }, [id, navigate]);

   // 생성자 변수
   const isOwner = post && Number(post.memberId) === myId;

   // 삭제 로직
   const onDelete = async () => {
      if (!window.confirm('정말 삭제하시겠어요?')) return;
      try {
         await deleteCommunity(id);
         alert('삭제되었습니다.');
         navigate('/community');
      } catch (e) {
         console.error(e);
         const code = e?.response?.status;
         if (code === 401 || code === 403) alert('삭제 권한이 없습니다.');
         else alert('삭제에 실패했습니다.');
      }
   };

   if (loading) {
      return <div style={{ padding: 16 }}>불러오는 중</div>;
   }
   if (!post) {
      return <div style={{ padding: 16 }}>게시글을 불러오지 못했습니다.</div>;
   }

   const displayTitle = post.title || '';
   const displayContent = post.content || '';
   const displayAddress = post.address || '';
   const displayNickname = post.nickName || '작성자';
   const displayDate = toLocal(post.createDate);
   const avatar = post.profileUrl || '';
   return (
      <S.Container>
         <EditModal
            onclose={() => closeModal('Cooperate_edit_modal')}
            id={post.id}
            onEdit={() => navigate(`/community/edit/${post.id}`)}
            onDelete={onDelete}
            onclose={() => closeModal('edit_modal')}
            id={data.id}
            editTo={`/community/edit/${data.id}`}
         />
         <S.Inform>
            <S.ProfileImage>
               {avatar && (
                  <img
                     src={avatar}
                     alt={displayNickname}
                     style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                     }}
                  />
               )}
            </S.ProfileImage>
            <S.WriteData>
               <S.Nickname>{displayNickname}</S.Nickname>
               <S.Date>{displayDate}</S.Date>
            </S.WriteData>
            {isOwner && (
               <S.MoreButton onClick={() => openModal('Cooperate_edit_modal')}>
                  <RiMore2Fill size={20} color="#555" />
               </S.MoreButton>
            )}
            <S.MoreButton onClick={() => openModal('edit_modal')}>
               <RiMore2Fill size={20} color="#555" />
            </S.MoreButton>
         </S.Inform>

         <S.LocationWrap>
            <RiMapPinFill></RiMapPinFill>
            <S.Location>{displayAddress}</S.Location>
         </S.LocationWrap>
         <S.Title>{displayTitle}</S.Title>
         <S.Content>{displayContent}</S.Content>
         <S.HeartWrap
            onClick={toggleLike}
            style={{
               cursor: likeBusy ? 'not-allowed' : 'pointer',
               opacity: likeBusy ? 0.6 : 1,
            }}
         >
            {liked ? <RiHeart3Fill /> : <RiHeart3Line />}
            <S.HeartCount>{likeCount}</S.HeartCount>
         </S.HeartWrap>
      </S.Container>
   );
};

export default CommunityDetail;
