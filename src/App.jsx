import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainContainer from './containers/MainContainer';
import UserProfileContainer from './containers/UserProfileContainer';
import DependentContainer from './containers/DependentContainer';
import AddNewComponent from './components/AddNewComponent';
import NavComponent from './components/NavComponent';
import LoginComponent from './components/LoginComponent';
import { useState } from 'react';

const App = () => {
  const [currentUserId, setCurrentUserId] = useState(
    '65ecbe30d6da6de8222431e2'
  );

  return (
    <div>
      {/* <p>Michael was up in here!</p>
      <p>This is Reem</p>
      <p>Hello Guys Bongi</p> */}
      <main>
        <MainContainer />
        <NavComponent />

        <Routes>
          <Route
            path='/'
            element={<LoginComponent setCurrentUserId={setCurrentUserId} />}
          />
          <Route
            path='user'
            element={<UserProfileContainer currentUserId={currentUserId} />}
          />
          <Route path='dependent/:id' element={<DependentContainer />} />
          <Route
            path='addnew'
            element={<AddNewComponent currentUserId={currentUserId} />}
          />
        </Routes>

        {/* </MainContainer> */}
      </main>
    </div>
  );
};

export default App;
