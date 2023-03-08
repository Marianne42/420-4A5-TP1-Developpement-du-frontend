import React from "react";
import Card from "../../../shared/Card";
import Button from "../../../shared/Formulaire/Button";
import "./Place.css";

function Place({ place }) {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={place.imageUrl} alt={place.titre} />
        </div>
        <div className="place-item__info">
          <h2> {place.titre}</h2>
          <h3>{place.adresse}</h3>
          <p>{place.description}</p>
        </div>
        <div className="place-item__actions">
          <Button inverse> Voir sur la carte </Button>
          <Button to={`/places/${place.id}`}> Éditer </Button>
          <Button danger> Supprimer </Button>
        </div>
      </Card>
    </li>
  );
}

export default Place;
