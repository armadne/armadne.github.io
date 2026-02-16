import React from "react";
import Header from "../components/Header";
import ProjectsSection from "../components/ProjectsSection";

import sitesWeb from "../data/sites_web.json";
import python from "../data/projets_python.json";
import embarque from "../data/projets_embarque.json";
import certifications from "../data/certifications.json";
import competences from "../data/competences.json"
import Parcours from "../components/Parcours";

const competencesArray = Object.entries(competences).map(([key, values]) => ({
  title: key.replace("_", " ").toUpperCase(),
  resume_write_up: values
}));


import "../styles/style.css";

import cyber from "../data/cybersecurite.json";

const cyberArray = [
  ...cyber["404CTF"].challenges,
  ...cyber["TryHackMe"].rooms
];

export default function Home() {
  // Vérifier que les JSON sont bien chargés
  console.log("Sites Web:", sitesWeb);
  console.log("Python:", python);
  console.log("Embarqué:", embarque);
  console.log("Certifications:", certifications);

  return (
    <>
      <Header />

      <Parcours/>

      <main className="container">

        <ProjectsSection
          id="site-web"
          title="Projets Web"
          data={sitesWeb}
        />

        <ProjectsSection
          id="projets-python"
          title="Projets Python"
          data={python}
        />

        <ProjectsSection
          id="embarque"
          title="Systèmes embarqués"
          data={embarque}
        />

             <ProjectsSection
  id="cybersecurite"
  title="Cybersécurité – CTF & TryHackMe"
  data={cyberArray}
/>

             <ProjectsSection
  id="competences"
  title="Compétences"
  data={competencesArray}
/>


        <ProjectsSection
          id="certifications"
          title="Certifications"
          data={certifications}
        />

 
        
      </main>
    </>
  );
}
