import BasicPage from "../../components/BasicPage";
import { useQuery } from "react-query";
import { getCharacters } from "../../api";
import CharactersList from "../../components/CharacterList";

function HomePage() {
  const { isLoading, data } = useQuery("allCharactersList", getCharacters);

  console.log("data", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <BasicPage>
      <CharactersList results={data.results} />
    </BasicPage>
  );
}

export default HomePage;
