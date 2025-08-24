import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from '../../styles/PostStyle';
import { RiHeart3Line } from 'react-icons/ri';
import MyPagination from '../../components/Pagination';
import { fetchMyCommunities } from '../../api/community';
import ClipLoader from 'react-spinners/ClipLoader';

const MyPosts = () => {
   const [list, setList] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      (async () => {
         try {
            setLoading(true);
            const rows = await fetchMyCommunities();
            setList(Array.isArray(rows) ? [...rows].reverse() : []);
         } catch (e) {
            console.error(e);
            alert('내가 쓴 글을 불러오지 못했어요.');
         } finally {
            setLoading(false);
         }
      })();
   }, []);

   const fmt = (s) => {
      if (!s) return '';
      const d = new Date(String(s).replace(' ', 'T'));
      return d.toLocaleString([], {
         year: 'numeric',
         month: '2-digit',
         day: '2-digit',
         hour: '2-digit',
         minute: '2-digit',
         hour12: false,
      });
   };

   // 페이지네이션
   const [activePage, setActivePage] = useState(1);
   const itemsPerPage = 7;
   const last = activePage * itemsPerPage;
   const first = last - itemsPerPage;
   const currentItems = useMemo(
      () => list.slice(first, last),
      [list, first, last],
   );

   return (
      <S.Container>
         <S.Title>내가 쓴 글</S.Title>
         <S.List>
            {loading ? (
               <li
                  style={{
                     padding: 16,
                     display: 'flex',
                     height: 150,
                     alignItems: 'center',
                     justifyContent: 'center',
                  }}
               >
                  <ClipLoader color="#004193" />
               </li>
            ) : currentItems.length === 0 ? (
               <li
                  style={{
                     padding: 16,
                     display: 'flex',
                     height: 150,
                     alignItems: 'center',
                     justifyContent: 'center',
                  }}
               >
                  작성한 글이 없어요.
               </li>
            ) : (
               currentItems.map((item) => {
                  const id = item.id ?? item.communityId;
                  return (
                     <li key={id}>
                        <Link
                           to={`/community/${id}`}
                           style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                           <div
                              style={{
                                 display: 'flex',
                                 justifyContent: 'space-between',
                                 width: '100%',
                              }}
                           >
                              <div>
                                 <S.PostTitle>{item.title}</S.PostTitle>
                                 <S.PostDate>{fmt(item.createDate)}</S.PostDate>
                              </div>
                              <S.HeartWrap>
                                 <RiHeart3Line size={11} />
                                 <S.HeartCount>
                                    {item.likeCount ?? 0}
                                 </S.HeartCount>
                              </S.HeartWrap>
                           </div>
                        </Link>
                        <S.Divider />
                     </li>
                  );
               })
            )}
         </S.List>

         <MyPagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={list.length}
            pageRangeDisplayed={itemsPerPage}
            onChange={(p) => setActivePage(p)}
         />
      </S.Container>
   );
};

export default MyPosts;
