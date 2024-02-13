import styled, { css } from "styled-components";
import { PaginationProps } from "./types";
import { Fragment, useState } from "react";

enum PaginationDirection {
  Start = "START",
  End = "END",
}

function Pagination({ count, selectedPage, onClick }: PaginationProps) {
  const [pages, setPages] = useState<number[]>(
    Array.from({ length: count > 10 ? 10 : count }, (_, i) => i + 1)
  );

  const handleNextOrPrevPage = (page: number) => {
    const firstItem = pages[0];
    const lastItem = pages[pages.length - 1];

    if (page === firstItem && page !== 1) {
      setPages((prev) => {
        return prev.map((item) => item - 1);
      });
    }

    if (page === lastItem && page !== count) {
      setPages((prev) => {
        return prev.map((item) => item + 1);
      });
    }

    onClick(page);
  };

  const setLastItems = (type: string) => {
    const pages: number[] = [];
    if (type === PaginationDirection.End) {
      for (let i = count - 10; i <= count; i++) {
        pages.push(i);
      }
      setPages(pages);
      onClick(pages[pages.length - 1]);
    }

    if (type === PaginationDirection.Start) {
      const condition = count < 10 ? count : 10;
      for (let i = 1; i <= condition; i++) {
        pages.push(i);
      }
      setPages(pages);
      onClick(pages[0]);
    }
  };

  return (
    <PaginationWrapper>
      <PaginationButton onClick={() => setLastItems(PaginationDirection.Start)}>
        {"<<"}
      </PaginationButton>
      {!!pages.length &&
        pages.map((page, index) => {
          return (
            <Fragment key={index}>
              <PaginationButton
                selected={page === selectedPage}
                onClick={() => handleNextOrPrevPage(page)}
              >
                {page}
              </PaginationButton>
            </Fragment>
          );
        })}
      <PaginationButton onClick={() => setLastItems(PaginationDirection.End)}>
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
