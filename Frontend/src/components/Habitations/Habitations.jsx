import React from "react";
import "./Habitations.css";
import { Link } from "react-router-dom";
import { years } from "../../assets/data/fakeData";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Habitations() {
  const location = useLocation();
  const shouldScrollToTop = location.state?.scroll; // Check for scroll prop

  useEffect(() => {
    if (shouldScrollToTop) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [shouldScrollToTop]);

  //   const [formData, setFormData] = useState({
  //   AnneeHabit: "",
  //   titreHabit: "",
  //   nomHabit: "",
  //   fileHabit: "",
  //   encadrantHabit: "",
  //   dateSoutenanceHabit: "",
  // });

  return (
    <>
      <div className="features text-center pt-5 pb-5">
        <div className="container">
          <div className="main-title mt-5 mb-5 position-relative">
            <h2>Création habitation</h2>
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
              <div className="col-md-6">
                <label htmlFor="inputTitle" className="form-label">
                  Titre <span>*</span>
                </label>
                <input type="text" className="form-control " id="inputTtile" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputNHahitation" className="form-label">
                  Nom et prénom titulaire habitation <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="inputNHahitation"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputPFD" className="form-label">
                  Fichier (PDF, Taille maximale: 20 MO) <span>*</span>
                </label>
                <div className="detail">
                  Version réduite: page de garde plus introduction plus table
                  des matières plus conclusion générale
                </div>
                <div className="input-group mb-3">
                  <input type="file" className="form-control" id="inputPDF" />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEncadrant" className="form-label">
                  Encadrant <span>*</span>
                </label>
                <select id="inputEncadrant" className="form-select"></select>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputDate" className="form-label">
                  Date Création <span>*</span>
                </label>
                <input type="date" className="form-control" id="inputDate" />
              </div>
              <div className="col-12">
                <Link
                  type="submit"
                  className="btn rounded-pill submit"
                  to="/these-doctorat"
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

export default Habitations;
