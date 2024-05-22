import React, {useEffect, useState} from "react";
import "./ProfileForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// function ProfileForm() {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8081/inscriptions')
//       .then((res) => {
//         if (Array.isArray(res.data.Data)) {
//           // Map the data to convert the university index to university name
//           // const mappedData = res.data.Data.map((user) => ({
//           //   ...user,
//           //   universiteInsc: getUniversityName(user.universiteInsc),
//           //   ministereInsc: getMinistryName(user.ministereInsc),
//           //   etablissementInsc: getEstablishmentName(user.etablissementInsc),
//           //   gradeInsc: getGradeName(user.gradeInsc),

//           // }));
//           setData(res.data.Data);
//         } else {
//           console.log('Response data is not an array:', res.data);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const columnMapping = {
//       'ministereInsc': 'Ministère / Organisme',
//     'universiteInsc': 'Université / Centre de recherche / EPS',
//     'etablissementInsc': 'Etablissement',
//     'cinInsc': 'Cin',
//     'numPassInsc': 'Num Passport (étrangé)',
//     'cnrpsInsc': 'CNRPS',
//     'nomInsc': 'Nom',
//     'prenomInsc': 'Prénom',
//     'emailInsc': 'Email',
//     'dateNaissanceInsc': 'Date de naissance',
//     'genreInsc': 'Genre',
//     'fonctionInsc':'Fonction administrative',
//     'gradeInsc': 'Grade',
//     'specialiteInsc': 'Spécialité',
//     'diplomeInsc': 'Diplome',
//     'dateDiplomeInsc': 'Date Du dernier diplome',
//     'indexInsc': 'H-index',
//     'identificationInsc': 'Identification ORCID',
//     'telFixeInsc': 'Tél Fixe',
//     'telMobileInsc': 'Tél Mobile',
//     'faxInsc': 'Fax',
//   };
  
//   return (
//     <>

// {/* <div className="card-body d-flex justify-content-center align-items-center">
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Column Name</th>
//             <th>Value</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data && data.map((user, index) => (
//             <React.Fragment key={index}>
//               {Object.keys(user).map((key) => (
//                 key !== 'photoInsc' && key !== 'created_at' && key !== 'updated_at' && (
//                   <tr key={key}>
//                     <td>{columnMapping[key] || key}</td>
//                     <td>{user[key]}</td>
//                   </tr>
//                 )
//               ))}
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
//     </div> */}
//     <div className="card-body">
//       <div className="table-responsive">
//         <table className="table table-borderless">
//           {/* <thead>
//             <tr>
//               <th>Column Name</th>
//               <th>Value</th>
//             </tr>
//           </thead> */}
//           <tbody>
//             {data && data.map((user, index) => (
//               <React.Fragment key={index}>
//                 {Object.keys(user).map((key) => (
//                   key !== 'photoInsc' && key !== 'created_at' && key !== 'updated_at' && (
//                     <tr key={key}>
//                       <td className="text-name-color">{columnMapping[key] || key}</td>
//                       <td className="text-value-color">{user[key]}</td>
//                     </tr>
                    
//                   )
//                 ))}
//                 <Link className='btn mx-2 btn-success edit' to={`/edit-inscription/${user.cinInsc}`}>Editer</Link>
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </>
//   );
// }

// export default ProfileForm;


















// function ProfileForm() {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [editingData, setEditingData] = useState({});
//   const [editedData, setEditedData] = useState({});

//   useEffect(() => {
//     axios.get('http://localhost:8081/inscriptions')
//       .then((res) => {
//         if (Array.isArray(res.data.Data)) {
//           setData(res.data.Data);
//         } else {
//           console.log('Response data is not an array:', res.data);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const columnMapping = {
//     'ministereInsc': 'Ministère / Organisme',
//     'universiteInsc': 'Université / Centre de recherche / EPS',
//     'etablissementInsc': 'Etablissement',
//     'cinInsc': 'Cin',
//     'numPassInsc': 'Num Passport (étrangé)',
//     'cnrpsInsc': 'CNRPS',
//     'nomInsc': 'Nom',
//     'prenomInsc': 'Prénom',
//     'emailInsc': 'Email',
//     'dateNaissanceInsc': 'Date de naissance',
//     'genreInsc': 'Genre',
//     'fonctionInsc':'Fonction administrative',
//     'gradeInsc': 'Grade',
//     'specialiteInsc': 'Spécialité',
//     'diplomeInsc': 'Diplome',
//     'dateDiplomeInsc': 'Date Du dernier diplome',
//     'indexInsc': 'H-index',
//     'identificationInsc': 'Identification ORCID',
//     'telFixeInsc': 'Tél Fixe',
//     'telMobileInsc': 'Tél Mobile',
//     'faxInsc': 'Fax',
//   };

//   const handleEdit = (user) => {
//     console.log("Editing user with CIN:", user.cinInsc);
//     setEditingData(user);
//     setEditedData(user); // Initialize edited data with current user data
//   };
  

//   const handleChange = (e, key) => {
//     setEditedData({
//       ...editedData,
//       [key]: e.target.value,
//     });
//   };

//   const handleSend = () => {
//     axios.put(`http://localhost:8081/update/${editingData.cinInsc}`, editedData)
//       .then(() => {
//         console.log('Successfully updated!');
//         // Update the data displayed in your table or reload the data
//         axios.get('http://localhost:8081/inscriptions')
//           .then((res) => {
//             if (Array.isArray(res.data.Data)) {
//               setData(res.data.Data);
//             } else {
//               console.log('Response data is not an array:', res.data);
//             }
//           })
//           .catch((err) => console.log(err));
//         setEditingData({}); // Clear editing data after successful update
//       })
//       .catch((err) => console.log(err));
//   };

















  // const handleSend = () => {
  //   axios.put(`http://localhost:8081/update/${editingData.cinInsc}`, editedData)
  //     .then(() => {
  //       console.log('Successfully updated!');
  //       // Fetch the updated data from the server
  //       axios.get('http://localhost:8081/inscriptions')
  //         .then((res) => {
  //           if (Array.isArray(res.data.Data)) {
  //             setData(res.data.Data);
  //           } else {
  //             console.log('Response data is not an array:', res.data);
  //           }
  //         })
  //         .catch((err) => console.log(err));
  //       navigate('/edit-success');
  //     })
  //     .catch((err) => console.log(err));
  // };
  
  

//   return (
//     <>
//       <div className="card-body">
//         <div className="table-responsive">
//           <table className="table table-borderless">
//             <tbody>
//               {data && data.map((user, index) => (
//                 <React.Fragment key={index}>
//                   {Object.keys(user).map((key) => (
//                     key !== 'photoInsc' && key !== 'created_at' && key !== 'updated_at' && (
//                       <tr key={key}>
//                         <td className="text-name-color">{columnMapping[key] || key}</td>
//                         <td className="text-value-color">{user[key]}</td>
//                       </tr>
//                     )
//                   ))}
//                   <button
//                     className='btn mx-2 btn-success edit'
//                     onClick={() => handleEdit(user)}
//                   >
//                     Editer
//                   </button>
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {Object.keys(editingData).length > 0 && (
//         <div className="card-body">
//           <form className="row g-3">
//             {Object.keys(editingData).map((key) => (
//               key !== 'photoInsc' && key !== 'created_at' && key !== 'updated_at' && (
//                 <div className="col-md-6" key={key}>
//                   <label htmlFor={`input-${key}`} className="form-label">
//                     {columnMapping[key] || key}
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id={`input-${key}`}
//                     value={editedData[key] || ''}
//                     onChange={(e) => handleChange(e, key)}
//                   />
//                 </div>
//               )
//             ))}
//             <div className="col-12">
//               <button
//                 type="button"
//                 className="btn mx-2 btn-success edit"
//                 onClick={handleSend}
//               >
//                 Valider
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </>
//   );
// }

// export default ProfileForm;


















import {
  establishmentOptions,
  gradeOptions,
  ministries,
  universities,
} from "../../assets/data/fakeData";

function ProfileForm() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [editingData, setEditingData] = useState({});
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8081/inscriptions')
      .then((res) => {
        if (Array.isArray(res.data.Data)) {
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
    'numPassInsc': 'Num Passport (étrangé)',
    'cnrpsInsc': 'CNRPS',
    'nomInsc': 'Nom',
    'prenomInsc': 'Prénom',
    'emailInsc': 'Email',
    'dateNaissanceInsc': 'Date de naissance',
    'genreInsc': 'Genre',
    'fonctionInsc': 'Fonction administrative',
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

  const handleEdit = (user) => {
    console.log("Editing user with CIN:", user.cinInsc);
    setEditingData(user);
    setEditedData(user); // Initialize edited data with current user data
  };

  const handleChange = (e, key) => {
    setEditedData({
      ...editedData,
      [key]: e.target.value,
    });
  };

  const handleSend = () => {
    axios.put(`http://localhost:8081/update/${editingData.cinInsc}`, editedData)
      .then(() => {
        console.log('Successfully updated!');
        // Update the data displayed in your table or reload the data
        axios.get('http://localhost:8081/inscriptions')
          .then((res) => {
            if (Array.isArray(res.data.Data)) {
              setData(res.data.Data);
            } else {
              console.log('Response data is not an array:', res.data);
            }
          })
          .catch((err) => console.log(err));
        setEditingData({}); // Clear editing data after successful update
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-borderless">
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
                  <button
                    className='btn mx-2 btn-success dash'
                    onClick={() => handleEdit(user)}
                  >
                    Editer
                  </button>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {Object.keys(editingData).length > 0 && (
        <div className="card-body">
          <form className="row g-3">
            <div className="col-md-12">
              <label htmlFor="input-ministereInsc" className="form-label">
                {columnMapping['ministereInsc']}
              </label>
              <select
                className="form-control"
                id="input-ministereInsc"
                value={editedData['ministereInsc'] || ''}
                onChange={(e) => handleChange(e, 'ministereInsc')}
              >
                <option value="">Sélectionner une ministère / organisme</option>
                  {ministries.map((ministry, index) => (
                    <option key={index} value={ministry.toString()}>
                      {ministry}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-md-12">
              <label htmlFor="input-universiteInsc" className="form-label">
                {columnMapping['universiteInsc']}
              </label>
              <select
                className="form-control"
                id="input-universiteInsc"
                value={editedData['universiteInsc'] || ''}
                onChange={(e) => handleChange(e, 'universiteInsc')}
              >
                <option value="">Sélectionner une université</option>
                  {universities.map((university, index) => (
                    <option key={index} value={university.toString()}>
                      {university}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-md-12">
              <label htmlFor="input-etablissementInsc" className="form-label">
                {columnMapping['etablissementInsc']}
              </label>
              <select
                className="form-control"
                id="input-etablissementInsc"
                value={editedData['etablissementInsc'] || ''}
                onChange={(e) => handleChange(e, 'etablissementInsc')}
              >
                <option value="">Sélectionner un établissement</option>
                  {establishmentOptions.map((establishmentOptions, index) => (
                    <option key={index} value={establishmentOptions.toString()}>
                      {establishmentOptions}
                    </option>
                  ))}
              </select>
            </div>
            {Object.keys(editingData).map((key) => (
              key !== 'ministereInsc' &&
              key !== 'universiteInsc' &&
              key !== 'etablissementInsc' &&
              key !== 'cinInsc' &&
              key !== 'photoInsc' &&
              key !== 'created_at' &&
              key !== 'updated_at' && (
                <React.Fragment key={key}>
                  {key === 'gradeInsc' ? (
                    <div className="col-md-6" key={key}>
                      <label htmlFor={`input-${key}`} className="form-label">
                        {columnMapping[key] || key}
                      </label>
                      <select
                        className="form-control"
                        id={`input-${key}`}
                        value={editedData[key] || ''}
                        onChange={(e) => handleChange(e, key)}
                      >
                        <option value="">Sélectionner un grade</option>
                  {gradeOptions.map((gradeOptions, index) => (
                    <option key={index} value={gradeOptions.toString()}>
                      {gradeOptions}
                    </option>
                  ))}
                      </select>
                    </div>
                  ) : (
                    <div className="col-md-6" key={key}>
                      <label htmlFor={`input-${key}`} className="form-label">
                        {columnMapping[key] || key}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id={`input-${key}`}
                        value={editedData[key] || ''}
                        onChange={(e) => handleChange(e, key)}
                      />
                    </div>
                  )}
                </React.Fragment>
              )
            ))}
            <div className="col-12">
              <button
                type="button"
                className="btn mx-2 btn-success dash"
                onClick={handleSend}
              >
                Valider
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default ProfileForm;

