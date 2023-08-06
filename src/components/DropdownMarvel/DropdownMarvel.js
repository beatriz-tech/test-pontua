import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Button } from "react-bootstrap";
import { changeCharacter } from "../../redux/userSlice";
import "./DropdownMarvel.scss";

function DropdownMarvel() {
  const dispatch = useDispatch();
  const { charactersState } = useSelector((state) => state.loginText);
  const { characterInitial } = useSelector((state) => state.loginText);

  useEffect(() => {});

  const handleDropdown = (event) => {
    const result = charactersState.find(
      (character) => character.name === event.target.innerText
    );
    dispatch(
      changeCharacter({
        charactersState: charactersState,
        characterInitial: result,
      })
    );
  };
  const btnEntrar = () => {};

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant="Secondary"
          className="dropdown"
          id="dropdown-basic"
          size="lg"
        >
          <img
            className="imageCharacter"
            src={
              characterInitial.thumbnail.path +
              "." +
              characterInitial.thumbnail.extension
            }
            alt="imagem"
          />
          {characterInitial.name}
        </Dropdown.Toggle>

        <Dropdown.Menu className="menu">
          {charactersState.map((character) => (
            <Dropdown.Item key={character.id}>
              <div onClick={handleDropdown}>
                <img
                  className="imageCharacter"
                  src={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  alt="imagem"
                />
                {character.name}
              </div>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Button size="lg" onClick={btnEntrar} className="btnEntrar mt-3">
        Entrar
      </Button>
    </div>
  );
}

export default DropdownMarvel;
