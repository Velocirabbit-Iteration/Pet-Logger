import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import MainContainer from './containers/MainContainer';
import UserProfileContainer from './containers/UserProfileContainer';
import DependentContainer from './containers/DependentContainer';
import AddNewComponent from './components/AddNewComponent';
import NavComponent from './components/NavComponent';
import LoginComponent from './components/LoginComponent';
import { useState } from 'react';

const App = () => {
  // const [currentUserId, setCurrentUserId] = useState(
  //   '65ecbe30d6da6de8222431e2'
  // );

  const [currentUserId, setCurrentUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = sessionStorage.getItem('currentUserId');

    if (storedUserId) {
      setCurrentUserId(storedUserId);
      navigate('/user');
    } else {
      fetch('/auth/session')
        .then((response) => response.json())
        .then((data) => {
          console.log('Response data from server', data);
          if (data.userLoggedIn) {
            setCurrentUserId(data._id);
            sessionStorage.setItem('currentUserId', data._id);
            navigate('/user');
          } else {
            navigate('/');
          }
        })
        .catch((error) => {
          console.error('Error checking session:', error);
          navigate('/');
        });
    }
  }, [navigate]);

  return (
    <div>
      <main>
        <MainContainer />
        <NavComponent />

        <Routes>
          <Route
            path="/"
            element={<LoginComponent setCurrentUserId={setCurrentUserId} />}
          />
          <Route
            path="user"
            element={<UserProfileContainer currentUserId={currentUserId} />}
          />
          <Route path="dependent/:id" element={<DependentContainer />} />
          <Route
            path="addnew"
            element={<AddNewComponent currentUserId={currentUserId} />}
          />
        </Routes>

        {/* </MainContainer> */}
      </main>
    </div>
  );
};

export default App;
