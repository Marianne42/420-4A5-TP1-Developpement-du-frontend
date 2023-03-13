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
    dateDebut: new Date("2022-08-01"),
    dateFin: new Date("2022-12-31"),
    professeur: "u2",
  },
  {
    id: "p4",
    titre: "Cours de Guérilande",
    discipline: "Le cours qui apprend à jouer un deck Guérilande Voodoo Zone perdu",
    nbrMaxEtudiant: 30,
    dateDebut: new Date("2022-01-02"),
    dateFin: new Date("2022-06-05"),
    professeur: "u1",
  },
  {
    id: "p5",
    titre: "Cours de sortilèges niveau 1",
    discipline: "Apprenez dans ce cours les sorts de base comme Levioso ou Imperio",
    nbrMaxEtudiant: 20,
    dateDebut: new Date("2021-09-01"),
    dateFin: new Date("2021-11-15"),
    professeur: "u2",
  },
  {
    id: "p6",
    titre: "Apprendre le langage des Pokémons",
    discipline: "Attrapez les tous au passage",
    nbrMaxEtudiant: 5,
    dateDebut: new Date("2022-08-01"),
    dateFin: new Date("2022-12-31"),
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

export function getCours(coursId){
  return COURS.filter((cours) => (cours.id === coursId))[0];
}

export default Cours;
