import React from "react";

import Axios from "axios";

import CharacterCard from "../CharacterCard/CharacterCard";

import './CharacterList.css'

const CharacterList = () => {
  const [characters, setCharacters] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      let result = await Axios.get("https://rickandmortyapi.com/api/character");
      console.log(result.data.results[0]);
      setCharacters(result.data.results);
      setIsLoading(true);
    }

    fetchData();
  }, []);

  return (
    <div className="main-block">
    {isLoading && characters.map(item => {
      return (
          <CharacterCard
            className="characters"
            key={item.id}
            name={item.name}
            image={item.image}
            specie={item.species}
            gender={item.gender}
            status={item.status}
            origin={item.origin.name}
          />
      )
    })}
    </div>
  );
};

export default CharacterList;
