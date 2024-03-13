import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import NewLogComponent from '../components/NewLogComponent';
import LogComponent from '../components/LogComponent';

import DependentComponent from '../components/DependentComponent';
import { useParams } from 'react-router-dom';

const logArray = [
  { activity: 'nap', time: '12:50pm', note: 'Did not want to take a nap.' },
  { activity: 'medicine', time: '1:50pm', note: 'Gave red pills' },
];

const DependentContainer = (props) => {
  const { id } = useParams();
  console.log(id);

  // Method: GET
  // Endpoint: localhost:3000/api/post?dogId=48374837483743 (query dogId)
  // Controller mtehod: getPost
  // Response: array of post objects [{postType, details, date}]

  const [log, setLog] = useState([]);
  // const [reset, setreset] = useState(false)

  useEffect(() => {
    fetch(`/api/post?dogId=${id}`)
      .then((resp) => resp.json())
      .then((data) => setLog(data))
      .catch((err) => console.log('get logs request error', err));
  }, []);

  // iterate using a for loop over the data array of objects, pass in the info from each element to a dependent component.

  // const logActivities = log.map((elem, i)=>{
  //   return (
  //     <LogComponent
  //       key ={i}
  //       logs = {elem}
  //     />);
  // });

  let logActivities = [];
  for (let i = log.length - 1; i >= 0; i--) {
    logActivities.push(<LogComponent key={i} logs={log[i]} />);
  }

  return (
    <div className='dependentpagecontainer'>
      {/* <DependentComponent
        traits={{        }} 
      ></DependentComponent> */}
      <NewLogComponent
        // resetPage = {setreset}
        id={id}
      ></NewLogComponent>
      {logActivities}
    </div>
  );
};

export default DependentContainer;
