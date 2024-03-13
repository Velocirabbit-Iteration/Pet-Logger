import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import MainContainer from './containers/MainContainer';
import UserProfileContainer from './containers/UserProfileContainer';
import DependentContainer from './containers/DependentContainer';
import AddNewComponent from './components/AddNewComponent';
import NavComponent from './components/NavComponent';
import LoginComponent from './components/LoginComponent';
import { useState } from 'react';
import CalendarComponent from './components/CalendarComponent';
const App = () => {
  const [currentUserId, setCurrentUserId] = useState(
    '65ecbe30d6da6de8222431e2'
  );

  // const [currentUserId, setCurrentUserId] = useState('');

  useEffect(() => {
    const navigate = useNavigate();

    fetch('/auth/session')
      .then((response) => response.json())
      .then((data) => {
        if (!data.userLoggedIn) {
          navigate('/');
        } else {
          setCurrentUserId = data._id;
          navigate('/user');
        }
      });
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
