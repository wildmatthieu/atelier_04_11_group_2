// import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [resultAPIPokemon, setResultAPIPokemon] = useState({});

  // dans un premier temps : recupere moi les données des pokemons
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((resultatApi) => {
        return resultatApi.json();
      })
      .then((reponseSousFormatJson) => {
        setResultAPIPokemon(reponseSousFormatJson);
      });
  }, []);

  return (
    <>
      {/* // je veux afficher le nbr total de pokemon */}
      <h1>{resultAPIPokemon.count}</h1>

      {"results" in resultAPIPokemon &&
        resultAPIPokemon.results.map((pokemon) => {
          return <h2>{pokemon.name}</h2>;
        })}
    </>
  );
}

export default App;
