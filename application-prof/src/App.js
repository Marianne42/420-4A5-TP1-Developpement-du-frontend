import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Utilisateurs from "./utilisateur/pages/Utilisateurs";
import NouvellePlace from "./places/pages/NouvellePlace";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Cours from "./places/pages/Cours";
import Place from "./places/pages/components/Place";
import PageCours from "./places/pages/components/PageCours"
import Accueil from "./Accueil";
import { useState } from "react";

export var NB_COURS;
export var set_NB_COURS;
export var COURS;
export var set_COURS;

function App() {

  [NB_COURS, set_NB_COURS] = useState(6);
  [COURS, set_COURS] = useState([
  {
    id: "c1",
    titre: "Cours de Programmation",
    discipline: "Le cours qui apprend à faire du code",
    nbrMaxEtudiant: 30,
    dateDebut: new Date("2023-01-01"),
    dateFin: new Date("2023-06-06"),
    professeur: "u1",
  },
  {
    id: "c3",
    titre: "Cours de Design",
    discipline: "Le cours qui apprend à faire du je sais pas quoi",
    nbrMaxEtudiant: 30,
    dateDebut: new Date("2023-01-01"),
    dateFin: new Date("2023-06-06"),
    professeur: "u1",
  },
  {
    id: "c2",
    titre: "Toilettage de chat",
    discipline: "Cours pour apprendre à toiletter son chat trop pipou",
    nbrMaxEtudiant: 30,
    dateDebut: new Date("2022-08-01"),
    dateFin: new Date("2022-12-31"),
    professeur: "u2",
  },
  {
    id: "c4",
    titre: "Cours de Guérilande",
    discipline: "Le cours qui apprend à jouer un deck Guérilande Voodoo Zone perdu",
    nbrMaxEtudiant: 30,
    dateDebut: new Date("2022-01-02"),
    dateFin: new Date("2022-06-05"),
    professeur: "u3",
  },
  {
    id: "c5",
    titre: "Cours de sortilèges niveau 1",
    discipline: "Apprenez dans ce cours les sorts de base comme Levioso ou Imperio",
    nbrMaxEtudiant: 20,
    dateDebut: new Date("2021-09-01"),
    dateFin: new Date("2021-11-15"),
    professeur: "u2",
  },
  {
    id: "c6",
    titre: "Apprendre le langage des Pokémons",
    discipline: "Attrapez les tous au passage",
    nbrMaxEtudiant: 5,
    dateDebut: new Date("2022-08-01"),
    dateFin: new Date("2022-12-31"),
    professeur: "u3",
  },
]);

  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path= "/" exact>
            <Accueil />
          </Route>
          <Route path="/professeurs" exact>
            <Utilisateurs />
          </Route>
          <Route path="/session/:numsession" exact>
              <Cours />
          </Route>
          <Route path="/cours/:coursId" exact>
            <PageCours />
          </Route>

          <Route path="/places/nouvelle" exact>
            <NouvellePlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
