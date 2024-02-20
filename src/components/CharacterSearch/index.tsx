import styled from "styled-components";
import SearchInput from "../SearchInput";
import { SearchInputProps } from "../SearchInput/types";

function CharacterSearch({
  value = "",
  onChange = () => {},
  placeholder,
}: SearchInputProps) {
  return (
    <SearchWrapper>
      <SearchInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </SearchWrapper>
  );
}

export default CharacterSearch;

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
