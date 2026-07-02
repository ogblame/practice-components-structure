import Header from "./components/Header/Header";
import Media from "./components/Media/Media";
import "./index.css";
import Expert from "./components/Experts/Expert";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="container__main">
        <Media />
        <Expert />
        <Main />
      </main>
    </div>
  );
}

export default App;
