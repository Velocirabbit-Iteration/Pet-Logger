import React from 'react';
import { Link } from 'react-router-dom';
// import DependentContainer from './DependentContainer';

// to add link to the dependent page

const DependentComponent = ({ traits }) => {
  const dogImages = {
    'German Shepard':
      'https://images.pexels.com/photos/236622/pexels-photo-236622.jpeg',
    Lab: 'https://images.pexels.com/photos/4000307/pexels-photo-4000307.jpeg',
    Husky: 'https://images.pexels.com/photos/245035/pexels-photo-245035.jpeg',
    Dalmatian:
      'https://images.pexels.com/photos/13764529/pexels-photo-13764529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'Shih Tzu':
      'https://pawleaks.com/wp-content/uploads/2021/05/Shih-Tzu-Poodle-mix.jpg',
    'Shiba Inu': 'images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg',
  };

  const { _id, name, age, breed, gender } = traits;
  console.log({ breed });

  return (
    <div className='dependentcomponent'>
      <div className='dependent-leftside'>
        <div className='dependentimgcontainer'>
          <img src={dogImages[breed]} style={{ objectFit: 'cover' }}></img>
        </div>
        <div className='dependentinfocontainer'>
          <h3 className='dependentname'>
            <Link to={'/dependent/' + _id}>{name}</Link>
          </h3>
          <ul className='dependenttraits'>
            <li className='traitslist'>Age: {age}</li>
            <li className='traitslist'>Breed: {breed}</li>
            <li className='traitslist'>Gender: {gender}</li>
          </ul>
        </div>
      </div>
      <button>&#10005;</button>
    </div>
  );
};

export default DependentComponent;
