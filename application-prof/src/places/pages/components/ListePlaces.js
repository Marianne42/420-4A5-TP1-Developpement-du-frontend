import { PROPERTY_TYPES } from "@babel/types";
import Card from "../../../shared/Card";
import React from "react";
import Place from "./Place";
import "./ListePlaces.css";
import Button from "../../../shared/Formulaire/Button";
import { useParams } from "react-router-dom";
import Cours from "../Cours";
import { useState } from "react";


function ListePlaces({cours, ajouterCours}) {

  const [titreSaisie, setTitre] = useState(
    ""
  )
  const [disciplineSaisie, setDiscipline] = useState(
    ""
  )
  const [nbrMaxEtudiantSaisie, setNbrMaxEtudiant] = useState(
    ""
  )
  const [dateDebutSaisie, setDateDebut] = useState(
    ""
  )
  const [dateFinSaisie, setDateFin] = useState(
    ""
  )

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const nouveauCours={
      titre           : titreSaisie,
      discipline      : disciplineSaisie,
      nbrMaxEtudiant  : nbrMaxEtudiantSaisie,
      dateDebut       : dateDebutSaisie,
      dateFin         : dateFinSaisie

    };


    ajouterCours(nouveauCours)
    
  }

  function saisieTitre(event){
    
    setTitre(event.target.value)
  }

  function saisieDiscipline(event){
    
    setDiscipline(event.target.value)
  }

  function saisieNbrEleves(event){
    
    setNbrMaxEtudiant(event.target.value)
  }

  function saisieDateDebut(event){
    
    setDateDebut(event.target.value)
  }

  function saisieTitreDateFin(event){
    
    setDateFin(event.target.value)
  }


  var numSession = parseInt(useParams().numsession);
  if (cours.length === 0)
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
            Session Précedente{" "}
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
              <input type="text" value={titreSaisie} onChange={saisieTitre}/>
            </label>
            <br/>
            <label>
              Discipline : {" "}
              <input type="text" value={disciplineSaisie} onChange={saisieDiscipline}/>
            </label>
            <br/>
            <label>
              Nombre maximal d'élèves : {" "}
              <input type="number" value={nbrMaxEtudiantSaisie} onChange={saisieNbrEleves}/>
            </label>
            <br/>
            <label>
              Date de début : {" "}
              <input type="date" value={dateDebutSaisie} onChange={saisieDateDebut}/>
            </label>
            <br/>
            <label>
              Date de fin : {" "}
              <input type="date" value={dateFinSaisie} onChange={saisieTitreDateFin}/>
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
        {cours.map((place) => (
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

        <div className="place-list center">
          <form onSubmit={handleSubmit}>
            <h1 className=""> Ajouter un cours </h1>
            
            <label>
              Titre : {" "}
              <input type="text" value={titreSaisie} onChange={saisieTitre}/>
            </label>
            <br/>
            <label>
              Discipline : {" "}
              <input type="text" value={disciplineSaisie} onChange={saisieDiscipline}/>
            </label>
            <br/>
            <label>
              Nombre maximal d'élèves : {" "}
              <input type="number" value={nbrMaxEtudiantSaisie} onChange={saisieNbrEleves}/>
            </label>
            <br/>
            <label>
              Date de début : {" "}
              <input type="date" value={dateDebutSaisie} onChange={saisieDateDebut}/>
            </label>
            <br/>
            <label>
              Date de fin : {" "}
              <input type="date" value={dateFinSaisie} onChange={saisieTitreDateFin}/>
            </label>
            <br/>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ListePlaces;
