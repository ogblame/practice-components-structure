import ExpertSection from "./components/Experts/ExpertSection";
import Header from "./components/Header/Header";
import Media from "./components/Media/Media";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="container__main">
        <Media />
        <h3 className="title__exprerts">Эксперты YeaHub</h3>
        <p className="description__exprerts">
          Наши гуру делятся опытом в разных форматах. Смотрите разборы кейсов,
          участвуйте в стримах и перенимайте их подход к работе
        </p>
        <ExpertSection />
        <ExpertSection />
      </main>
    </div>
  );
}

export default App;
