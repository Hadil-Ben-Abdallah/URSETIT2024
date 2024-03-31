import React from "react";
import "./MasteresRecherche.css";
import { Link } from "react-router-dom";
import { years } from "../../assets/data/fakeData";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ThesesDoctorat() {
  const location = useLocation();
  const shouldScrollToTop = location.state?.scroll; // Check for scroll prop

  useEffect(() => {
    if (shouldScrollToTop) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [shouldScrollToTop]);

  return (
    <>
      {/* <Steps /> */}
      <div className="features text-center pt-5 pb-5">
        <div className="container">
          <div className="main-title mt-5 mb-5 position-relative">
            <h2>Création mastère de rechreche</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg"></div>
          <div className="col-lg-8">
            <form className="row g-3">
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
                <label htmlFor="inputEtudiant" className="form-label">
                  Nom et prénom étudiant <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="inputEtudiant"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputFirstInsc" className="form-label">
                  Année de la première inscription
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="inputFirstInsc"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputPFD" className="form-label">
                  Mémoire de thèse soutenu (PDF contient la page de garde,
                  Taille maximale: 1 MO) <span>*</span>
                </label>
                <div className="input-group mb-3">
                  <input type="file" className="form-control" id="inputPDF" />
                </div>
              </div>
              <div className="col-md-12">
                <label htmlFor="inputSujet" className="form-label">
                  Sujet <span>*</span>
                </label>
                <textarea
                  type="text"
                  className="form-control "
                  id="inputSujet"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputEncadrant" className="form-label">
                  Encadrant <span>*</span>
                </label>
                <select id="inputEncadrant" className="form-select"></select>
              </div>
              <div className="col-12">
                <Link
                  type="submit"
                  className="btn rounded-pill submit"
                  to="/manifestations-scientifiques"
                  state={{ scroll: true }}
                >
                  Valider
                </Link>
              </div>
            </form>
          </div>
          <div className="col-lg"></div>
        </div>
      </div>
    </>
  );
}

export default ThesesDoctorat;
