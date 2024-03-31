import React, { useState } from "react";
import "./ArticlesScientifiques.css";
import { Link } from "react-router-dom";
import { FaFileLines, FaBook, FaUser } from "react-icons/fa6";
import { years, quartile, indexation } from "../../assets/data/fakeData";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CountryDropdown } from "react-country-region-selector";

function ArticlesScientifiques() {
  const location = useLocation();
  const shouldScrollToTop = location.state?.scroll;

  useEffect(() => {
    if (shouldScrollToTop) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [shouldScrollToTop]);

  const [authors, setAuthors] = useState([
    { id: 1, authorType: "", country: "" },
  ]);
  const [nextId, setNextId] = useState(2);

  const handleChangeAuthorType = (id, authorType) => {
    setAuthors((prevAuthors) =>
      prevAuthors.map((author) =>
        author.id === id ? { ...author, authorType } : author
      )
    );
  };

  const handleChangeCountry = (id, country) => {
    setAuthors((prevAuthors) =>
      prevAuthors.map((author) =>
        author.id === id ? { ...author, country } : author
      )
    );
  };

  const handleAddAuthor = () => {
    setAuthors((prevAuthors) => [
      ...prevAuthors,
      { id: nextId, authorType: "", country: "" },
    ]);
    setNextId(nextId + 1);
  };

  const handleRemoveAuthor = (id) => {
    if (authors.length > 1) {
      setAuthors((prevAuthors) =>
        prevAuthors.filter((author) => author.id !== id)
      );
    }
  };

  //   const [formData, setFormData] = useState({
  //   AnneeArt: "",
  //   titreArt: "",
  //   lienArt: "",
  //   fileArt: "",
  //   datePubArt: "",
  //   titreJournalArt: "",
  //   listJournalArt: "",
  //   quartileArt: "",
  //   volumeArt: "",
  //   facteurImpactArt: "",
  //   IndextionArt: "",
  //   siteRevueArt: "",
  // });

  return (
    <>
      <div className="features text-center pt-5 pb-5">
        <div className="container">
          <div className="main-title mt-5 mb-5 position-relative">
            <h2>Création article scientifique</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg"></div>
          <div className="col-lg-8">
            <form className="row g-3">
              <legend>
                <span>
                  <FaFileLines className="icon" /> Informations Article
                </span>
                <hr></hr>
              </legend>

              <div className="col-md-6">
                <label htmlFor="inputAnnée" className="form-label">
                  Année <span>*</span>
                </label>
                <select id="inputAnnée" className="form-select">
                  {years.map((year, index) => (
                    <option key={index} value={index.toString()}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputTitle" className="form-label">
                  Titre <span>*</span>
                </label>
                <input type="text" className="form-control " id="inputTtile" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputLien" className="form-label">
                  Lien DOI de l'article scientifique
                </label>
                <input type="text" className="form-control" id="inputLien" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputDate" className="form-label">
                  Date publication <span>*</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="inputDate"
                  required
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputFichier" className="form-label">
                  Fichier (PDF, Taille maximale: 1024 ko)
                </label>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="inputFichier"
                  />
                </div>
              </div>
              <legend>
                <span>
                  <FaUser className="icon" /> Auteur (s)
                </span>
                <hr></hr>
              </legend>
              <div className="detail">
                Sélectionnez le CIN à partir de la liste déroulantes pour auteur
                interne. <br /> Saisissez les autres champs s'il s'agit d'un
                auteur externe
              </div>
              {authors.map((author, index) => (
                <div key={author.id}>
                  <div>Auteur N° {index + 1}</div>
                  <div>
                    <label
                      htmlFor={`inputGender${author.id}`}
                      className="form-label"
                    >
                      Type auteur <span>*</span>
                      <br />
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`authorType${author.id}`}
                        id={`internal${author.id}`}
                        value="internal"
                        checked={author.authorType === "internal"}
                        onChange={() =>
                          handleChangeAuthorType(author.id, "internal")
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`internal${author.id}`}
                      >
                        Interne
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`authorType${author.id}`}
                        id={`external${author.id}`}
                        value="external"
                        checked={author.authorType === "external"}
                        onChange={() =>
                          handleChangeAuthorType(author.id, "external")
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`external${author.id}`}
                      >
                        Externe
                      </label>
                    </div>
                  </div>
                  {author.authorType === "internal" && (
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label
                          htmlFor={`inputCin${author.id}`}
                          className="form-label"
                        >
                          Cin <span>*</span>
                        </label>
                        <select
                          type="text"
                          id={`inputCin${author.id}`}
                          className="form-select"
                        ></select>
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor={`inputOrdre${author.id}`}
                          className="form-label"
                        >
                          Ordre <span>*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id={`inputOrdre${author.id}`}
                        />
                      </div>
                    </div>
                  )}
                  {author.authorType === "external" && (
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label
                          htmlFor={`inputName${author.id}`}
                          className="form-label"
                        >
                          Nom <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id={`inputName${author.id}`}
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor={`inputPre${author.id}`}
                          className="form-label"
                        >
                          Prénom <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id={`inputPre${author.id}`}
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor={`inputCinExt${author.id}`}
                          className="form-label"
                        >
                          Cin <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id={`inputCinExt${author.id}`}
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor={`inputId${author.id}`}
                          className="form-label"
                        >
                          Identifiant
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id={`inputId${author.id}`}
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor={`inputMail${author.id}`}
                          className="form-label"
                        >
                          E-mail
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id={`inputMail${author.id}`}
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor={`inputPays${author.id}`}
                          className="form-label"
                        >
                          Pays <span>*</span>
                        </label>
                        <CountryDropdown
                          id={`inputPays${author.id}`}
                          className="form-select"
                          value={author.country}
                          onChange={(val) =>
                            handleChangeCountry(author.id, val)
                          }
                        />
                      </div>
                      <div className="col-md-12">
                        <label
                          htmlFor={`inputOrdreExt${author.id}`}
                          className="form-label"
                        >
                          Ordre <span>*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id={`inputOrdreExt${author.id}`}
                        />
                      </div>
                    </div>
                  )}
                  <button
                    className=" btn btn-primary del"
                    type="button"
                    onClick={() => handleRemoveAuthor(author.id)}
                  >
                    Supprimer
                  </button>
                </div>
              ))}
              <button
                className="btn btn-primary add"
                type="button"
                onClick={handleAddAuthor}
              >
                + Ajouter un auteur
              </button>
              <legend>
                <span>
                  <FaBook className="icon" /> Informations journal
                </span>
                <hr></hr>
              </legend>
              <div className="col-12">
                <label htmlFor="inputJournal" className="form-label">
                  Titre du journal <span>*</span>
                </label>
                <input type="text" className="form-control" id="inputJournal" />
              </div>

              <div className="col-md-12">
                <label htmlFor="inputList" className="form-label">
                  Liste des journaux (Chercher et séléctionner un titre
                  existant)
                </label>
                <select
                  id="inputList"
                  className="form-select"
                  required
                ></select>
              </div>
              <div className="col-md-12">
                <label htmlFor="inputQuartile" className="form-label quartile">
                  Quartile du journal{" "}
                </label>
                <div className="detail">
                  0%----Q1----25----Q2----50----Q3----75----Q4----100%
                </div>
                <select id="inputQuartile" className="form-select" required>
                  {quartile.map((quartile, index) => (
                    <option key={index} value={index.toString()}>
                      {quartile}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-6">
                <label htmlFor="inputVolume" className="form-label">
                  Volume
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputVolume"
                  required
                />
              </div>
              <div className="col-6">
                <label htmlFor="inputEmail" className="form-label">
                  Facteur d'impact
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputIndexation" className="form-label">
                  Indexation <span>*</span>
                </label>
                <select id="inputIndexation" className="form-select" required>
                  {indexation.map((indexation, index) => (
                    <option key={index} value={index.toString()}>
                      {indexation}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputRevue" className="form-label">
                  Site de la revue
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputRevue"
                  required
                />
              </div>

              <div className="col-12">
                <Link
                  type="submit"
                  className="btn rounded-pill submit"
                  to="/ouvrages-scientifiques"
                  state={{ scroll: true }}
                >
                  Valider
                </Link>
                {/* <button
                  type="submit"
                  className="btn rounded-pill submit"
                  to="/ouvrages-scientifiques"
                  state={{ scroll: true }}
                >
                  Valider
                </button> */}
              </div>
            </form>
          </div>
          <div className="col-lg"></div>
        </div>
      </div>
    </>
  );
}

export default ArticlesScientifiques;
