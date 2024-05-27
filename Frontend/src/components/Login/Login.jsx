// import React, { useState } from 'react'
// import './Login.css'
// import { Link } from 'react-router-dom'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// function Login () {
//     const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
//   const [passwordValue, setPasswordValue] = React.useState('');

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };
//   return (
//     <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
//       <div className='login'>
//         <h2 className='mb-3 member'>Espace membre</h2>
//         <form className='needs-validation'>
//           <div className='form-group was-validated mb-2'>
//             <label htmlFor="email" className='form-label'>Adresse email</label>
//             <input type="email" className='form-control' 
//             // required
//             />
//             <div className='invalid-feedback'>
//               Entrez votre email
//             </div>
//           </div>
//           {/* <div className='form-group was-validated mb-2'>
//             <label htmlFor="password" className='form-label'>Mot de passe</label>
//             <input type="password" className='form-control' required/>
//             <div className='invalid-feedback'>
//               Entrez votre mot de passe
//             </div>
            
//           </div> */}
//           <div className='form-group was-validated mb-2 password-field'>
//             <label htmlFor="password" className='form-label'>Mot de passe</label>
//             <input
//               type={isPasswordVisible ? 'text' : 'password'}
//               className='form-control'
//               // required
//               onChange={(e) => setPasswordValue(e.target.value)}
//             />
//             <div className='invalid-feedback'>
//               Entrez votre mot de passe
//             </div>
//             {passwordValue && ( // Show icon only if password has value
//               <span className='eye-icon' onClick={togglePasswordVisibility}>
//                 {isPasswordVisible ? (
//                   <FontAwesomeIcon icon="fa-regular fa-eye-slash" />
//                 ) : (
//                   <FontAwesomeIcon icon="fa-regular fa-eye" />
//                 )}
//               </span>
//             )}
//           </div>
//           <div className='form-group mb-2 form-check'>
//             <input type="checkbox" className='form-check-input'/>
//             <label htmlFor="check" className='form-check-label'>souviens-toi de moi</label>
//           </div>
          
//           <Link to="/home">
//           <button type='submit' className='btn btn-success w-100 mt-2 log'>CONNEXION</button>
//       </Link>
//           {/* <button type='submit' className='btn block w-100 insc'>Inscription</button> */}
//           <Link to="/inscription" className='btn  w-100 insc'>Inscription</Link>
//         </form>
//         </div>
//     </div>
    
//   )
// }

// export default Login




// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
// import './Login.css'

// function Login() {
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [passwordValue, setPasswordValue] = useState('');
//   const [emailValue, setEmailValue] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let valid = true;

//     if (!emailValue) {
//       setEmailError('Entrez votre email');
//       valid = false;
//     } else {
//       setEmailError('');
//     }

//     if (!passwordValue) {
//       setPasswordError('Entrez votre mot de passe');
//       valid = false;
//     } else {
//       setPasswordError('');
//     }

//     if (valid) {
//       // Submit the form
//       console.log('Form submitted');
//     }
//   };

//   return (
//     <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
//       <div className='login'>
//         <h2 className='mb-3 member'>Espace membre</h2>
//         <form className='needs-validation' onSubmit={handleSubmit} noValidate>
//           <div className={`form-group mb-2 ${emailError ? 'was-validated' : ''}`}>
//             <label htmlFor="email" className='form-label'>Adresse email</label>
//             <input
//               type="email"
//               className='form-control'
//               value={emailValue}
//               onChange={(e) => setEmailValue(e.target.value)}
//             />
//             <div className='invalid-feedback'>
//               {emailError}
//             </div>
//           </div>
//           <div className={`form-group mb-2 password-field ${passwordError ? 'was-validated' : ''}`}>
//             <label htmlFor="password" className='form-label'>Mot de passe</label>
//             <input
//               type={isPasswordVisible ? 'text' : 'password'}
//               className='form-control'
//               value={passwordValue}
//               onChange={(e) => setPasswordValue(e.target.value)}
//             />
//             <div className='invalid-feedback'>
//               {passwordError}
//             </div>
//             {passwordValue && ( // Show icon only if password has value
//               <span className='eye-icon' onClick={togglePasswordVisibility}>
//                 {isPasswordVisible ? (
//                   <FontAwesomeIcon icon="fa-regular fa-eye-slash" />
//                 ) : (
//                   <FontAwesomeIcon icon="fa-regular fa-eye" />
//                 )}
//               </span>
//             )}
//           </div>
//           <div className='form-group mb-2 form-check'>
//             <input type="checkbox" className='form-check-input'/>
//             <label htmlFor="check" className='form-check-label'>souviens-toi de moi</label>
//           </div>
          
//           <Link to="/home">
//             <button type='submit' className='btn btn-success w-100 mt-2 log'>CONNEXION</button>
//           </Link>
//           <Link to="/inscription" className='btn w-100 insc'>Inscription</Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.css'

function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    if (!emailValue) {
      setEmailError('Entrez votre email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!passwordValue) {
      setPasswordError('Entrez votre mot de passe');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      // Call the login endpoint
      const response = await fetch('http://localhost:8081/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, password: passwordValue }),
      });

      const data = await response.json();

      if (data.success) {
        navigate('/home');
      } else {
        setLoginError('Adresse email ou mot de passe incorrect');
      }
    }
  };

  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
      <div className='login'>
        <h2 className='mb-3 member'>Espace membre</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className='form-group mb-2'>
            <label htmlFor="email" className='form-label'>Adresse email</label>
            <input
              type="email"
              className={`form-control ${emailError ? 'is-invalid' : ''}`}
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <div className='invalid-feedback'>
              {emailError}
            </div>
          </div>
          <div className='form-group mb-2 password-field'>
            <label htmlFor="password" className='form-label'>Mot de passe</label>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              className={`form-control ${passwordError ? 'is-invalid' : ''}`}
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <div className='invalid-feedback'>
              {passwordError}
            </div>
            {passwordValue && ( // Show icon only if password has value
              <span className='eye-icon' onClick={togglePasswordVisibility}>
                {isPasswordVisible ? (
                  <FontAwesomeIcon icon="fa-regular fa-eye-slash" />
                ) : (
                  <FontAwesomeIcon icon="fa-regular fa-eye" />
                )}
              </span>
            )}
          </div>
          <div className='form-group mb-2 form-check'>
            <input type="checkbox" className='form-check-input'/>
            <label htmlFor="check" className='form-check-label'>souviens-toi de moi</label>
          </div>

          {loginError && (
            <div className="alert alert-danger" role="alert">
              {loginError}
            </div>
          )}

          <button type='submit' className='btn btn-success w-100 mt-2 log'>CONNEXION</button>
          <Link to="/inscription" className='btn w-100 insc'>Inscription</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;

































