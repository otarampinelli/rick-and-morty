import styled from "styled-components";
import CharacterCard from "../CharacterCard";
import { CharacterListProps } from "./types";

const CharacterListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background: rgb(39, 43, 51);
  padding: 40px 0;
`;

function CharacterList({ results }: CharacterListProps) {
  console.log(results);
  return (
    <CharacterListContainer>
      {!!results.length &&
        results.map((result) => {
          return <CharacterCard character={result} />;
        })}
    </CharacterListContainer>
  );
}

export default CharacterList;
