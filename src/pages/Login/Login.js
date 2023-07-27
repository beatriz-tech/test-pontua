import "./Login.scss";
import logoImg from "../../image/PontuaLogo.png";
import photoLogin from "../../image/photoLogin.png";
import FormLogin from "../../components/FormLogin/FormLogin";

function Login() {
  return (
    <div className="container-fluid p-3 login">
      <div className="row">
        <div className="col">
          <img src={logoImg} class="img-fluid logoImg" alt="..." />
        </div>
      </div>
      <div className="row">
        <div className="col-lg text-center">
          <img src={photoLogin} class="img-fluid photoLogin" alt="..." />
        </div>
        <div className="col-lg-4 p-5">
          <FormLogin></FormLogin>
        </div>
      </div>
    </div>
  );
}

export default Login;
