import React, { Link } from 'react';


const Footer = () => {
  return (
    <footer className='bg-slate-200'>
      <div className='container mx-auto p-4'>
        <p className='text-center' title="Mohan's Website">Coding With Mohan❤️❤️❤️</p>
        <Link to={'/contact'} className='text-center'>Contact</Link>
      </div>
    </footer>
  )
}

export default Footer;