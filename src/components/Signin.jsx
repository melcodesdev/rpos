import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sign in simple validation
const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 6; 

  const handleSignIn = () => {
    setEmailError(!isEmailValid);
    setPasswordError(!isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    // Sign in form section
    <section className='xl:flex xl:flex-row font-inter'>
      <div className='hidden xl:flex h-screen w-[60vw] bg-gradient-to-b from-fuchsia-500 to-rose-400 '></div>

      <div className='w-[80vw] sm:w-[70vw] lg:w-[60vw] xl:w-[40vw] h-screen flex flex-col justify-between mx-[10vw] sm:mx-[15vw] lg:mx-[20vw] xl:mx-0 pt-8 md:pt-16 lg:pt-32 xl:pt-8 xl:px-16'>
        <Link to="/" className='flex flex-row'>
          <img className='w-7 lg:w-10 h-7 lg:h-10' src="/images/logo.png" alt="Rpos logo" />
          <h3 className='text-2xl lg:text-4xl text-fuchsia-500 font-bold font-inter'>Rpos</h3>
        </Link>

        <div className='flex flex-col my-auto xl:my-0'>
          <h3 className='font-semibold text-xl md:text-2xl mb-16'>Sign in to your account</h3>

          {/* Gives error messages and red on errors */}
          <div>
            <div className='flex flex-col'>
              <h3 className='text-base md:text-lg lg:text-xl mb-2'>Email</h3>
              <input
                className={`bg-neutral-100 rounded-md text-lg md:text-xl lg:text-3xl mb-4 ${
                  emailError ? 'border-red-500' : ''
                }`}
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  // Clear error upon change
                  setEmailError(false);
                }}
                required
              />
              {emailError && (
                <p className='text-red-500 text-xs'>Please enter a valid email address.</p>
              )}
            </div>

            <div className='flex flex-col'>
              <h3 className='text-base md:text-lg lg:text-xl mb-2'>Password</h3>
              <input
                className={`bg-neutral-100 rounded-md text-lg md:text-xl lg:text-3xl mb-4 ${
                  passwordError ? 'border-red-500' : ''
                }`}
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  // Clear error upon change
                  setPasswordError(false); 
                }}
                required
              />
              {passwordError && (
                <p className='text-red-500 text-xs'>Password must be at least 6 characters long.</p>
              )}
            </div>
          </div>

          <button
            className='text-base md:text-lg lg:text-xl bg-fuchsia-500 hover:bg-fuchsia-600 rounded-full text-white font-semibold mt-4 p-1 md:p-2'
            onClick={handleSignIn}
          >
            Sign in
          </button>
          <h6 className='text-xs md:text-sm lg:text-base mx-auto mt-2 mb-8'>
            Don't have an account?{' '}
            <span className='font-bold underline hover:opacity-50'>
              <Link to="/sign-up">Sign up</Link>
            </span>
          </h6>
        </div>
      </div>
      
      {/* Shows modal upon valid attempt and clicking on the sign in button */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-lg mb-2">Hello, thank you for going this far. <br />
            <a href='https://idodevstuff.netlify.app/' className='text-fuchsia-500 hover:underline'>Check out my other project.</a></h2>
            <button className="hover:underline justify-end text-right text-xs" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Signin;
