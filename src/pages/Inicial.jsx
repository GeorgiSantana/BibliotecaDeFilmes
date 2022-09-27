import { useState, useEffect } from "react";

const filmesURL = import.meta.env.VITE_API;
const apiChave = import.meta.env.VITE_API_KEY;

const Inicial = () => {
  const [topFilmes, setTopFilmes] = useState([]);

  const getTopAvaliadosFilmes = async (url) => {
    const resposta = await fetch(url);
    const data = await resposta.json();

    setTopFilmes(data.results);
  };

  useEffect(() => {
    const topAvaliadosUrl = `${filmesURL}top_rated?${apiChave}`;
    getTopAvaliadosFilmes(topAvaliadosUrl);
  }, []);

  return (
    <div>{topFilmes && topFilmes.map((movie) => <p>{movie.title}</p>)}</div>
  );
};

export default Inicial;
