import { Form, Button } from "react-bootstrap";
import "./FormLogin.scss";

function FormLogin() {
  return (
    <div className="container-fluid bg-white p-5 rounded ">
      <h1 className="textLogin">
        <strong>Bem-vindo</strong>
        <span className="ponto">.</span>
      </h1>
      <p className="labelLogin">
        informe as suas credenciais de acesso ao portal
      </p>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control type="password" />
        </Form.Group>
        <Button className="buttonLogin" type="submit">
          Submit form
        </Button>
      </Form>
    </div>
  );
}

export default FormLogin;
