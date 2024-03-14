import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};

const NewLogComponent = (props) => {
  const [postType, postTypeOnChange] = useInput('');
  const [details, detailsOnChange] = useInput('');

  const saveLog = (id) => {
    // NEED TO DO FEILD INPUT VALIDATION
    const body = {
      dogId: id,
      postType,
      details,
    };
    fetch('http://192.168.0.226:3000/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('request body', data);
        window.location.reload();
      })
      .catch((err) => console.log(' add log fetch: ERROR: ', err));
  };

  return (
    <div className='newlogcontainer'>
      <h4>Log new activity</h4>
      <form className='newlogform'></form>
      <form>
        <div className='logforminputs'>
          <select
            id='postType'
            name='postType'
            value={postType}
            onChange={postTypeOnChange}
          >
            <option value='blank'>Select Activity</option>
            <option value='Food'>Food</option>
            <option value='Medicine'>Medicine</option>
            <option value='Potty'>Potty</option>
            <option value='Nap'>Nap</option>
            <option value='Exercise'>Exercise</option>
            <option value='Treats'>Treats</option>
          </select>
          <input
            name='details'
            placeholder='Add Activity Details'
            value={details}
            onChange={detailsOnChange}
          ></input>
        </div>

        <button type='button' onClick={() => saveLog(props.id)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewLogComponent;
