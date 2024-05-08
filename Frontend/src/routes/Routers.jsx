import React from "react";
import { Route, Routes } from "react-router-dom";
import Inscription from "../components/Inscription/Inscription";
import ArticlesScientifiques from "../components/ArticlesScientifiques/ArticlesScientifiques";
import OuvragesScientifiques from "../components/OuvragesScientifiques/OuvragesScitifiques";
import ChapitreOuvrage from "../components/ChapitreOuvrage/ChapitreOuvrage";
import Brevets from "../components/Brevets/Brevets";
import Obtentionsvegetales from "../components/ObtentionsVegetales/ObtentionsVegetales";
import Habitations from "../components/Habitations/Habitations";
import ThesesDoctorat from "../components/ThesesDoctorat/ThesesDoctorat";
import MasteresRecherche from "../components/MasteresRecherche/MasteresRecherche";
import ManifestationsScientifiques from "../components/ManifestationsScientifiques/ManifestationsScientifiques";
import Conventions from "../components/Conventions/Conventions";
import NewProject from "../components/NewProject/NewProject";
import Home from "../Pages/Home";
import Login from "../components/Login/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import CreateSuccess from "../components/CreateSuccess/CreateSuccess"
// import EditInscription from "../components/Edit/EditInscription";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/inscription" element={<Inscription/>} />
      <Route
        path="/articles-scientifiques"
        element={<ArticlesScientifiques />}
      />
      <Route
        path="/ouvrages-scientifiques"
        element={<OuvragesScientifiques />}
      />
      <Route path="/chapitre-ouvrage" element={<ChapitreOuvrage />} />
      <Route path="/brevets" element={<Brevets />} />
      <Route path="/obtentions-vegetales" element={<Obtentionsvegetales />} />
      <Route path="/habitations" element={<Habitations />} />
      <Route path="/these-doctorat" element={<ThesesDoctorat />} />
      <Route path="/masteres-recherche" element={<MasteresRecherche />} />
      <Route
        path="/manifestations-scientifiques"
        element={<ManifestationsScientifiques />}
      />
      <Route path="/conventions" element={<Conventions />} />
      <Route path="/new-project" element={<NewProject />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-success" element={<CreateSuccess />} />
      {/* <Route path="/edit-inscription/:cinInsc" element={<EditInscription />} /> */}
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<ArticlesScientifiques />}/>
    </Routes>
  );
};

export default Routers;