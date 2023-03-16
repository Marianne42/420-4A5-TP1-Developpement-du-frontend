import React from "react";
import logoMomo from "./logoMomo.png";
import "./Accueil.css";

function Accueil() {
  return (
    <div className="background_color">
      <header className="background_color">
        <img src={logoMomo} className="App-logo" alt="logo" />
        <p className="text_blanc">
          Bienvenue sur le site du collège Montmorency
          <br />
          Voici les différentes fonctionnalités du site :
        </p>
      </header>
    </div>
  );
}

export default Accueil;
