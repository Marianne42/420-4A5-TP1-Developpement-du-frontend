import React from "react";
import { Link } from "react-router-dom";
import { getCours } from "../../places/pages/Cours";


import Avatar from "../../shared/Avatar";
import Card from "../../shared/Card";

import "./Utilisateur.css";


export function Utilisateur({ utilisateur }) {
  
  
  return (
        
        <Card className="user-item__content">
          <Link to={`/${utilisateur.id}/cours`}>
            <div className="user-item__image">
              <Avatar image={utilisateur.image} alt={utilisateur.nom} />
            </div>

            <div className="user-item__info">
              <h2>{utilisateur.nom} {utilisateur.prenom} </h2>
              <h3>
                <ul>
                {utilisateur.cours.map(coursId => <li> {getCours(coursId).titre} </li>)}
                </ul>
                
              </h3>
              
            </div>
          </Link>
        </Card>
        
    
  );
}

export default Utilisateur;