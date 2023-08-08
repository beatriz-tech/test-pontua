import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toastr } from "react-redux-toastr";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Button } from "react-bootstrap";
import { changeCharacter } from "../../redux/userSlice";
import "./DropdownMarvel.scss";

function DropdownMarvel() {
  const dispatch = useDispatch();
  const { charactersState } = useSelector((state) => state.loginText);
  const { characterInitial } = useSelector((state) => state.loginText);
  const [characterSelected, setCharacterSelected] = useState([{ name: "" }]);

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
    setCharacterSelected(result);
  };
  const handleSubmit = (event) => {
    if (!characterInitial) {
      event.preventDefault();
      event.stopPropagation();
      toastr.error("Falha", "Escolha um agente válido");
    }
  };

  return (
    <div>
      <Dropdown>
        {characterInitial ? (
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
        ) : (
          <Dropdown.Toggle
            variant="Secondary"
            className="dropdown"
            id="dropdown-basic"
            size="lg"
          >
            Selecione um agente
          </Dropdown.Toggle>
        )}

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
                {character.name === characterSelected.name ? (
                  <span className="flagSelected">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </span>
                ) : (
                  ""
                )}
              </div>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <NavLink to="/perfil">
        <Button size="lg" onClick={handleSubmit} className="btnEntrar mt-3">
          Entrar
        </Button>
      </NavLink>
    </div>
  );
}

export default DropdownMarvel;
