/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import { SearchInputProps } from "./types";
import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";

function SearchInput({
  value = "",
  onChange = () => {},
  placeholder = "Search...",
}: SearchInputProps) {
  const [inputValue, setInputValue] = useState(value || "");
  const [debouncedValue] = useDebounce(inputValue, 500);

  useEffect(() => {
    onChange(debouncedValue.toString());
  }, [debouncedValue]);

  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}

export default SearchInput;

const Input = styled.input`
  width: 212px;
  height: 25px;
  border-radius: 8px;
  border-style: solid;
`;
