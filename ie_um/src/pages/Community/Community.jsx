import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Style/CommunityStyle';
import * as P from '../../styles/PostStyle';
import { RiHeart3Line, RiSearchLine } from 'react-icons/ri';
import MyPagination from '../../components/Pagination';
import { fetchCommunities } from '../../api/community';
import ClipLoader from 'react-spinners/ClipLoader';

const Community = () => {
   const navigate = useNavigate();

   // 서버 데이터
   const [list, setList] = useState([]);
   const [loading, setLoading] = useState(false);

   // 검색어 & 페이지
   const [query, setQuery] = useState('');
   const [activePage, setActivePage] = useState(1);

   // 제목 검색
   const filtered = useMemo(() => {
      const q = query.trim().toLowerCase();
      if (!q) return list;
      return list.filter((it) => (it.title || '').toLowerCase().includes(q));
   }, [list, query]);

   // 페이지네이션
   const itemsPerPage = 6;
   const last = activePage * itemsPerPage;
   const first = last - itemsPerPage;
   const currentItems = filtered.slice(first, last);

   const handlePageChange = (pageNumber) => {
      setActivePage(pageNumber);
   };

   // 최초 로드
   useEffect(() => {
      (async () => {
         try {
            setLoading(true);
            const data = await fetchCommunities();
            setList(Array.isArray(data) ? [...data].reverse() : []);
         } catch (e) {
            console.error(e);
            alert('커뮤니티 목록을 불러오지 못했어요.');
         } finally {
            setLoading(false);
         }
      })();
   }, []);

   // 날짜 포맷
   const fmtDate = (s) => {
      if (!s) return '';
      const d = new Date(s);
      return isNaN(d.getTime()) ? s : d.toLocaleDateString();
   };

   return (
      <P.Container>
         <P.Title>커뮤니티</P.Title>
         <S.SearchWrap>
            <S.Search
               id="search-title"
               type="text"
               placeholder="제목으로 검색하기"
               value={query}
               onChange={(e) => {
                  setQuery(e.target.value);
                  setActivePage(1);
               }}
            ></S.Search>
            <S.SearchIcon>
               <RiSearchLine color="white" />
            </S.SearchIcon>
         </S.SearchWrap>
         <P.List>
            {loading ? (
               <li
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     height: '150px',
                  }}
               >
                  <ClipLoader color="#004193" />
               </li>
            ) : (
               currentItems.map((item, idx) => {
                  const id = item.id;
                  const created = fmtDate(item.createDate);
                  const heart = item.likeCount ?? 0;
                  const node = (
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'space-between',
                           width: '100%',
                        }}
                     >
                        <div>
                           <P.PostTitle>{item.title}</P.PostTitle>
                           <P.PostDate>{created}</P.PostDate>
                        </div>
                        <P.HeartWrap>
                           <RiHeart3Line size={11} />
                           <P.HeartCount>{heart}</P.HeartCount>
                        </P.HeartWrap>
                     </div>
                  );

                  return (
                     <li key={id ?? `row-${first + idx}`}>
                        {id ? (
                           <P.PostLink
                              to={`/community/${id}`}
                              state={{ from: 'community' }}
                           >
                              {node}
                           </P.PostLink>
                        ) : (
                           <div style={{ padding: '12px 0' }}>{node}</div>
                        )}
                        <P.Divider />
                     </li>
                  );
               })
            )}
            <S.ButtonWrap>
               <S.WriteButton onClick={() => navigate('/community/write')}>
                  글 작성
               </S.WriteButton>
            </S.ButtonWrap>
         </P.List>

         <MyPagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={filtered.length}
            pageRangeDisplayed={itemsPerPage}
            onChange={handlePageChange}
         />
      </P.Container>
   );
};

export default Community;
