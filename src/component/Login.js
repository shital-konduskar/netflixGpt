import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from '../utils/validateData';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignInForm = () => {
    setIsSignIn(!isSignIn);
  }

  const handleSign = (e) => {
    e.preventDefault();
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      // Sign up logic here...
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }

    else {
      //Sign in logic here
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+ " - " + errorMessage);
        });
    }

  }

  return (
    <div
      className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_medium.jpg')]
     h-screen"
    >

      <Header />
      <div
        className='bg-black w-1/3 m-auto text-white 
        box-content text-center bg-opacity-70 h-2/3'
      >
        <h2
          className='text-3xl font-semibold  py-5'
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        <form >
          {!isSignIn && <input type='text'
            className=' mx-4 my-2 p-2 w-2/3 bg-black bg-opacity-40 border rounded-md border-slate-700'
            placeholder='Full Name'
            ref={name}
          />
          }
          <input type='text'
            className=' mx-4 my-2 p-2 w-2/3 bg-black bg-opacity-40 border rounded-md border-slate-700'
            placeholder='Email or Mobile'
            ref={email}
          />
          <input type='password'
            className=' mx-4 my-2 p-2 w-2/3 bg-black bg-opacity-40 border rounded-md border-slate-700'
            placeholder='password'
            ref={password}
          />
          <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
          <button
            className='m-4 p-2 bg-red-600 w-2/3 rounded-lg text-lg font-bold'
            onClick={handleSign}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
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