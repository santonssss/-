import "./App.css";
import Header from "./Components/header/header";
import Drug from "./Components/drug/drug";
import More from "./Components/more/more";
import Rectangle from "./Components/rectangle/rectangle";
import Bg from "./Components/bg/bg";
import Help from "./Components/help/help";
function App() {
  return (
    <div className="App">
      <Header />
      <Drug />
      <More />
      <Rectangle />
      <Bg />
      <Help />
    </div>
  );
}

export default App;
