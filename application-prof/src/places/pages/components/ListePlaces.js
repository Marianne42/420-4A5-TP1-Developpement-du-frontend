import { PROPERTY_TYPES } from "@babel/types";
import Card from "../../../shared/Card";
import React from "react";
import Place from "./Place";
import "./ListePlaces.css";
import Button from "../../../shared/Formulaire/Button";
import { useParams } from "react-router-dom";

function ListePlaces(props) {
  var pif = Math.min(0, 1);
  var numSession = parseInt(useParams().numsession);
  if (props.places.length === 0)
    return (
      <div>
        <div className="place-list center">
          <Card>
            <h2> Pas de cours trouvées :</h2>
          </Card>
        </div>
        <div>
          <Button to={`/session/${Math.min(numSession + 1, 4)}`}>
            {" "}
            Session Precedente{" "}
          </Button>
          <Button to={`/session/${Math.max(numSession - 1, 0)}`}>
            {" "}
            Session Suivante{" "}
          </Button>
        </div>
      </div>
    );

  return (
    <div>
      <ul className="place-list">
        {props.places.map((place) => (
          <Place key={place.id} place={place} />
        ))}
      </ul>
      <div>
        <Button to={`/session/${Math.min(numSession + 1, 4)}`}>
          {" "}
          Session Precedente{" "}
        </Button>
        <Button to={`/session/${Math.max(numSession - 1, 0)}`}>
          {" "}
          Session Suivante{" "}
        </Button>
      </div>
    </div>
  );
}

export default ListePlaces;
