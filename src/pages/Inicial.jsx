import { useState, useEffect } from "react";

const filmesURL = import.meta.env.VITE_API;
const apiChave = import.meta.env.VITE_API_KEY;

const Inicial = () => {
  console.log(filmesURL, apiChave);
  return <div>Inicial</div>;
};

export default Inicial;
