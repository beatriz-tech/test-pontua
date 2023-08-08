import { useState } from "react";
import { Tab, Tabs, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import "./Perfil.scss";

function Perfil() {
  const [tabSelected, setTabSelected] = useState("Visão Geral");
  const { characterInitial } = useSelector((state) => state.loginText);

  const handleTabs = (event) => {
    setTabSelected(event.target.innerText);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 bg-light">
          <NavBar></NavBar>
        </div>
        <div className="col m-0 bg-white containerTabs">
          <h1 className="title">
            {tabSelected} <span className="barra">/</span>
            <span className="title subTitle">{characterInitial.name}</span>
          </h1>
          <Tabs
            defaultActiveKey="visaoGeral"
            id="justify-tab-example"
            variant="underline"
            onClick={handleTabs}
            className="mb-3"
            justify
          >
            <Tab eventKey="visaoGeral" className="tabs" title="Visão Geral">
              <div class="row">
                <div class="col-2">
                  <Image
                    className="imgVisaoGeral img-fluid"
                    src={
                      characterInitial.thumbnail.path +
                      "." +
                      characterInitial.thumbnail.extension
                    }
                  />
                </div>
                <div class="col">
                  <p>{characterInitial.name}</p>
                  {characterInitial.description ? (
                    <p className="subText">{characterInitial.description}</p>
                  ) : (
                    <p className="subText">No description found</p>
                  )}
                </div>
              </div>
            </Tab>
            <Tab eventKey="teams" title="Teams">
              {characterInitial.comics.items ? (
                <ul variant="flush" className="pt-5">
                  {characterInitial.comics.items.map((comic) => (
                    <li className="subText" key={comic.id}>
                      {comic.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="subText">No description found</p>
              )}
            </Tab>
            <Tab eventKey="powers" title="Powers">
              {characterInitial.series.items ? (
                <ul variant="flush" className="pt-5">
                  {characterInitial.series.items.map((comic) => (
                    <li className="subText" key={comic.id}>
                      {comic.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="subText">No description found</p>
              )}
            </Tab>
            <Tab eventKey="species" title="Species">
              {characterInitial.stories.items ? (
                <ul variant="flush" className="pt-5">
                  {characterInitial.stories.items.map((comic) => (
                    <li className="subText" key={comic.id}>
                      {comic.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="subText">No description found</p>
              )}
            </Tab>
            <Tab eventKey="authors" title="Authors">
              {characterInitial.events.items ? (
                <ul variant="flush" className="pt-5">
                  {characterInitial.events.items.map((comic) => (
                    <li className="subText" key={comic.id}>
                      {comic.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="subText">No description found</p>
              )}
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
