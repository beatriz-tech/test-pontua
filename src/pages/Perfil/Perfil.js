import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import "./Perfil.scss";

function Perfil() {
  const [tabSelected, setTabSelected] = useState("Visão Geral");
  const { characterInitial } = useSelector((state) => state.loginText);

  console.log(characterInitial);
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
            <span className="title subTitle">A-Bomb</span>
          </h1>
          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            variant="underline"
            onClick={handleTabs}
            className="mb-3"
            justify
          >
            <Tab eventKey="visaoGeral" className="tabs" title="Visão Geral">
              {characterInitial}
            </Tab>
            <Tab eventKey="teams" title="Teams">
              Tab content for Profile
            </Tab>
            <Tab eventKey="powers" title="Powers">
              Tab content for Loooonger Tab
            </Tab>
            <Tab eventKey="species" title="Species">
              Tab content for Contact
            </Tab>
            <Tab eventKey="authors" title="Authors">
              Tab content for Contact
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
