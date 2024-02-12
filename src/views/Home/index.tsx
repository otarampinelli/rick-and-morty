import BasicPage from "../../components/BasicPage";
import { useQuery } from "react-query";
import { getCharacters } from "../../api";
import CharactersList from "../../components/CharacterList";
import Pagination from "../../components/Pagination";

function HomePage() {
  const { isLoading, data } = useQuery("allCharactersList", getCharacters);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <BasicPage>
      <>
        <CharactersList results={data.results} />
        <Pagination count={42} />
      </>
    </BasicPage>
  );
}

export default HomePage;
