import "./NoPage.scss";

function NoPage() {
  return (
    <div className="container-fluid">
      <h1 className="invalidMenssage">Página não encontrada </h1>
      <p className="textMenssage">
        Por Favor, tente clicando <a href="/">aqui</a>{" "}
      </p>
    </div>
  );
}

export default NoPage;
