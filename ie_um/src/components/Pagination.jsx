import Pagination from 'react-js-pagination';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 23px;
   cursor: pointer;

   .pagination {
      display: flex;
      gap: 5px;
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 18px;
   }

   .pagination li a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      color: black;
      border-radius: 10px;
      font-weight: 400;
      text-decoration: none;
   }

   .pagination li.active a {
      border: 1px solid ${(props) => props.theme.mainColor};
   }
`;

const MyPagination = ({
   activePage,
   itemsCountPerPage,
   totalItemsCount,
   pageRangeDisplayed,
   onChange,
}) => {
   return (
      <PaginationWrapper>
         <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={pageRangeDisplayed}
            onChange={onChange}
            prevPageText="<"
            nextPageText=">"
         />
      </PaginationWrapper>
   );
};

export default MyPagination;
