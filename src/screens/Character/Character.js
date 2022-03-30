import { Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";

function Character() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCharacterApi = useCallback(async () => {
    setIsLoading(true);
    await axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        setCharacter(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    getCharacterApi();
  }, [getCharacterApi]);

  return (
    <Grid>
      {isLoading ? (
        "LOADINGGGGG"
      ) : (
        <Grid>
          <Typography>{character.name}</Typography>
          <Typography>{character.status}</Typography>
          <Typography>{character.gender}</Typography>
          <Typography>{character.species}</Typography>
          <img alt={character.name} src={character.image} />
        </Grid>
      )}
    </Grid>
  );
}

export default Character;
