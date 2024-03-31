import React from "react";
import "./Conventions.css";
import { Link } from "react-router-dom";
import { years, typeConv } from "../../assets/data/fakeData";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Conventions() {
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
            <h2>Création convention</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg"></div>
          <div className="col-lg-8">
            <form className="row g-3">
              <div className="col-md-12">
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
              <div>
                <div className="form-check">
                  National
                  <input className="form-check-input" type="checkbox" />
                </div>
                <div className="form-check">
                  International
                  <input className="form-check-input" type="checkbox" />
                </div>
              </div>
              <div className="col-md-12">
                <label htmlFor="inputPartenaire" className="form-label">
                  Partenaire <span>*</span>
                </label>
                <textarea
                  type="text"
                  className="form-control "
                  id="inputPartenaire"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputType" className="form-label">
                  Type
                </label>
                <select id="inputType" className="form-select">
                  {typeConv.map((typeConv, index) => (
                    <option key={index} value={index.toString()}>
                      {typeConv}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-12">
                <label htmlFor="inputRésumé" className="form-label">
                  Résumé
                </label>
                <textarea
                  type="text"
                  className="form-control "
                  id="inputRésumé"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputImpactFin" className="form-label">
                  Impact financier
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="inputImpactFin"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputOImpactNat" className="form-label">
                  Impact en nature
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="inputOImpactNat"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputDateCreate" className="form-label">
                  Date création <span>*</span>
                </label>
                <input
                  type="date"
                  className="form-control "
                  id="inputDateCreate"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputPFD" className="form-label">
                  Fichier (PDF, Taille maximale: 1024 MO) <span>*</span>
                </label>
                <div className="input-group mb-3">
                  <input type="file" className="form-control" id="inputPDF" />
                </div>
              </div>
              <div className="col-12">
                <Link
                  type="submit"
                  className="btn rounded-pill submit"
                  to="/new-project"
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

export default Conventions;
