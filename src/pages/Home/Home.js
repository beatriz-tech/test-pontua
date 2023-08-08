import "./Home.scss";
import { Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import Cards from "../../components/Cards/Cards";
import React, { useState } from "react";

function Home() {
  const { charactersState } = useSelector((state) => state.loginText);
  const [filteredList, setFilteredList] = useState(charactersState);

  const handleSearch = (event) => {
    let textInput = event.target.value;
    let updatedList = [];

    if (textInput !== "") {
      updatedList = filteredList.filter((item) => {
        if (item.name !== undefined) {
          return (
            item.name.toLowerCase().indexOf(textInput.toLowerCase()) !== -1
          );
        } else {
          return "";
        }
      });
      setFilteredList(updatedList);
    } else {
      setFilteredList(charactersState);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 bg-light">
          <NavBar></NavBar>
        </div>
        <div className="col p-0 bg-light">
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
                onChange={handleSearch}
                placeholder="Busque um agente"
              />
            </InputGroup>
            <Cards listCharacters={filteredList}></Cards>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
