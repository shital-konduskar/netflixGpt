import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn , setIsSignIn] = useState(true);

  const handleSignInForm = ()=>{
    setIsSignIn(!isSignIn);
  }

  return (
    <div
     className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_medium.jpg')]
     h-screen"
     >
    
      <Header/>
      <div 
        className='bg-black w-1/3 m-auto text-white 
        box-content text-center bg-opacity-70 h-2/3'
      >
        <h2
          className='text-3xl font-semibold  py-5'
        >
          {isSignIn? "Sign In" : "Sign Up"}
        </h2>
        <form>
          { !isSignIn && <input type='text' 
              className=' mx-4 my-2 p-2 w-2/3 bg-black bg-opacity-40 border rounded-md border-slate-700'
              placeholder='Full Name'
          />
          }
          <input type='text' 
            className=' mx-4 my-2 p-2 w-2/3 bg-black bg-opacity-40 border rounded-md border-slate-700'
            placeholder='Email or Mobile'
           />
          <input type='password' 
            className=' mx-4 my-2 p-2 w-2/3 bg-black bg-opacity-40 border rounded-md border-slate-700'
            placeholder='password'
          />
          <button
            className='m-4 p-2 bg-red-600 w-2/3 rounded-lg text-lg font-bold'
          >
            {isSignIn? "Sign In" : "Sign Up"}
          </button>

          <p 
            className='py-4 cursor-pointer'
            onClick={handleSignInForm}
          >
           {isSignIn ? " New to Netflix? Sign up now" : "Already exist? Sign In"}
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login