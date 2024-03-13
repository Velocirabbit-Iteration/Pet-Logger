import React from 'react';
import cors from 'cors';
import { useNavigate } from 'react-router-dom';
import style from '../stylesheets/iterationStyle.css';

const LoginComponent = () => {
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    const userName = document.querySelector('#usernameInput').value;
    const password = document.querySelector('#passwordInput').value;

    fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      console.log(response.status);
      if (response.status == 200) {
        navigate('/user');
      }
    });
  }

  function handleSignUp(event) {
    event.preventDefault();
    const userName = document.querySelector('#usernameInput').value;
    const password = document.querySelector('#passwordInput').value;

    fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      console.log(response.status);
      if (response.status == 200) {
        navigate('/user');
      }
    });
  }

  return (
    <>
      <div class='loginForm'>
        <h1>Login / Sign Up</h1>

        <form>
          <div className='loginFormContent'>
            <input type='text' id='usernameInput' placeholder='username' />
            <input type='password' id='passwordInput' placeholder='password' />
            <button type='button' onClick={(e) => handleLogin(e)}>
              Log In
            </button>
            <button type='button' onClick={(e) => handleSignUp(e)}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginComponent;
