import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Button } from "react-bootstrap";
import { changeCharacter } from "../../redux/userSlice";
import api from "../../services/api.js";
import "./DropdownMarvel.scss";

function DropdownMarvel() {
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);
  const { characterState } = useSelector((state) => state.loginText);

  useEffect(() => {
    api
      .get("/characters")
      .then((response) => {
        const characters = response.data.data.results;
        dispatch(changeCharacter(characters[0]));
        setCharacters(characters);
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant="Secondary"
          className="dropdown"
          id="dropdown-basic"
          size="lg"
        >
          {characterState.name}
        </Dropdown.Toggle>

        <Dropdown.Menu className="menu">
          {characters.map((character) => (
            <Dropdown.Item key={character.id}>
              <img
                className="imageCharacter"
                src={
                  character.thumbnail.path + "." + character.thumbnail.extension
                }
                alt="imagem"
              />
              {character.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Button size="lg" className="btnEntrar mt-3">
        Entrar
      </Button>
    </div>
  );
}

export default DropdownMarvel;
