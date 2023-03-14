import { PROPERTY_TYPES } from "@babel/types";
import Card from "../../../shared/Card";
import React from "react";
import Place from "./Place";
import "./ListePlaces.css";
import Button from "../../../shared/Formulaire/Button";
import { useParams } from "react-router-dom";
import { ajouterCours } from "../Cours";


function ListePlaces(props) {

  const handleSubmit = (event) => {
    const titre           = event.target.titre;
    const discipline      = event.target.discipline;
    const nbrMaxEtudiant  = event.target.nbrMaxEtudiant;
    const dateDebut       = event.target.dateDebut;
    const dateFin         = event.target.dateDebut;

    ajouterCours(titre,discipline,nbrMaxEtudiant,dateDebut,dateFin)
  }


  var numSession = parseInt(useParams().numsession);
  if (props.places.length === 0)
    return (
      <div>
        <div className="place-list center">
          <Card>
            <h2> Pas de cours trouvées :</h2>
          </Card>
        </div>
        <div className="button-center">
          <Button to={`/session/${Math.min(numSession + 1, 4)}`}>
            {" "}
            Session Precedente{" "}
          </Button>
          <Button to={`/session/${Math.max(numSession - 1, 0)}`}>
            {" "}
            Session Suivante{" "}
          </Button>
        </div>
        <div className="place-list center">
          <form onSubmit={handleSubmit}>
            <h1 className=""> Ajouter un cours </h1>
            
            <label>
              Titre : {" "}
              <input type="text" name="titre" />
            </label>
            <br/>
            <label>
              Discipline : {" "}
              <input type="text" name="discipline"/>
            </label>
            <br/>
            <label>
              Nombre maximal d'élèves : {" "}
              <input type="number" name="nbrEleve"/>
            </label>
            <br/>
            <label>
              Date de début : {" "}
              <input type="date" name="dateDebut"/>
            </label>
            <br/>
            <label>
              Date de fin : {" "}
              <input type="date" name="dateFin"/>
            </label>
            <br/>
            <input type="submit" />
          </form>
        </div>
      </div>
    );

  return (
    <div>
      <ul className="place-list">
        {props.places.map((place) => (
          <Place key={place.id} place={place} />
        ))}
      </ul>
      <div className="button-center">
        <Button to={`/session/${Math.min(numSession + 1, 4)}`}>
          {" "}
          Session Precedente{" "}
        </Button>
        <Button to={`/session/${Math.max(numSession - 1, 0)}`}>
          {" "}
          Session Suivante{" "}
        </Button>
      </div>
    </div>
  );
}

export default ListePlaces;
