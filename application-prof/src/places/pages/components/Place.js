import React from "react";
import Card from "../../../shared/Card";
import Button from "../../../shared/Formulaire/Button";
import "./Place.css";

function Place({ place }) {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__info">
          <h2> {place.titre}</h2>
          <h3>{place.nbrMaxEtudiant} élèves maximum</h3>
          <p>{place.discipline}</p>
        </div>
        <div className="place-item__actions">
          <Button inverse> Voir sur la carte </Button>
          <Button to={`/places/${place.id}`}> Voir enseignants </Button>
          <Button danger> Supprimer </Button>
        </div>
      </Card>
    </li>
  );
}

export default Place;
