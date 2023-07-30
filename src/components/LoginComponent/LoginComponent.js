import { Form, Button } from "react-bootstrap";
import "./LoginComponent.scss";
import iconInterrogacao from "../../image/icon-interrogacao.png";
import DropdownMarvel from "../DropdownMarvel/DropdownMarvel";

function LoginComponent(dataComponent) {
  return (
    <div>
      <h1 className="textLogin mb-3">
        <strong>{dataComponent.dataComponent.title}</strong>
        <span className="ponto">.</span>
      </h1>
      <p className="labelLogin">{dataComponent.dataComponent.label}</p>
      {dataComponent.dataComponent.page === 1 && (
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              size="lg"
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control size="lg" type="password" />
          </Form.Group>
          <Button size="lg" className="buttonLogin">
            Submit form
          </Button>
          <div className="senha mt-2">
            <p>
              <img src={iconInterrogacao} class="img-fluid iconInt" alt="..." />
              Esqueceu a senha?
            </p>
          </div>
        </Form>
      )}
      {dataComponent.dataComponent.page === 2 && (
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              size="lg"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Button size="lg" className="buttonLogin" type="submit">
            Submit form
          </Button>
        </Form>
      )}
      {dataComponent.dataComponent.page === 3 && (
        <Button size="lg" className="buttonLogin" type="submit">
          voltar para o login
        </Button>
      )}
      {dataComponent.dataComponent.page === 4 && (
        <DropdownMarvel></DropdownMarvel>
      )}
    </div>
  );
}

export default LoginComponent;
