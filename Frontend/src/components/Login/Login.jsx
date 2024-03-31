import React from 'react'
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
            <input type="email" className='form-control' required/>
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
              required
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
            <label htmlFor="check" className='form-check-label'>Remember me</label>
          </div>
          <button type='submit' className='btn btn-success w-100 mt-2 log'>LOGIN</button>
          {/* <button type='submit' className='btn block w-100 insc'>Inscription</button> */}
          <Link to="/" className='btn  w-100 insc'>Inscription</Link>
        </form>
        </div>
    </div>
    
  )
}

export default Login