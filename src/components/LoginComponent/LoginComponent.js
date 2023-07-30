import { Form, Button } from "react-bootstrap";
import "./LoginComponent.scss";
import iconInterrogacao from "../../image/icon-interrogacao.png";
import DropdownMarvel from "../DropdownMarvel/DropdownMarvel";
import { useDispatch, useSelector } from "react-redux";
import { changeLoginText } from "../../redux/userSlice";

function LoginComponent(dataComponent) {
  const dispatch = useDispatch();
  const { title } = useSelector((state) => state.loginText);
  const { label } = useSelector((state) => state.loginText);
  const { page } = useSelector((state) => state.loginText);

  const handleSubmit = () => {
    dispatch(
      changeLoginText({
        title: "Selecione o seu agente mais legal",
        label: "Tenha a visão completa do seu agente.",
        page: 4,
      })
    );
  };
  const handleEsqueciSenha = () => {
    dispatch(
      changeLoginText({
        title: "Recuperar senha",
        label:
          "Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.",
        page: 2,
      })
    );
  };
  const handleResetSenha = () => {
    dispatch(
      changeLoginText({
        title: "Tudo certo ;)",
        label:
          "Foi enviado um e-mail para você com instruções de como redefinir a sua senha.",
        page: 3,
      })
    );
  };

  return (
    <div>
      <h1 className="textLogin mb-3">
        <strong>{title}</strong>
        <span className="ponto">.</span>
      </h1>
      <p className="labelLogin">{label}</p>
      {page === 1 && (
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
          <Button size="lg" onClick={handleSubmit} className="buttonLogin">
            Submit form
          </Button>
          <div className="senha mt-2">
            <p onClick={handleEsqueciSenha}>
              <img src={iconInterrogacao} class="img-fluid iconInt" alt="..." />
              Esqueceu a senha?
            </p>
          </div>
        </Form>
      )}
      {page === 2 && (
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              size="lg"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Button
            size="lg"
            onClick={handleResetSenha}
            className="buttonLogin"
            type="submit"
          >
            Submit form
          </Button>
        </Form>
      )}
      {page === 3 && (
        <Button size="lg" href="/login" className="buttonLogin">
          voltar para o login
        </Button>
      )}
      {page === 4 && <DropdownMarvel></DropdownMarvel>}
    </div>
  );
}

export default LoginComponent;
