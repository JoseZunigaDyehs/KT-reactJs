import axios from "axios";
import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

//TODO: Generar IU De LISTADO
//TODO: Input de busqueda
//TODO: Eliminar cosas del state
//TODO: Update

function Characters() {
  const [characters, setCharacters] = useState([]);

  const getCharactersApi = async () => {
    await axios
      .get("https://rickandmortyapi.com/api/character")
      .then(({ data: { results } }) => {
        setCharacters(results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCharactersApi();
  }, []);

  return (
    <Grid>
      <Typography variant="h3">Character List</Typography>
      <Grid container direction="column">
        {characters.length &&
          characters.map(({ id, name }) => (
            <Link key={id} to={`/character/${id}`}>
              {name}
            </Link>
          ))}
      </Grid>
    </Grid>
  );
}

export default Characters;
