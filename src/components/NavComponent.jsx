import React from 'react';

import SettingIcon from './SettingIcon';
import HelpIcon from './HelpIcon';
import DogIcon from './DogIcon';

const NavComponent = () => {
  return (
    <div className='navheader'>
      <a className='logo'>
        <DogIcon />
        PetLogger
      </a>

      <nav className=' navbar'>
        <div className='profileinfocontainer'>
          <img src='https://as1.ftcdn.net/v2/jpg/02/56/63/58/1000_F_256635898_A8FkyVvBHXOHem9viOKnEWx7ZRiWB2mB.jpg'></img>
          {/* <img src='https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY='></img> */}
          <span>User Name</span>
        </div>
        <a href='#'>
          <SettingIcon />
        </a>
        <a href='#'>
          <HelpIcon />
        </a>
      </nav>
    </div>
  );
};

export default NavComponent;
