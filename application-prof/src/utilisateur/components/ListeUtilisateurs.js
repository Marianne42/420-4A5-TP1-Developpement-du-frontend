import React from "react";
import "./ListeUtilisateurs.css";
import Utilisateur from "./Utilisateur";
import Card from "../../shared/Card";

function ListeUtilisateurs(props) {
  if (props.utilisateurs.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun utilisateur</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.utilisateurs.map((utilisateur) => (
        <li className="user-item">
          <Utilisateur key={utilisateur.id} utilisateur={utilisateur} /> 
          </li>
      ))}
    </ul>
  );
}

export default ListeUtilisateurs;
