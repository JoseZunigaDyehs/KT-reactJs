import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
} from "@mui/material";
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

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Grid>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="300"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>{`Created: `}</strong> {character.created}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>{`Gender: `}</strong> {character.gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>{`Specie: `}</strong> {character.species}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>{`Status: `}</strong> {character.status}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>{`Location: `}</strong> {character.location.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Character;
