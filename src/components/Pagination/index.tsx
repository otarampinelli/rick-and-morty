import styled, { css } from "styled-components";
import { PaginationProps } from "./types";
import { Fragment, useState } from "react";

enum PaginationDirection {
  Start = "START",
  End = "END",
}

function Pagination({ count, selectedPage, onClick }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(() => selectedPage);

  const renderPagination = () => {
    const paginationItems = [];
    const startPage = Math.max(1, currentPage - 4);
    const endPage = Math.min(count, startPage + 9);

    for (let page = startPage; page <= endPage; page++) {
      paginationItems.push(
        <Fragment key={page}>
          <PaginationButton
            selected={page === currentPage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </PaginationButton>
        </Fragment>
      );
    }

    return paginationItems;
  };

  const handlePageChange = (page: number) => {
    if (page === 1 && currentPage !== 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else if (page === count && currentPage !== count) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      setCurrentPage(page);
    }
    onClick(page);
  };

  const setFirstOrLastItems = (type: string) => {
    if (type === PaginationDirection.End) {
      setCurrentPage(count);
      onClick(count);
    }

    if (type === PaginationDirection.Start) {
      setCurrentPage(1);
      onClick(1);
    }
  };

  return (
    <PaginationWrapper>
      <PaginationButton
        onClick={() => setFirstOrLastItems(PaginationDirection.Start)}
      >
        {"<<"}
      </PaginationButton>
      {renderPagination()}
      <PaginationButton
        onClick={() => setFirstOrLastItems(PaginationDirection.End)}
      >
        {">>"}
      </PaginationButton>
    </PaginationWrapper>
  );
}

export default Pagination;

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
  margin-bottom: 20px;
`;

const PaginationButton = styled.button<{
  selected?: boolean;
}>`
  width: 35px;
  height: 35px;
  color: white;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  ${(props) => {
    if (props.selected) {
      return css`
        background: rgba(255, 255, 255, 0.16);
      `;
    } else {
      return css`
        background: rgb(39, 43, 51);
      `;
    }
  }}
`;
