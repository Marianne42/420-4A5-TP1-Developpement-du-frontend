import React from "react";
import ListePlaces from "./components/ListePlaces";
import { useParams } from "react-router-dom";

const COURS = [
  {
    id: "p1",
    titre: "Cours de Programmation",
    discipline: "Le cours qui apprend à faire du code",
    nbrMaxEtudiant: 30,
    dateDebut: new Date("2023-01-01"),
    dateFin: new Date("2023-06-06"),
    professeur: "u1",
  },
  {
    id: "p3",
    titre: "Cours de Design",
    discipline: "Le cours qui apprend à faire du je sais pas quoi",
    nbrMaxEtudiant: 30,
    dateDebut: new Date("2023-01-01"),
    dateFin: new Date("2023-06-06"),
    professeur: "u1",
  },
  {
    id: "p2",
    titre: "Toilettage de chat",
    discipline: "Cours pour apprendre à toiletter son chat trop pipou",
    nbrMaxEtudiant: 30,
    dateDebut: new Date("2023-01-01"),
    dateFin: new Date("2023-06-06"),
    professeur: "u2",
  },
];

function Cours() {
  const userId = useParams().userId;
  const placesChargees = COURS //.filter((place) => (place.createur === userId));
  return (
    <ListePlaces places={placesChargees} />
  
  )
}

export default Cours;
