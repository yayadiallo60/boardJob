import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = (props) => {
  return (
    <>
      <Header className={"header"} title={"The Job Board"} />
      <div className="board">
        <Board
          className={"red"}
          description={"Full Time Sales Associate - Sydney Boutique"}
          contrat={"CDI - France - Paris"}
        />
        <Board
          className={"green"}
          description={"Agent de securite - Pantin"}
          contrat={"CDI - Austalie - Sydney"}
        />
        <Board
          className={"yellow"}
          description={"Respoinsable d'Atelier (H/F)"}
          contrat={"CDI - Suede - Stockholme"}
        />
        <Board
          className={"blue"}
          description={"Chef de projet"}
          contrat={"CDI - France - Pantin"}
        />
        <Board
          className={"pink"}
          description={"Developpeur React.js"}
          contrat={"CDI - France - Paris"}
        />
        <Board
          className={"red"}
          description={"Sales Associate Stockholm"}
          contrat={"CDI - France - Paris"}
        />
        <Board
          className={"green"}
          description={"Vendeur/se - Crans Montana"}
          contrat={"CDI - France - Paris"}
        />
        <Board
          className={"yellow"}
          description={"CRM & Data Quality Analyst"}
          contrat={"CDI - France - Paris"}
        />
        <Board
          className={"blue"}
          description={"Infermmiere(H/F)"}
          contrat={"CDI - France - Paris"}
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
