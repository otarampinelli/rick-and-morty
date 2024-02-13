import { useQuery } from "react-query";
import BasicPage from "../../components/BasicPage";
import Pagination from "../../components/Pagination";
import { useState } from "react";
import { getCharacters } from "../../api";
import CharacterList from "../../components/CharacterList";
import SearchInput from "../../components/SearchInput";

function HomePage() {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");

  const { data } = useQuery(
    ["allCharactersList", selectedPage, searchValue],
    getCharacters
  );

  const handleSelectedPage = (page: number) => {
    setSelectedPage(page);
  };

  const handleSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const count = data?.info?.pages

  return (
    <BasicPage>
      <>
        <>
          <SearchInput value={searchValue} onChange={handleSearchValue} />
          <CharacterList results={data?.results || []} />
        </>
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
