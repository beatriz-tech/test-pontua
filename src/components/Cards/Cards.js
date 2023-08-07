import { Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Cards.scss";

function Cards() {
  const { charactersState } = useSelector((state) => state.loginText);
  let divCard = [];
  for (let i = 0; i < charactersState.length; i += 4) {
    divCard.push(
      <div className="row m-3">
        <div className="col m-1 card">
          <div className="row rowCard">
            <div className="col-4 p-2">
              <img
                className="imgCard"
                src={
                  charactersState[i].thumbnail.path +
                  "." +
                  charactersState[i].thumbnail.extension
                }
                alt="imagem"
              ></img>
            </div>
            <div className="col-8 textBodyCard">
              <p className="titleCard">{charactersState[i].name}</p>
              <p className="textCard">{charactersState[i].description}</p>
            </div>
          </div>
        </div>
        <div className="col m-1 card">
          <div className="row rowCard">
            <div className="col-4 p-2">
              <img
                className="imgCard"
                src={
                  charactersState[i + 1].thumbnail.path +
                  "." +
                  charactersState[i + 1].thumbnail.extension
                }
                alt="imagem"
              ></img>
            </div>
            <div className="col-8 textBodyCard">
              <p className="titleCard">{charactersState[i + 1].name}</p>
              <p className="textCard">{charactersState[i + 1].description}</p>
            </div>
          </div>
        </div>
        <div className="col m-1 card">
          <div className="row rowCard">
            <div className="col-4 p-2">
              <img
                className="imgCard"
                src={
                  charactersState[i + 2].thumbnail.path +
                  "." +
                  charactersState[i + 2].thumbnail.extension
                }
                alt="imagem"
              ></img>
            </div>
            <div className="col-8 textBodyCard">
              <p className="titleCard">{charactersState[i + 2].name}</p>
              <p className="textCard">{charactersState[i + 2].description}</p>
            </div>
          </div>
        </div>
        <div className="col m-1 card">
          <div className="row rowCard">
            <div className="col-4 p-2">
              <img
                className="imgCard"
                src={
                  charactersState[i + 3].thumbnail.path +
                  "." +
                  charactersState[i + 3].thumbnail.extension
                }
                alt="imagem"
              ></img>
            </div>
            <div className="col-8 textBodyCard">
              <p className="titleCard">{charactersState[i + 3].name}</p>
              <p className="textCard">{charactersState[i + 3].description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container-fluid bg-white">
      <InputGroup className="row mb-3 searchDiv">
        <InputGroup.Text className="homeCol" id="basic-addon1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#747D94"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </InputGroup.Text>
        <Form.Control
          className="homeCol"
          size="lg"
          type="text"
          placeholder="Busque um agente"
        />
      </InputGroup>
      {divCard}
    </div>
  );
}

export default Cards;
