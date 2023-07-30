import { Dropdown, Button } from "react-bootstrap";
import logoImg from "../../image/icon-interrogacao.png";
import "./DropdownMarvel.scss";

function DropdownMarvel() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant="Secondary"
          className="dropdown"
          id="dropdown-basic"
          size="lg"
        >
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">
            <spnan>
              <img src={logoImg} class="img-fluid logoImg" alt="..." />
            </spnan>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button size="lg" className="btnEntrar mt-3">
        Entrar
      </Button>
    </div>
  );
}

export default DropdownMarvel;
