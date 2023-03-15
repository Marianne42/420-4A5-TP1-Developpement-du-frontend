import React from "react";
import ListeUtilisateurs from "../components/ListeUtilisateurs";

const utilisateurs = [
  {
    id: "u1",
    prenom: "Sylvain",
    nom: "Labranche",
    dateEmbauche: new Date("2001-11-28"),
    image: "https://www.chumontreal.qc.ca/sites/default/files/guy-pare_5.jpeg",
    cours: ["c1", "c3"],
  },
  {
    id: "u2",
    prenom: "blanc",
    nom: "Chat",
    dateEmbauche: new Date("2015-02-31"),
    image: "https://imgs.search.brave.com/8geawRwEFS-pveoR54T_jcAoclS3C85q9KnyuKyquz0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlcGV0/cy5jb20vdGhtYi9o/SjQwaGRwSzRLWjVB/ZWhsTW1WRWRKcjh6/UEk9LzE5OTl4MTQ1/OS9maWx0ZXJzOmZp/bGwoYXV0bywxKS90/d2VudHkyMF9lNDdi/Mzc5OC1kZDliLTQw/YjEtOTFlZi0xZDgy/MDMzNzk2NmUtNWFh/M2Y3OTg2NDJkY2Ew/MDM2M2IwZGYxLmpw/Zw",
    cours: ["c2","c5"],
  },
  {
  id: "u3",
  prenom: "Guérilande",
  nom: "De Voodoo",
  dateEmbauche: new Date("2019-01-01"),
  image: "http://pa1.narvii.com/7091/f72a3b4f989e6ac4dba12495cb4a3799e5a830d6r1-150-150_00.gif",
  cours:["c4","c6"]
  }
];

function Utilisateurs() {
  
  
  return <ListeUtilisateurs utilisateurs={utilisateurs} />;
}

export function getProfesseur(userId){
    return utilisateurs.filter((user) => (user.id === userId))[0];
}


export default Utilisateurs;
