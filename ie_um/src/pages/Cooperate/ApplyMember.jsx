import axiosInstance from '../../api/AxiosInstance';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from '../Cooperate/Style/ApplyMemberStyle';

const ApplyMember = () => {
   const { id: accompanyId } = useParams();
   const [data, setData] = useState(null);
   const [error, setError] = useState(false);

   useEffect(() => {
      axiosInstance
         .get(`/api/accompanies/apply/member/${accompanyId}`)
         .then((r) => {
            setData(r.data.data);
         })

         .catch((err) => {
            console.error('신청자 불러오기 에러:', err);
            setError(true);
         });
   }, []);

   const handleAccept = async (applicantId) => {
      try {
         await axiosInstance.post(
            `/api/accompanies/${accompanyId}/accept/${applicantId}`,
         );
         alert('신청을 수락했습니다.');
         window.location.reload();
      } catch (err) {
         console.error('수락 에러:', err);
         alert('수락에 실패했습니다.');
      }
   };

   const handleReject = async (applicantId) => {
      try {
         await axiosInstance.post(
            `/api/accompanies/${accompanyId}/reject/${applicantId}`,
         );
         alert('신청을 거절했습니다.');
         window.location.reload();
      } catch (err) {
         console.error('거절 에러:', err);
         alert('거절에 실패했습니다.');
      }
   };

   if (error) return null;

   if (!data || data.role !== 'OWNER') return null;

   const applicants = data.accompanyApplyResDtos || [];

   return (
      <S.Wrap>
         <S.DetailTitle>신청자</S.DetailTitle>
         <S.UnderLine />
         {applicants.length === 0 && <p>신청자가 없습니다.</p>}

         {applicants.map((item) => (
            <S.CardWrap key={item.memberId}>
               <div>
                  {item.nickName} · {item.age}대 · {item.gender}
               </div>
               <S.BtnGroup>
                  <S.AcceptBtn onClick={() => handleAccept(item.memberId)}>
                     수락
                  </S.AcceptBtn>
                  <S.RejectBtn onClick={() => handleReject(item.memberId)}>
                     거절
                  </S.RejectBtn>
               </S.BtnGroup>
            </S.CardWrap>
         ))}
      </S.Wrap>
   );
};

export default ApplyMember;
