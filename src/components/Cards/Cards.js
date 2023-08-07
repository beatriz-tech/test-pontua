import "./Cards.scss";

function Cards(listCharacters) {
  console.log(listCharacters);
  let characters = listCharacters.listCharacters;
  let divCard = [];

  if (characters.length >= 4) {
    for (let i = 0; i < characters.length; i += 4) {
      divCard.push(
        <div className="row m-3">
          {characters[i] ? (
            <div className="col m-1 card">
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
            </div>
          ) : (
            ""
          )}
          {characters[i + 1] ? (
            <div className="col m-1 card">
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
            </div>
          ) : (
            ""
          )}

          {characters[i + 2] ? (
            <div className="col m-1 card">
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
            </div>
          ) : (
            ""
          )}
          {characters[i + 3] ? (
            <div className="col m-1 card">
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
            </div>
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
          <div className="col m-1 card">
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
          </div>
        </div>
      );
    }
  }

  return <div>{divCard}</div>;
}

export default Cards;
