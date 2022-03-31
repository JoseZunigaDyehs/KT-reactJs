import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import {
  Grid,
  Typography,
  TextField,
  Avatar,
  List,
  ListItem,
  Divider,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

//TODO: Generar IU De LISTADO

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const filterInputHandler = useCallback(
    ({ target: { value } }) => {
      if (!value) {
        setFilteredCharacters(characters);
      } else {
        const nextFiltered = characters.filter(({ name }) => {
          return name.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredCharacters(nextFiltered);
      }
    },
    [characters]
  );

  const getCharactersApi = async () => {
    await axios
      .get("https://rickandmortyapi.com/api/character")
      .then(({ data }) => {
        setCharacters(data.results);
        setFilteredCharacters(data.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCharactersApi();
  }, []);

  return (
    <Grid container item md={8}>
      <Typography style={{ marginBottom: 24 }} variant="h3">
        Character List
      </Typography>
      <TextField
        style={{ marginBottom: 24 }}
        fullWidth
        onChange={filterInputHandler}
      />
      <Grid container direction="column">
        <List>
          {filteredCharacters.length
            ? filteredCharacters.map(({ id, name, image, status }) => (
                <Grid key={id}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={image} />
                    </ListItemAvatar>
                    <ListItemText primary={name} secondary={status} />
                    <Link to={`/character/${id}`}>See More</Link>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </Grid>
              ))
            : null}
        </List>
      </Grid>
    </Grid>
  );
}

export default Characters;
