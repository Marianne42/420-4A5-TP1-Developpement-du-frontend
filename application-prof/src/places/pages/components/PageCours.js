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
          <div className="user-item">
            <Utilisateur key={user.id} utilisateur={user}/>
          </div>
          <div className="place-list center">
          <form>
            <h1 className=""> Ajouter un étudiant </h1>
            
            <label>
              Nom : {" "}
              <input type="text" name="nom" />
            </label>
            <br/>
            <label>
              Prénom : {" "}
              <input type="text" name="prenom"/>
            </label>
            <br/>
            <label>
              Numéro d'admission : {" "}
              <input type="number" name="numAdmission"/>
            </label>
            <br/>
            <input type="submit" />
          </form>
        </div>

        </div></>
  );
}

export default PageCours;