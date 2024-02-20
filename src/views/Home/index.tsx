import { useQuery } from "react-query";
import BasicPage from "../../components/BasicPage";
import Pagination from "../../components/Pagination";
import { useState } from "react";
import { getCharacters } from "../../api";
import CharactersList from "../../components/CharactersList/index.tsx";
import Spinner from "../../components/Spinner";
import CharacterSearch from "../../components/CharacterSearch/index.tsx";

function HomePage() {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");

  const { data, isLoading } = useQuery(
    ["allCharactersList", selectedPage, searchValue],
    getCharacters,
  );

  const handleSelectedPage = (page: number) => {
    setSelectedPage(page);
  };

  const handleSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const handleInitialValues = (setInitialValues: boolean) => {
    if (setInitialValues) {
      setSelectedPage(1)
      setSearchValue('')
    }
  }

  const count = data?.info?.pages;
  const results = data?.results ?? [];

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <BasicPage
      searchComponent={
        <CharacterSearch
          value={searchValue}
          onChange={handleSearchValue}
          placeholder="Search character"
        />
      }
    >
      <>
        <CharactersList results={results} handleError={handleInitialValues}/>
        {count > 0 && (
          <Pagination
            count={count}
            selectedPage={selectedPage}
            onClick={handleSelectedPage}
          />
        )}
      </>
    </BasicPage>
  );
}

export default HomePage;
