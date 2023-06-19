import Header from "../components/Header";
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Juego from "./Juego.js";
export default function Home() {
  const [ocultarAyuda, setOcultarAyuda] = useState(true);
  const ocultarMostrarAyuda = () => {
    setOcultarAyuda(!ocultarAyuda);
  };

  return (
    
      <div className="content">
        <Header />
        <div className="enlaces-flex">
          <div className="enlaces">
            <Link to="/juego" className="botones-main">
              Jugar
            </Link>
            <button className="botones-main" onClick={ocultarMostrarAyuda}>
              Reglas
            </button>
          </div>
        </div>
        {!ocultarAyuda && (
          <div className="reglas-content" style={{ display: "block" }}>
            <h1>Reglas</h1>
            <p>El jugador elige entre:</p>
            <ul>
              <li>Piedra</li>
              <li>Papel</li>
              <li>Tijera</li>
            </ul>
            <p>
              Una vez haya elegido una de las opciones, habrá un contador de 3
              segundos para esperar la respuesta de la IA. Según la respuesta de
              cada jugador, se sumará 1 punto al ganador de la ronda
            </p>
            <h3>¿Qué valor tienen las tiradas?</h3>
            <ul>
              <li>La piedra aplasta la tijera. (Gana la piedra)</li>
              <li>La tijera corta el papel. (Gana la tijera)</li>
              <li>El papel envuelve la piedra. (Gana el papel)</li>
              <li>
                En caso de empate (que el jugador y la IA elijan el mismo
                elemento), no se suma ningún punto.
              </li>
            </ul>
          </div>
        )}
      </div>
  );
}
