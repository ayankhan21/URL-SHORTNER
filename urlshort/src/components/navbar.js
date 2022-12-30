import React from 'react';
import { Link } from 'react-router-dom';

const Navbarlink = () => {
  return (
    
    <div className="nav">
      <h1>Shortly 🔗</h1>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
    </div>
    
  )
}

export default Navbarlink;
