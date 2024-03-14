import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import DependentComponent from '../components/DependentComponent';

// const dogArray = [{name: "Oil Rig", breed:"German Shepard", age: 5, gender: 'female'}, {name: "Shadow", breed:"German Shepard", age: 7, gender: 'male'}, {name: "Penelope", breed:"Grey Hound", age: 2, gender: 'female'}, {name: "Antonio", breed:"English Bulldog", age: 10, gender: 'male'}]

const UserProfileContainer = ({ currentUserId }) => {
  const [result, setResult] = useState([]);

  // default id: 65ecbe30d6da6de8222431e2

  useEffect(() => {
    fetch(`http://192.168.0.226:3000/api/dog/${currentUserId}`)
      .then((resp) => resp.json())
      .then((data) => setResult(data)) // data is going to be an array of objects
      .catch((err) => console.log('get dependents request error', err));
  }, []);

  // console.log("dogarray", dogArray)
  // console.log("dependents", dependents)

  const dependents = result.map((elem, i) => {
    console.log(elem);
    return <DependentComponent key={i} traits={elem} />;
  });

  return (
    <div className='usermaincontainer'>
      <h2>Pets you are tracking</h2>

      <div className='alldependents'>{dependents}</div>
      <div className='buttoncontainer'>
        {/* <button>Add Existing Dependent</button> */}
        <Link to='/addnew'>
          <button>Add New Pet</button>
        </Link>
      </div>
    </div>
  );
};

export default UserProfileContainer;
