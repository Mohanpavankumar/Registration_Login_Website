import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import SummaryApi from './../EndPoints/index';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';

const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch();

  console.log("User Header",user);

  const handleLogout = async() =>{
    const fetchData = await fetch(SummaryApi.logout_user.url,{
      method : SummaryApi.logout_user.method,
      credentials : 'include'
    })

    const data = await fetchData.json();

    //toast messages
    if(data.success){
      toast.success(data.message);
      dispatch(setUserDetails(null));
    }
    if(data.error){
      toast.error(data.message);
    }
  }
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
          {
              user?._id ? (
                <Link to='/sign-up' onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-blue-600 hover:bg-blue-800'>Logout</Link>
              )
              :
              (
                <Link to='/login' className='px-3 py-1 rounded-full text-white bg-blue-600 hover:bg-blue-800'>Login</Link>
              )
            }
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;