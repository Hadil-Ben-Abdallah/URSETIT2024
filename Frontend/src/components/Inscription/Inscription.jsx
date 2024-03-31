import React, {useState} from "react";
import "./Inscription.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  establishmentOptions,
  gradeOptions,
  ministries,
  universities,
} from "../../assets/data/fakeData";

function Inscription() {

  // const navigate = useNavigate();

  // const [formData, setFormData] = useState({
  //   ministereInsc: "",
  //   universiteInsc: "",
  //   etablissementInsc: "",
  //   cinInsc: "",
  //   numPassInsc: "",
  //   cnrpsInsc: "",
  //   nomInsc: "",
  //   prenomInsc: "",
  //   emailInsc: "",
  //   dateNaissanceInsc: "",
  //   genreInsc: "",
  //   photoInsc: "",
  //   fonctionInsc: "",
  //   gradeInsc: "",
  //   specialiteInsc: "",
  //   diplomeInsc: "",
  //   dateDiplomeInsc: "",
  //   indexInsc: "",
  //   identificationInsc: "",
  //   telFixeInsc: "",
  //   telMobileInsc: "",
  //   faxInsc: "",
  // });

  // const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormData({ ...formData, [id]: value });
  //   setErrors({ ...errors, [id]: "" }); 
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newErrors = {};
  //   Object.keys(formData).forEach((key) => {
  //     if (!formData[key] && key !== "cinInsc" 
  //                         && key !== "numPassInsc" 
  //                         && key !== "cnrpsInsc" 
  //                         && key !== "photoInsc" 
  //                         && key !== "fonctionInsc" 
  //                         && key !== "specialiteInsc"
  //                         && key !== "diplomeInsc"
  //                         && key !== "indexInsc"
  //                         && key !== "identificationInsc"
  //                         && key !== "telFixeInsc"
  //                         && key !== "telMobileInsc"
  //                         && key !== "faxInsc") { 
  //       newErrors[key] = "Ce champ est requis";
  //     }
  //   });
  //   setErrors(newErrors);

  //       // If there are no errors, you can proceed with form submission
  //   if (Object.keys(newErrors).length === 0) {
  //     // Your form submission logic goes here



  //     navigate("/articles-scientifiques", { state: { scroll: true } });


      
  //   }
  // };


  return (
    <>
      <div className="features text-center pt-5 pb-5">
        <div className="container">
          <div className="main-title mt-5 mb-5 position-relative">
            <h2>Inscription</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg"></div>
          <div className="col-lg-8">
            <form className="row g-3" /*onSubmit={handleSubmit}*/> 
              <div className="col-12">
                <label htmlFor="inputOrganism" className="form-label">
                  Ministère / Organisme <span>*</span>
                </label>
                <select id="inputOrganism" className="form-select"
                // value={formData.ministereInsc}
                // onChange={handleChange}
                >
                  <option value="">Sélectionner une ministère / organisme</option>
                  {ministries.map((ministry, index) => (
                    <option key={index} value={index.toString()}>
                      {ministry}
                    </option>
                  ))}
                </select>
                {/* {errors.ministereInsc && (
                  <span className="error-message">{errors.ministereInsc}</span>
                )} */}
              </div>
              <div className="col-12">
                <label htmlFor="inputUniversity" className="form-label">
                  Université / Centre de recherche / EPS <span>*</span>
                </label>
                <select id="inputUniversity" className="form-select"
                // value={formData.universiteInsc}
                // onChange={handleChange}
                >
                  <option value="">Sélectionner une université</option>
                  {universities.map((university, index) => (
                    <option key={index} value={index.toString()}>
                      {university}
                    </option>
                  ))}
                </select>
                {/* {errors.universiteInsc && (
                  <span className="error-message">{errors.universiteInsc}</span>
                )} */}
              </div>
              <div className="col-12">
                <label htmlFor="inputEstablishment" className="form-label">
                  Etablissement <span>*</span>
                </label>
                <select id="inputEstablishment" className="form-select"
                // value={formData.etablissementInsc}
                // onChange={handleChange}
                >
                  <option value="">Sélectionner un établissement</option>
                  {establishmentOptions.map((establishmentOptions, index) => (
                    <option key={index} value={index.toString()}>
                      {establishmentOptions}
                    </option>
                  ))}
                </select>
                {/* {errors.etablissementInsc && (
                  <span className="error-message">{errors.etablissementInsc}</span>
                )} */}
              </div>
              <div className="col-md-6">
                <label htmlFor="inputName" className="form-label">
                  Nom <span>*</span>
                </label>
                <input type="text" className="form-control " id="inputName" 
                // value={formData.nomInsc}
                // onChange={handleChange}
                />
                {/* {errors.nomInsc && (
                  <span className="error-message">{errors.nomInsc}</span>
                )} */}
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPre" className="form-label">
                  Prénom <span>*</span>
                </label>
                <input type="text" className="form-control " id="inputPre" 
                // value={formData.prenomInsc}
                // onChange={handleChange}
                />
                {/* {errors.prenomInsc && (
                  <span className="error-message">{errors.prenomInsc}</span>
                )} */}
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCin" className="form-label">
                  Cin
                </label>
                <input type="text" className="form-control" id="inputCin" 
                // value={formData.cinInsc}
                // onChange={handleChange}
                />
                {/* {errors.cinInsc && (
                  <span className="error-message">{errors.cinInsc}</span>
                )} */}
              </div>
              <div className="col-md-6">
                <label htmlFor="inputNum" className="form-label">
                  Num Passport (étrangé)
                </label>
                <input type="password" className="form-control" id="inputNum" 
                // value={formData.numPassInsc}
                // onChange={handleChange}
                />
                {/* {errors.numPassInsc && (
                  <span className="error-message">{errors.numPassInsc}</span>
                )} */}
              </div>
              <div className="col-12">
                <label htmlFor="inputCNRPS" className="form-label">
                  CNRPS
                </label>
                <input type="text" className="form-control" id="inputCNRPS" 
                // value={formData.cnrpsInsc}
                // onChange={handleChange}
                />
                {/* {errors.cnrpsInsc && (
                  <span className="error-message">{errors.cnrpsInsc}</span>
                )} */}
              </div>
              <div className="col-12">
                <label htmlFor="inputEmail" className="form-label">
                  Email <span>*</span>
                </label>
                <input type="email" className="form-control" id="inputEmail" 
                // value={formData.emailInsc}
                // onChange={handleChange}
                />
                {/* {errors.emailInsc && (
                  <span className="error-message">{errors.emailInsc}</span>
                )} */}
              </div>
              <div className="col-12">
                <label htmlFor="inputDate1" className="form-label">
                  Date de naissance <span>*</span>
                </label>
                <input type="date" className="form-control" id="inputDate1" 
                // value={formData.dateNaissanceInsc}
                // onChange={handleChange}
                />
                {/* {errors.dateNaissanceInsc && (
                  <span className="error-message">{errors.dateNaissanceInsc}</span>
                )} */}
              </div>
              <div>
                <label htmlFor="inputGender" className="form-label">
                  Genre <span>*</span>
                  <br/>
                  {/* {errors.genreInsc && (
                  <span className="error-message">{errors.genreInsc}</span>
                )} */}
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    // value={formData.genreInsc}
                    // onChange={handleChange}
                  />
                  
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Féminin
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    // value={formData.genreInsc}
                    // onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Masculin
                  </label>
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="inputPhoto" className="form-label">
                  Photo (Image JPG/PNG, Taille maximale: 1024 ko)
                </label>
                <div className="input-group mb-3">
                  <input type="file" className="form-control" id="inputPhoto" 
                  // value={formData.photoInsc}
                  // onChange={handleChange}
                  />
                  {/* {errors.photoInsc && (
                  <span className="error-message">{errors.photoInsc}</span>
                )} */}
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="inputFunction" className="form-label">
                  Fonction administrative
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputFunction"
                  // value={formData.fonctionInsc}
                  // onChange={handleChange}
                />
                {/* {errors.fonctionInsc && (
                  <span className="error-message">{errors.fonctionInsc}</span>
                )} */}
              </div>
              <div className="col-12">
                <label htmlFor="inputGrade" className="form-label">
                  Grade <span>*</span>
                </label>
                <select id="inputGrade" className="form-select"
                // value={formData.gradeInsc}
                // onChange={handleChange}
                >
                  <option value="">Sélectionner un grade</option>
                  {gradeOptions.map((gradeOptions, index) => (
                    <option key={index} value={index.toString()}>
                      {gradeOptions}
                    </option>
                  ))}
                </select>
                {/* {errors.gradeInsc && (
                  <span className="error-message">{errors.gradeInsc}</span>
                )} */}
              </div>
              <div className="col-8">
                <label htmlFor="inputORCID" className="form-label">
                  Identification ORCID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputORCID"
                  placeholder="Format: xxxx-xxxx-xxxx-xxxx"
                  // value={formData.identificationInsc}
                // onChange={handleChange}
                />
                {/* {errors.identificationInsc && (
                  <span className="error-message">{errors.identificationInsc}</span>
                )} */}
              </div>
              <div className="col-4">
                <label htmlFor="inputIndex" className="form-label">
                  H-index
                </label>
                <input type="number" className="form-control" id="inputIndex" 
                // value={formData.indexInsc}
                // onChange={handleChange}
                />
                {/* {errors.indexInsc && (
                  <span className="error-message">{errors.indexInsc}</span>
                )} */}
              </div>
              <div className="col-6">
                <label htmlFor="inputSpeciality" className="form-label">
                  Spécialité
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputSpeciality"
                  // value={formData.specialiteInsc}
                // onChange={handleChange}
                />
                {/* {errors.specialiteInsc && (
                  <span className="error-message">{errors.specialiteInsc}</span>
                )} */}
              </div>
              <div className="col-6">
                <label htmlFor="inputDiploma" className="form-label">
                  Diplome
                </label>
                <input type="text" className="form-control" id="inputDiploma" 
                // value={formData.diplomeInsc}
                // onChange={handleChange}
                />
                {/* {errors.diplomeInsc && (
                  <span className="error-message">{errors.diplomeInsc}</span>
                )} */}
              </div>
              <div className="col-12">
                <label htmlFor="inputDate2" className="form-label">
                  Date Du dernier diplome <span>*</span>
                </label>
                <input type="date" className="form-control" id="inputDate2" 
                // value={formData.dateDiplomeInsc}
                // onChange={handleChange}
                />
                {/* {errors.dateDiplomeInsc && (
                  <span className="error-message">{errors.dateDiplomeInsc}</span>
                )} */}
              </div>
              <div className="col-12">
                <label htmlFor="inputTel" className="form-label">
                  Tél Fixe
                </label>
                <input type="text" className="form-control" id="inputTel" 
                // value={formData.telFixeInsc}
                // onChange={handleChange}
                />
                {/* {errors.telFixeInsc && (
                  <span className="error-message">{errors.telFixeInsc}</span>
                )} */}
              </div>
              <div className="col-12">
                <label htmlFor="inputMobile" className="form-label">
                  Tél Mobile
                </label>
                <input type="text" className="form-control" id="inputMobile" 
                // value={formData.telMobileInsc}
                // onChange={handleChange}
                />
                {/* {errors.telMobileInsc && (
                  <span className="error-message">{errors.telMobileInsc}</span>
                )} */}
              </div>
              <div className="col-12">
                <label htmlFor="inputFax" className="form-label">
                  Fax
                </label>
                <input type="text" className="form-control" id="inputFax" 
                // value={formData.faxInsc}
                // onChange={handleChange}
                />
                {/* {errors.faxInsc && (
                  <span className="error-message">{errors.faxInsc}</span>
                )} */}
              </div>
              <div className="col-12">
                {/* <button
                  type="submit"
                  className="btn rounded-pill submit"
                  // onClick={handleSubmit}
                  state={{ scroll: true }}
                >
                  Valider
                </button> */}
                <Link
                  type="submit"
                  className="btn rounded-pill submit"
                  to="/articles-scientifiques"
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

export default Inscription;



