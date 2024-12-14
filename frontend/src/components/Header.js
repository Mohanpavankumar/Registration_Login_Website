import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className='h-full container mx-auto flex items-center px-6 justify-between'>
        <div>
          <Link to='/' className='text-blue-600 font-bold'>
            Mern Authentication System
          </Link>
        </div>

        <div className='flex items-center'>
          <div>
            <Link to='/sign-up' className='px-3 py-1 text-blue-600 font-bold hover:text-blue-800'>Sign Up</Link>
          </div>
          <div>
            <Link to='/login' className='px-3 py-1 text-blue-600 font-bold hover:text-blue-800'>Login</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;