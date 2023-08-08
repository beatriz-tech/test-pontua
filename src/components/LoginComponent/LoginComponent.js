import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./LoginComponent.scss";
import { toastr } from "react-redux-toastr";
import api from "../../services/api.js";
import DropdownMarvel from "../DropdownMarvel/DropdownMarvel";
import { useDispatch, useSelector } from "react-redux";
import { changeLoginText } from "../../redux/userSlice";
import { changeCharacter } from "../../redux/userSlice";

function LoginComponent(dataComponent) {
  const dispatch = useDispatch();
  const { title } = useSelector((state) => state.loginText);
  const { label } = useSelector((state) => state.loginText);
  const { page } = useSelector((state) => state.loginText);
  const { users } = useSelector((state) => state.loginText);
  const [dataUser, setDataUser] = useState({ email: "", senha: "" });
  const [validated, setValidated] = useState(false);
  const [validatedSenha, setValidatedSenha] = useState(false);

  useEffect(() => {
    api
      .get("/characters")
      .then((response) => {
        const characters = response.data.data.results;
        dispatch(
          changeCharacter({
            charactersState: characters,
          })
        );
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  const handleChange = (event) => {
    if (event.target.id === "email")
      setDataUser({ email: event.target.value, senha: dataUser.senha });
    if (event.target.id === "senha")
      setDataUser({ email: dataUser.email, senha: event.target.value });
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      stopPage(event);
    } else {
      const found = users.find((element) => element.email === dataUser.email);
      if (found) {
        if (found.senha === dataUser.senha) {
          setValidated(true);
          toastr.success("Success", "Usuário logado com sucesso");
          dispatch(
            changeLoginText({
              title: "Selecione o seu agente mais legal",
              label: "Tenha a visão completa do seu agente.",
              page: 4,
            })
          );
        } else {
          stopPage(event);
          toastr.error("Falha", "Senha Inválida");
        }
      } else {
        toastr.error("Falha", "Email não encontrado");
        stopPage(event);
      }
    }
  };
  const stopPage = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setValidated(false);
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
  const handleResetSenha = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const found = users.find((element) => element.email === dataUser.email);
      if (found) {
        setValidated(true);
        setValidatedSenha(true);
        toastr.success("Success", "Usuário logado com sucesso");
        dispatch(
          changeLoginText({
            title: "Tudo certo ;)",
            label:
              "Foi enviado um e-mail para você com instruções de como redefinir a sua senha.",
            page: 3,
          })
        );
      } else {
        toastr.error("Falha", "Email não encontrado");
        stopPage(event);
      }
    }
  };

  return (
    <div>
      <h1 className="textLogin mb-3">
        <strong>{title}</strong>
        <span className="ponto">.</span>
      </h1>
      <p className="labelLogin">{label}</p>
      {page === 1 && (
        <Form validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              size="lg"
              id="email"
              onChange={handleChange}
              type="email"
              placeholder="name@example.com"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              size="lg"
              id="senha"
              onChange={handleChange}
              type="password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <Button size="lg" type="submit" className="buttonLogin">
            entrar
          </Button>
          <div className="senha mt-2">
            <p onClick={handleEsqueciSenha}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-question-diamond"
                viewBox="0 0 16 16"
              >
                <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
              </svg>
              &nbsp; Esqueceu a senha?
            </p>
          </div>
        </Form>
      )}
      {page === 2 && (
        <Form validated={validatedSenha} onSubmit={handleResetSenha}>
          <Form.Group className="mb-3">
            <Form.Control
              size="lg"
              id="email"
              onChange={handleChange}
              type="email"
              placeholder="name@example.com"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Button size="lg" className="buttonLogin" type="submit">
            Submit form
          </Button>
        </Form>
      )}
      {page === 3 && (
        <Button size="lg" href="/" className="buttonLogin">
          voltar para o login
        </Button>
      )}
      {page === 4 && <DropdownMarvel></DropdownMarvel>}
    </div>
  );
}

export default LoginComponent;
