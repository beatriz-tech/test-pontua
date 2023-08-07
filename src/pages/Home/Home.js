import "./Home.scss";
import NavBar from "../../components/NavBar/NavBar";
import Cards from "../../components/Cards/Cards";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 bg-light">
          <NavBar></NavBar>
        </div>
        <div className="col p-0 bg-light">
          <Cards></Cards>
        </div>
      </div>
    </div>
  );
}

export default Home;
