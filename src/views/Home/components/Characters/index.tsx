import { useQuery } from "react-query";
import { getCharacters } from "../../../../api";
import CharacterList from "../../../../components/CharacterList";
import { CharactersProps } from "./types";

function Characters({ page = 1 }: CharactersProps) {
  const { isLoading, data } = useQuery(
    ["allCharactersList", page.toString()],
    getCharacters
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <CharacterList results={data.results} />;
}

export default Characters;
