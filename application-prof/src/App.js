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

function App() {
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
          <Route path="/:userId/cours" exact>
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
