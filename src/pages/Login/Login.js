import "./Login.scss";
import logoImg from "../../image/PontuaLogo.png";
import photoLogin from "../../image/photoLogin.png";
import LoginComponent from "../../components/LoginComponent/LoginComponent";

function Login() {
  const dataComponent = {
    title: "Bem-vindo",
    label: "informe as suas credenciais de acesso ao portal",
    page: 1,
  };
  return (
    <div className="container-fluid p-3 login">
      <div className="row">
        <div className="col">
          <img src={logoImg} class="img-fluid logoImg" alt="..." />
        </div>
      </div>
      <div className="row">
        <div className="col-lg text-center">
          <img src={photoLogin} class="img-fluid" alt="..." />
        </div>
        <div className="col-lg-4 p-5">
          <div className="container-fluid bg-white p-5 conteinerLogin rounded ">
            <LoginComponent dataComponent={dataComponent}></LoginComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
