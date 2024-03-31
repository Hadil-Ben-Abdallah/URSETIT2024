import React from "react";
import "./ManifestationsScientifiques.css";
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
            <h2>Création manifestation scientifique</h2>
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
                <label htmlFor="inputTitle" className="form-label">
                  Titre <span>*</span>
                </label>
                <input type="text" className="form-control " id="inputTitle" />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputOrganisateurs" className="form-label">
                  Organisateurs <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="inputOrganisateurs"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputDate" className="form-label">
                  Date Organisation <span>*</span>
                </label>
                <input type="date" className="form-control " id="inputDate" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputLieu" className="form-label">
                  Lieu <span>*</span>
                </label>
                <input type="text" className="form-control " id="inputLieu" />
              </div>
              <div>
                <label htmlFor="inputCtutelle" className="form-label">
                  Type <span>*</span>
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    National
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    International
                  </label>
                </div>
              </div>
              <div className="col-md-12">
                <label htmlFor="inputWeb" className="form-label">
                  Site web
                </label>
                <input type="text" className="form-control " id="inputWeb" />
              </div>
              <div className="col-12">
                <Link
                  type="submit"
                  className="btn rounded-pill submit"
                  to="/conventions"
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
