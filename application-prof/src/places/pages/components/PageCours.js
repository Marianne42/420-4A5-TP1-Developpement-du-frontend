import React from "react";
import Card from "../../../shared/Card";
import Button from "../../../shared/Formulaire/Button";
import { useParams } from "react-router-dom";
import { getCours } from "../Cours.js";
import "./PageCours.css";
import { getProfesseur } from "../../../utilisateur/pages/Utilisateurs";
import { Utilisateur } from "../../../utilisateur/components/Utilisateur";

function PageCours() {
    const coursId = useParams().coursId;
    const notreCours = getCours(coursId);
    const user = getProfesseur(notreCours.professeur)
  
  return (
        <><div className="place-item__info">
          <h2>{notreCours.titre}</h2>
          <h3>{notreCours.nbrMaxEtudiant} élèves maximum</h3>
          <p>{notreCours.discipline}</p>
          <Utilisateur key={user.id} utilisateur={user}/>
        </div></>
  );
}

export default PageCours;