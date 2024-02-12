/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from "styled-components";
import { PaginationProps } from "./types";
import { Fragment, useState } from "react";

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
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

function Pagination({ count }: PaginationProps) {
  const [initialValue, setInitialValue] = useState<number[]>(() =>
    Array.from({ length: count > 10 ? 10 : count }, (_, i) => i + 1)
  );

  const [selectedItem, setSelectedItem] = useState<number>(1);

  const handleNextOrPrevPage = (page: number) => {
    const firstItem = initialValue[0];
    const lastItem = initialValue[initialValue.length - 1];

    if (page === firstItem && page !== 1) {
      setInitialValue((prev) => {
        return prev.map((item) => item - 1);
      });
    }

    if (page === lastItem && page !== count) {
      setInitialValue((prev) => {
        return prev.map((item) => item + 1);
      });
    }

    setSelectedItem(page);
  };

  const setLastItems = (type: string) => {
    const pages: number[] = [];
    if (type === "last") {
      for (let i = count - 10; i <= count; i++) {
        pages.push(i);
      }
      setSelectedItem(pages[pages.length - 1]);
      setInitialValue(pages);
    }

    if (type === "first") {
      const condition = count < 10 ? count : 10;
      for (let i = 1; i <= condition; i++) {
        pages.push(i);
      }
      setSelectedItem(pages[0]);
      setInitialValue(pages);
    }
  };

  return (
    <PaginationWrapper>
      <PaginationButton onClick={() => setLastItems("first")}>
        {"<<"}
      </PaginationButton>
      {!!initialValue.length &&
        initialValue.map((page, index) => {
          return (
            <Fragment key={index}>
              <PaginationButton
                selected={page === selectedItem}
                onClick={() => handleNextOrPrevPage(page)}
              >
                {page}
              </PaginationButton>
            </Fragment>
          );
        })}
      <PaginationButton onClick={() => setLastItems("last")}>
        {">>"}
      </PaginationButton>
    </PaginationWrapper>
  );
}

export default Pagination;
