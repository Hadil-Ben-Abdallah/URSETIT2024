import React, { useState, useEffect } from "react";
import "./NewProject.css";
import { years, category, typeProj } from "../../assets/data/fakeData";
import { useLocation } from "react-router-dom";
import axios from 'axios';

function NewProject() {


  const [values, setValues] = useState({
    annéeProj: '',
    codeProj: '',
    catégorieProj: '',
    typeProj: '',
    intituléProj: '',
    coordinateurProj: '',
    budgetProj: ''
  });
  

const handleChange = (event) => {
  setValues({...values, [event.target.name]:[event.target.value]})
}

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(values)
  axios.post('http://localhost:8081/new-project', values)
  .then(res => console.log("Successfully!"))
.catch(err => console.log(err));
}




  const location = useLocation();
  const shouldScrollToTop = location.state?.scroll;

  useEffect(() => {
    if (shouldScrollToTop) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [shouldScrollToTop]);
  



  return (
    <>
      <div className="features text-center pt-5 pb-5">
        <div className="container">
          <div className="main-title mt-5 mb-5 position-relative">
            <h2>Nouveau projet</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg"></div>
          <div className="col-lg-8">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="inputAnnée" className="form-label">
                  Année <span>*</span>
                </label>
                <select id="inputAnnée" className="form-select" name="annéeProj" 
                  // value={formData.anneeProj}
                  onChange={handleChange}
                  >
                    <option value="">Sélectionner une année</option>
                  {years.map((year, index) => (
                    <option key={index} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>
                {/* {errors.anneeProj && (
                  <span className="error-message">{errors.anneeProj}</span>
                )} */}
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCode" className="form-label">
                  Code <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="inputCode" name="codeProj"
                  // value={formData.codeProj}
                  onChange={handleChange}
                />
                {/* {errors.codeProj && (
                  <span className="error-message">{errors.codeProj}</span>
                )} */}
              </div>
              <div className="col-md-6">
                <label htmlFor="inputType" className="form-label">
                  Catégorie <span>*</span>
                </label>
                <select id="inputType" className="form-select" name="catégorieProj" 
                  // value={formData.categorieProj}
                  onChange={handleChange}
                  >
                <option value="">Sélectionner une catégorie</option>
                  {category.map((category, index) => (
                    <option key={index} value={category.toString()}>
                      {category}
                    </option>
                  ))}
                </select>
                {/* {errors.categorieProj && (
                  <span className="error-message">{errors.categorieProj}</span>
                )} */}
              </div>
              <div className="col-md-6">
                <label htmlFor="inputType" className="form-label">
                  Type
                </label>
                <select id="inputType" className="form-select" name="typeProj" 
                  // value={formData.typeProj}
                  onChange={handleChange}
                  >
                <option value="">Sélectionner un type</option>
                  {typeProj.map((typeProj, index) => (
                    <option key={index} value={typeProj.toString()}>
                      {typeProj}
                    </option>
                  ))}
                </select>
                {/* {errors.typeProj && (
                  <span className="error-message">{errors.typeProj}</span>
                )} */}
              </div>
              <div className="col-md-6">
                <label htmlFor="inputIntitulé" className="form-label">
                  Intitulé <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="inputIntitulé" name="intituléProj"
                  // value={formData.intituleProj}
                  onChange={handleChange}
                />
                {/* {errors.intituleProj && (
                  <span className="error-message">{errors.intituleProj}</span>
                )} */}
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCoordinateur" className="form-label">
                  Coordinateur du projet <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="inputCoordinateur" name="coordinateurProj"
                  // value={formData.coordinateurProj}
                  onChange={handleChange}
                />
                {/* {errors.coordinateurProj && (
                  <span className="error-message">{errors.coordinateurProj}</span>
                )} */}
              </div>
              <div className="col-md-12">
                <label htmlFor="inputBudget" className="form-label">
                  Part du budget <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="inputBudget" name="budgetProj"
                  // value={formData.budgetProj}
                  onChange={handleChange}
                />
                {/* {errors.budgetProj && (
                  <span className="error-message">{errors.budgetProj}</span>
                )} */}
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn rounded-pill submit"
                  to="/inscription"
                  state={{ scroll: true }}
                >
                  Valider
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg"></div>
        </div>
      </div>
    </>
  );
}

export default NewProject;





  // const [formData, setFormData] = useState({
  //   anneeProj: "",
  //   codeProj: "",
  //   categorieProj: "",
  //   typeProj: "",
  //   intituleProj: "",
  //   coordinateurProj: "",
  //   budgetProj: ""
  // });

// const [errors, setErrors] = useState({});

// const handleChange = (e) => {
//   const { id, value } = e.target;
//   setFormData({ ...formData, [id]: value });
//   setErrors({ ...errors, [id]: "" }); // Clear error message when input changes
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const newErrors = {};
//   Object.keys(formData).forEach((key) => {
//     if (!formData[key] && key !== "typeProj") { // Exclude "budget" from required fields check
//       newErrors[key] = "Ce champ est requis";
//     }
//   });
//   setErrors(newErrors);

//   // If there are no errors, you can proceed with form submission
//   if (Object.keys(newErrors).length === 0) {
//     // Your form submission logic goes here
//   }
// };