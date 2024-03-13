import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import { useNavigate } from "react-router-dom";

const breedArray = [
  'Husky',
  'Golden Retreiver',
  'Dalmatian',
  'German Shepard',
  'Lab',
  'Beagle',
  'Poodle',
];

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};

const AddNewComponent = ({ currentUserId }) => {
  const breedlist = [
    { label: 'German Shepard', value: 'German Shepard' },
    { label: 'Lab', value: 'Lab' },
    { label: 'Husky', value: 'Husky' },
    { label: 'Dalmatian', value: 'Dalmatian' },
    { label: 'Shih Tzu', value: 'Shih Tzu' },
  ];

  const genderList = [
    { label: 'male', value: 'male' },
    { label: 'female', value: 'female' },
  ];

  const [name, nameOnChange] = useInput('');
  const [age, ageOnChange] = useInput('');
  const [breed, breedOnChange] = useInput('');
  const [gender, genderOnChange] = useInput('');

  const saveCharacter = () => {
    // check if name is empty
    const body = {
      name,
      age,
      breed,
      gender,
      users: [currentUserId],
    };
    console.log('req.body', body);

    fetch('/api/dog', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())

      .catch((err) =>
        console.log(' add dependent fetch /api/character: ERROR: ', err)
      );
  };

  return (
    <div className='addnewcomponent'>
      <div className='formwrapper'>
        <form>
          <h3 className='newdependentname'>Add new dependent</h3>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={nameOnChange}
          ></input>
          <label htmlFor='breed'>Age: </label>
          <input
            type='text'
            id='age'
            name='age'
            value={age}
            onChange={ageOnChange}
          ></input>
          <label htmlFor='breed'>Breed:</label>
          <select
            id='breed'
            name='breed'
            value={breed}
            onChange={breedOnChange}
          >
            <option value='blank'>-</option>
            {breedlist.map((breedname) => (
              <option value={breedname.value}>{breedname.label}</option>
            ))}
            {/* <option value="Husky">Husky</option>
            <option value="Dalmation">Dalmation</option> */}
          </select>
          <label htmlFor='gender'>Gender:</label>
          <select
            id='gender'
            name='gender'
            value={gender}
            onChange={genderOnChange}
          >
            <option value='blank'>-</option>
            {genderList.map((elem) => (
              <option value={elem.value}>{elem.label}</option>
            ))}
            {/* <option value="male">Male</option>
            <option value="female">Female</option> */}
          </select>
          <Link to='/user'>
            <button className='submitnew' type='button' onClick={saveCharacter}>
              {' '}
              Submit
            </button>
          </Link>
          <Link to='/user'>
            <button className='cancel' type='button'>
              {' '}
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddNewComponent;
