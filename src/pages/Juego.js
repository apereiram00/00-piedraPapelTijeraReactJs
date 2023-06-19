/* Autor: Álvaro Pereira
 Fecha: ??-??-??
 Nombre: Juego.jsx
 Descripción: 
 */

import { useState, useRef } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default function Juego() {
  const [ocultarPuntuacion, setOcultarPuntuacion] = useState(true);
  const [activarBoton, setActivarBoton] = useState(false);
  const [contador, setContador] = useState(3);
  const piedraIA = useRef(null);
  const papelIA = useRef(null);
  const tijeraIA = useRef(null);
  const ocultarMostrarPuntuacion = () => {
    setOcultarPuntuacion(!ocultarPuntuacion);
  };

  const contadorJuego = () => {
    setInterval(() => {
      setContador(contador - 1);
      
    }, 1000);
  }

  const manejarJugada = (e) => {
    const selectedBtn = e.currentTarget;
    selectedBtn.classList.add("boton-seleccionado");
    const respuestaIA = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
      setTimeout(() => {
        if (respuestaIA === 1) {
          console.log(piedraIA.current);
          piedraIA.current.classList.add("boton-seleccionado");
        }
        if (respuestaIA === 2) {
          console.log(piedraIA.current);
          papelIA.current.classList.add("boton-seleccionado");
        }
        if (respuestaIA === 3) {
          console.log(piedraIA.current);
          tijeraIA.current.classList.add("boton-seleccionado");
        }
        // botonesIA.classList.add('boton-seleccionado');
        console.log("La ia eligió => ", respuestaIA);
      }, 3000);
      clearTimeout();
      // Función para deshabilitar los botones del jugador una vez haya clickado, para evitar hacer entrar en bucle al juego u otros errores
      setActivarBoton(true);
      console.log(e.currentTarget);
      setTimeout(() => {
        setActivarBoton(false);
        selectedBtn.classList.remove("boton-seleccionado");
        piedraIA.current.classList.remove("boton-seleccionado");
        papelIA.current.classList.remove("boton-seleccionado");
        tijeraIA.current.classList.remove("boton-seleccionado");
      }, 5000);
      clearTimeout();
  };
  return (
    <div className="content">
      <Header />
      <div className="enlaces-flex">
        <div className="enlaces">
          <button className="botones-main" onClick={ocultarMostrarPuntuacion}>
            Puntuación
          </button>
          <Link to="/" className="botones-main">
            Volver
          </Link>
        </div>
      </div>
      {ocultarPuntuacion && (
        <div className="juego-estado" style={{ display: "flex" }}>
          <div className="juego-content">
            <div className="botones-flex">
              <div className="juego-title">
                <h1>IA</h1>
              </div>
              <div className="botones-juego-IA">
                <button
                  type="button"
                  name="Piedra-IA"
                  className="boton-IA"
                  ref={piedraIA}
                >
                  Piedra
                </button>
                <button
                  type="button"
                  name="Papel-IA"
                  className="boton-IA"
                  ref={papelIA}
                >
                  Papel
                </button>
                <button
                  type="button"
                  name="Tijera-IA"
                  className="boton-IA"
                  ref={tijeraIA}
                >
                  Tijera
                </button>
              </div>
              <div className="contador">
                <p>{contador}</p>
              </div>
              <div className="juego-title2">
                <h1>Jugador</h1>
              </div>
              <div className="botones-juego-jugador">
                <button
                  type="button"
                  className="boton-jugador"
                  name="Piedra-Jugador"
                  disabled={activarBoton}
                  onClick={manejarJugada}
                >
                  Piedra
                </button>
                <button
                  type="button"
                  className="boton-jugador"
                  name="Papel-Jugador"
                  disabled={activarBoton}
                  onClick={manejarJugada}
                >
                  Papel
                </button>
                <button
                  type="button"
                  className="boton-jugador"
                  name="Tijera-Jugador"
                  disabled={activarBoton}
                  onClick={manejarJugada}
                >
                  Tijera
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {!ocultarPuntuacion && (
        <div className="puntuacion-content" style={{ display: "flex" }}>
          <div className="puntuacion">
            <h1 className="title-border">IA</h1>
            <br />
            <p id="iaPuntuacion">0</p>
          </div>
          <div className="puntuacion">
            <h1 className="title-border">Jugador</h1>
            <br />
            <p id="jugadorPuntuacion">0</p>
          </div>
        </div>
      )}
    </div>
  );
}
