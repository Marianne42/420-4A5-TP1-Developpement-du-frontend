import React from "react";
import ListePlaces from "./components/ListePlaces";
import { useParams } from "react-router-dom";
import { COURS, NB_COURS, set_NB_COURS, set_COURS} from "../../App";




//La session actuelle c'est 2023-01-01 jusqu'à 2023-06-06
function Cours() {
  //ICI
  const session = [
    [new Date("2023-01-01"),new Date("2023-06-06")],
    [new Date("2022-08-01"),new Date("2022-12-23")],
    [new Date("2022-01-01"),new Date("2022-06-06")],
    [new Date("2021-08-01"),new Date("2021-12-23")],
    [new Date("2021-01-01"),new Date("2021-06-06")]
  ]

  var numSession = useParams().numsession;
  var sessionAffichee = session[numSession]
  const coursCharges = COURS.filter((cours) => (cours.dateDebut >=  sessionAffichee[0] && cours.dateFin <= sessionAffichee[1])); // À éditer pour ne faire voir que les cours actuels
  return (
    <ListePlaces places={coursCharges} />
  
  )
}

export function ajouterCours(titreN, disciplineN, nbrMaxEtudiantN, dateDebutN, dateFinN){
  set_NB_COURS(NB_COURS + 1);
  const idN = "c" + NB_COURS
  /*COURS.push({
    id:idN,
    titre:titreN,
    discipline:disciplineN,
    nbrMaxEtudiant:nbrMaxEtudiantN,
    dateDebut:dateDebutN,
    dateFin:dateFinN,
    professeur:"u3"
  })*/
  alert("J'ai "+NB_COURS+" cours dans ma base de données ! Yay !")
}

export function getCours(coursId){
  return COURS.filter((cours) => (cours.id === coursId))[0];
}

export default Cours;
