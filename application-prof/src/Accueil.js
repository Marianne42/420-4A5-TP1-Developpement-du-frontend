import React from "react";
import logoMomo from './logoMomo.png';

function Accueil() {
  return (
  <div className="App">
  <header className="App-header">
    <img src = {logoMomo} className="App-logo" alt="logo" />
    <p className="text-blanc">
      Bienvenue sur le site du collège Montmorency
    
      Voici les différentes fonctionnalités du site :
    </p>
    
  </header>
</div> 
  )
}

export default Accueil;