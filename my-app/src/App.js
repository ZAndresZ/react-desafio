import "./1micss.css";
import "./App.css";
import "./1functions";
import {clickPorSaludo} from "./1functions";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return(
    <><Navbar />
    <div>
      <h1 style={{ fontSize: 50 }} class="titulo">
        Desafio en curso!
      </h1>
      <button onClick={clickPorSaludo}>Me califiques un 10 porfi?</button>
    </div></>
  )
}

export default App;