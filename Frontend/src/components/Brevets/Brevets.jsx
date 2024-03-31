import React from "react";
import "./Brevets.css";
import { Link } from "react-router-dom";
import { years } from "../../assets/data/fakeData";
import { type } from "../../assets/data/fakeData";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Brevets() {
  const location = useLocation();
  const shouldScrollToTop = location.state?.scroll; // Check for scroll prop

  useEffect(() => {
    if (shouldScrollToTop) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [shouldScrollToTop]);

    //   const [formData, setFormData] = useState({
  //   AnneeBrev: "",
  //   referenceBrev: "",
  //   fileBrev: "",
  //   dateCreationBrev: "",
  //   typeBrev: "",
  // });


  return (
    <>
      <div className="features text-center pt-5 pb-5">
        <div className="container">
          <div className="main-title mt-5 mb-5 position-relative">
            <h2>Création brevet</h2>
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
              <div className="col-md-12">
                <label htmlFor="inputReference" className="form-label">
                  Référence <span>*</span>
                </label>
                <textarea
                  type="text"
                  className="form-control "
                  id="inputReference"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputPDF" className="form-label">
                  Fichier (PDF, Taille maximale: 1024 ko)
                </label>
                <div className="input-group mb-3">
                  <input type="file" className="form-control" id="inputPDF" />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputDate" className="form-label">
                  Date Création <span>*</span>
                </label>
                <input type="date" className="form-control" id="inputDate" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputIndexation" className="form-label">
                  Indexation <span>*</span>
                </label>
                <select id="inputIndexation" className="form-select" required>
                  {type.map((type, index) => (
                    <option key={index} value={index.toString()}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12">
                <Link
                  type="submit"
                  className="btn rounded-pill submit"
                  to="/obtentions-vegetales"
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

export default Brevets;
