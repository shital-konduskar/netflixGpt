import React from 'react'
import {signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
 
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }
  return (
    <div className='my-4 bg-gradient-to-b from-black flex justify-between'>
      <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='logo'
      className='w-52 ' />

      {
        user && (
          <div className='flex justify-between'>
            <p className='font-bold text-red-600 text-xl w-24 mt-5 py-2'>
              {user.displayName}
            </p>
            <button 
            className='font-bold text-white text-xl w-24'
              onClick={handleSignOut}
            >SignOut
            </button>
         </div>
      )
      }
      
    </div>
  )
}

export default Header