import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Login () {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [passwordValue, setPasswordValue] = React.useState('');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
      <div className='login'>
        <h2 className='mb-3 member'>Espace membre</h2>
        <form className='needs-validation'>
          <div className='form-group was-validated mb-2'>
            <label htmlFor="email" className='form-label'>Adresse email</label>
            <input type="email" className='form-control' 
            // required
            />
            <div className='invalid-feedback'>
              Entrez votre email
            </div>
          </div>
          {/* <div className='form-group was-validated mb-2'>
            <label htmlFor="password" className='form-label'>Mot de passe</label>
            <input type="password" className='form-control' required/>
            <div className='invalid-feedback'>
              Entrez votre mot de passe
            </div>
            
          </div> */}
          <div className='form-group was-validated mb-2 password-field'>
            <label htmlFor="password" className='form-label'>Mot de passe</label>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              className='form-control'
              // required
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <div className='invalid-feedback'>
              Entrez votre mot de passe
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
          
          <Link to="/home">
          <button type='submit' className='btn btn-success w-100 mt-2 log'>CONNEXION</button>
      </Link>
          {/* <button type='submit' className='btn block w-100 insc'>Inscription</button> */}
          <Link to="/inscription" className='btn  w-100 insc'>Inscription</Link>
        </form>
        </div>
    </div>
    
  )
}

export default Login


// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8081/', { email, password });
//       if (response.status === 200) {
//         // Login successful, redirect or show success message
//         console.log('Login successful');
//       } else {
//         setError('Invalid credentials');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
//       <div className="login">
//         <h2 className="mb-3 member">Espace membre</h2>
//         {error && <div className="alert alert-danger">{error}</div>}
//         <form onSubmit={handleSubmit} className="needs-validation">
//           <div className="form-group mb-2">
//             <label htmlFor="email" className="form-label">
//               Adresse email
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group mb-2 password-field">
//             <label htmlFor="password" className="form-label">
//               Mot de passe
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className='form-group mb-2 form-check'>
//            <input type="checkbox" className='form-check-input'/>
//            <label htmlFor="check" className='form-check-label'>souviens-toi de moi</label>
//          </div>
//           <button type="submit" className="btn btn-success w-100 mt-2 log">
//             CONNEXION
//           </button>
//           <Link to="/inscription" className="btn w-100 insc">
//             Inscription
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
