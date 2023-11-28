import React from 'react';
import './SignIn.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform sign-in logic here
  
      // Redirect to the dashboard
      navigate('/dashboard')
     
    }
  return (
    <div>
      <h2>Sign In</h2>
      <form className='signIn-form' onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}


  


export default SignIn;
