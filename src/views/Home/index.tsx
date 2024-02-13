import BasicPage from "../../components/BasicPage";
import Pagination from "../../components/Pagination";
import { useState } from "react";
import Characters from "./components/Characters";

function HomePage() {
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const handleSelectedPage = (page: number) => {
    setSelectedPage(page);
  };

  return (
    <BasicPage>
      <>
        <Characters page={selectedPage} />
        <Pagination
          count={42}
          selectedPage={selectedPage}
          onClick={handleSelectedPage}
        />
      </>
    </BasicPage>
  );
}

export default HomePage;
