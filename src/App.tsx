import Header from "./components/Header/Header";
import Media from "./components/Media/Media";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="container__main">
        <Media />
      </main>
    </div>
  );
}

export default App;
