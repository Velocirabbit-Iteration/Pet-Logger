import React from 'react';
import {withRouter} from 'react-router-dom'

import DependentComponent from '../components/DependentComponent';


// const dogArray = [{name: "Oil Rig", breed:"German Shepard", age: 5, gender: 'female'}, {name: "Shadow", breed:"German Shepard", age: 7, gender: 'male'}]

const DependentContainer = () => {
  // fetch ('/') 
  // .then(resp => resp.json())
  // .then (data => console.log(data))  // data is going to be an array of objects 
  // .catch((err)=> console.log("get dependents request error", err)); 
  

  // iterate using a for loop over the data array of objects, pass in the infor from each element to a dependent component. 
  // const dependents = dogArray.map((elem, i)=>{
  //   return (
  //     <DependentComponent
  //       key ={i}
  //       traits = {elem}
  //     />);
  // });  

  // console.log("dogarray", dogArray)
  // console.log("dependents", dependents)

  return (
    <div>
      <h1>This is Dependent Container</h1>
      {/* {dependents}
      <button>Add Existing Dependent</button>
      <button>Add New Dependent</button> */}
    </div>

); 
    
}; 

export default DependentContainer; 