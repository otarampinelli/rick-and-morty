import React from "react";

import Axios from "axios";

import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = () => {
  const [characters, setCharacters] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);


  const arr = [1, 2, 3, 4]

  React.useEffect(() => {
    async function fetchData() {
      let result = await Axios.get("https://rickandmortyapi.com/api/character");
      console.log(result.data.results[0].origin.name);
      setCharacters(result.data.results);
      setIsLoading(true);
    }

    fetchData();
  }, []);

  return (
    isLoading && characters.map(item => {
      return (
        <CharacterCard
        name={item.name}
        image={item.image}
        specie={item.species}
        gender={item.gender}
        status={item.status}
        origin={item.origin.name}
      />
      )
    })
  );
};

export default CharacterList;
