import React from 'react';
import cors from 'cors';
import { useNavigate } from 'react-router-dom';
import style from '../stylesheets/iterationStyle.css';

const LoginComponent = ({ setCurrentUserId }) => {
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    const name = document.querySelector('#nameInput').value;
    const userName = document.querySelector('#usernameInput').value;
    const password = document.querySelector('#passwordInput').value;

    fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ name, userName, password }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCurrentUserId(data);
        if (data) navigate('/user');
      });
  }

  function handleSignUp(event) {
    event.preventDefault();
    const name = document.querySelector('#nameInput').value;
    const userName = document.querySelector('#usernameInput').value;
    const password = document.querySelector('#passwordInput').value;

    fetch('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ name, userName, password }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCurrentUserId(data);
        if (data) navigate('/user');
      });
  }

  return (
    <>
      <div className="loginForm">
        <h1>Login or Sign Up</h1>

        <form>
          <div className="loginFormContent">
            <input type="text" id="nameInput" placeholder="name" />
            <input type="text" id="usernameInput" placeholder="username" />
            <input type="password" id="passwordInput" placeholder="password" />
            <div className="loginButton">
              <button type="button" onClick={(e) => handleLogin(e)}>
                LOG IN
              </button>
              <button type="button" onClick={(e) => handleSignUp(e)}>
                SIGN UP
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginComponent;
