import "./Cards.scss";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeCharacter } from "../../redux/userSlice";

function Cards(listCharacters) {
  const dispatch = useDispatch();
  const { charactersState } = useSelector((state) => state.loginText);
  let characters = listCharacters.listCharacters;
  let divCard = [];

  const handleSelect = (event, character) => {
    dispatch(
      changeCharacter({
        charactersState: charactersState,
        characterInitial: character,
      })
    );
  };

  if (characters.length >= 4) {
    for (let i = 0; i < characters.length; i += 4) {
      divCard.push(
        <div className="row m-3">
          {characters[i] ? (
            <NavLink
              className="col m-1 card"
              onClick={(e) => handleSelect(e, characters[i])}
              to="/perfil"
            >
              <div className="row rowCard">
                <div className="col-4 p-2">
                  <img
                    className="imgCard"
                    src={
                      characters[i].thumbnail.path +
                      "." +
                      characters[i].thumbnail.extension
                    }
                    alt="imagem"
                  ></img>
                </div>
                <div className="col-8 textBodyCard">
                  <p className="titleCard">{characters[i].name}</p>
                  <p className="textCard">{characters[i].description}</p>
                </div>
              </div>
            </NavLink>
          ) : (
            ""
          )}
          {characters[i + 1] ? (
            <NavLink
              className="col m-1 card"
              onClick={(e) => handleSelect(e, characters[i + 1])}
              to="/perfil"
            >
              <div className="row rowCard">
                <div className="col-4 p-2">
                  <img
                    className="imgCard"
                    src={
                      characters[i + 1].thumbnail.path +
                      "." +
                      characters[i + 1].thumbnail.extension
                    }
                    alt="imagem"
                  ></img>
                </div>
                <div className="col-8 textBodyCard">
                  <p className="titleCard">{characters[i + 1].name}</p>
                  <p className="textCard">{characters[i + 1].description}</p>
                </div>
              </div>
            </NavLink>
          ) : (
            ""
          )}

          {characters[i + 2] ? (
            <NavLink
              className="col m-1 card"
              onClick={(e) => handleSelect(e, characters[i + 2])}
              to="/perfil"
            >
              <div className="row rowCard">
                <div className="col-4 p-2">
                  <img
                    className="imgCard"
                    src={
                      characters[i + 2].thumbnail.path +
                      "." +
                      characters[i + 2].thumbnail.extension
                    }
                    alt="imagem"
                  ></img>
                </div>
                <div className="col-8 textBodyCard">
                  <p className="titleCard">{characters[i + 2].name}</p>
                  <p className="textCard">{characters[i + 2].description}</p>
                </div>
              </div>
            </NavLink>
          ) : (
            ""
          )}
          {characters[i + 3] ? (
            <NavLink
              className="col m-1 card"
              onClick={(e) => handleSelect(e, characters[i + 3])}
              to="/perfil"
            >
              <div className="row rowCard">
                <div className="col-4 p-2">
                  <img
                    className="imgCard"
                    src={
                      characters[i + 3].thumbnail.path +
                      "." +
                      characters[i + 3].thumbnail.extension
                    }
                    alt="imagem"
                  ></img>
                </div>
                <div className="col-8 textBodyCard">
                  <p className="titleCard">{characters[i + 3].name}</p>
                  <p className="textCard">{characters[i + 3].description}</p>
                </div>
              </div>
            </NavLink>
          ) : (
            ""
          )}
        </div>
      );
    }
  } else {
    for (let i = 0; i < characters.length; i++) {
      divCard.push(
        <div className="row m-3">
          <NavLink
            className="col m-1 card"
            onClick={(e) => handleSelect(e, characters[i])}
            to="/perfil"
          >
            <div className="row rowCard">
              <div className="col-4 p-2">
                <img
                  className="imgCard"
                  src={
                    characters[i].thumbnail.path +
                    "." +
                    characters[i].thumbnail.extension
                  }
                  alt="imagem"
                ></img>
              </div>
              <div className="col-8 textBodyCard">
                <p className="titleCard">{characters[i].name}</p>
                <p className="textCard">{characters[i].description}</p>
              </div>
            </div>
          </NavLink>
        </div>
      );
    }
  }

  return <div>{divCard}</div>;
}

export default Cards;
