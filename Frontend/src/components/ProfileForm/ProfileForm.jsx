import React, {useEffect, useState} from "react";
import "./ProfileForm.css";
import { Link } from "react-router-dom";
import axios from "axios";

function ProfileForm() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/inscriptions')
      .then((res) => {
        if (Array.isArray(res.data.Data)) {
          // Map the data to convert the university index to university name
          // const mappedData = res.data.Data.map((user) => ({
          //   ...user,
          //   universiteInsc: getUniversityName(user.universiteInsc),
          //   ministereInsc: getMinistryName(user.ministereInsc),
          //   etablissementInsc: getEstablishmentName(user.etablissementInsc),
          //   gradeInsc: getGradeName(user.gradeInsc),

          // }));
          setData(res.data.Data);
        } else {
          console.log('Response data is not an array:', res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const columnMapping = {
      'ministereInsc': 'Ministère / Organisme',
    'universiteInsc': 'Université / Centre de recherche / EPS',
    'etablissementInsc': 'Etablissement',
    'cinInsc': 'Cin',
    'numPassInsc': 'Num Passport (étrangé)',
    'cnrpsInsc': 'CNRPS',
    'nomInsc': 'Nom',
    'prenomInsc': 'Prénom',
    'emailInsc': 'Email',
    'dateNaissanceInsc': 'Date de naissance',
    'genreInsc': 'Genre',
    'fonctionInsc':'Fonction administrative',
    'gradeInsc': 'Grade',
    'specialiteInsc': 'Spécialité',
    'diplomeInsc': 'Diplome',
    'dateDiplomeInsc': 'Date Du dernier diplome',
    'indexInsc': 'H-index',
    'identificationInsc': 'Identification ORCID',
    'telFixeInsc': 'Tél Fixe',
    'telMobileInsc': 'Tél Mobile',
    'faxInsc': 'Fax',
  };
  
  return (
    <>

{/* <div className="card-body d-flex justify-content-center align-items-center">
      <table className="table">
        <thead>
          <tr>
            <th>Column Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((user, index) => (
            <React.Fragment key={index}>
              {Object.keys(user).map((key) => (
                key !== 'photoInsc' && key !== 'created_at' && key !== 'updated_at' && (
                  <tr key={key}>
                    <td>{columnMapping[key] || key}</td>
                    <td>{user[key]}</td>
                  </tr>
                )
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div> */}
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-borderless">
          {/* <thead>
            <tr>
              <th>Column Name</th>
              <th>Value</th>
            </tr>
          </thead> */}
          <tbody>
            {data && data.map((user, index) => (
              <React.Fragment key={index}>
                {Object.keys(user).map((key) => (
                  key !== 'photoInsc' && key !== 'created_at' && key !== 'updated_at' && (
                    <tr key={key}>
                      <td className="text-name-color">{columnMapping[key] || key}</td>
                      <td className="text-value-color">{user[key]}</td>
                    </tr>
                    
                  )
                ))}
                <Link className='btn mx-2 btn-success edit' to={`/edit-inscription/${user.cinInsc}`}>Editer</Link>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default ProfileForm;