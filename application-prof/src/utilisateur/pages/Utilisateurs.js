import React from "react";
import ListeUtilisateurs from "../components/ListeUtilisateurs";

function Utilisateurs() {
  var chat = "chat"
  const utilisateurs = [
    {
      id: "u1",
      nom: "Sylvain Labranche",
      image: "https://www.chumontreal.qc.ca/sites/default/files/guy-pare_5.jpeg",
      cours: ["Programmation Web", "Designs"],
    },
    {
      id: "u2",
      nom: "Chat blanc",
      image: "https://imgs.search.brave.com/8geawRwEFS-pveoR54T_jcAoclS3C85q9KnyuKyquz0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlcGV0/cy5jb20vdGhtYi9o/SjQwaGRwSzRLWjVB/ZWhsTW1WRWRKcjh6/UEk9LzE5OTl4MTQ1/OS9maWx0ZXJzOmZp/bGwoYXV0bywxKS90/d2VudHkyMF9lNDdi/Mzc5OC1kZDliLTQw/YjEtOTFlZi0xZDgy/MDMzNzk2NmUtNWFh/M2Y3OTg2NDJkY2Ew/MDM2M2IwZGYxLmpw/Zw",
      cours: [chat, "potiron"],
    },
  ];
  return <ListeUtilisateurs utilisateurs={utilisateurs} />;
}

export default Utilisateurs;