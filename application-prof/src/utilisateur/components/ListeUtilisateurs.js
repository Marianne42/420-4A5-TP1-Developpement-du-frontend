import React from "react";
import "./ListeUtilisateurs.css";
import Utilisateur from "./Utilisateur";
import Card from "../../shared/Card";

function ListeUtilisateurs(props) {
  if (props.utilisateurs.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun professeur</h2>
        </Card>

        <div className="place-list center">
          <form>
            <h1 className=""> Ajouter un Professeur </h1>
            
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
  }

  return (
    <ul className="users-list">
      {props.utilisateurs.map((utilisateur) => (
        <li className="user-item">
          <Utilisateur key={utilisateur.id} utilisateur={utilisateur} /> 
          </li>
      ))}

        <div className="place-list center">
          <form>
            <h1 className=""> Ajouter un Professeur </h1>
            
            <label>
              Date d'embauche : {" "}
              <input type="date" name="dateEmbauche" />
            </label>
            <br/>
            <label>
              Nom : {" "}
              <input type="text" name="nom"/>
            </label>
            <br/>
            <label>
              Prénom : {" "}
              <input type="text" name="prenom"/>
            </label>
            <br/>
            <label>
              Photo : {" "}
              <input type="url" name="photo"/>
            </label>
            <br/>
            <label>
              liste de cours : {" "}
              <input type="text" name="listeCours"/>
            </label>
            <br/>
            <input type="submit" />
          </form>
        </div>
      
    </ul>
  );
}

export default ListeUtilisateurs;
