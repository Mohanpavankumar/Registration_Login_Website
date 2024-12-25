import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-slate-200 flex justify-between items-center'>
      <div className='container mx-auto p-4'>
        <p className='text-center' title="Mohan's Website">Coding With Mohan❤️❤️❤️</p>
        <Link to={'/contact'} className='text-center'>Contact</Link>
      </div>
    </footer>
  )
}

export default Footer;