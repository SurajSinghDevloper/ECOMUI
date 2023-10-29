// LoginModal.js
import React, { useState } from 'react';
import SignupModal from './Signup';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openSignupModal = () => {
    setSignupModalOpen(true);
    
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  const handleLogin = () => {
    // Add your login logic here
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
    
      <div className="fixed inset-0 bg-black opacity-50"></div>

      <div className="bg-white p-8 rounded shadow-md max-w-xs w-full z-10">
      <div className="flex justify-between mb-4">
      <h2 className="text-2xl font-semibold">Login</h2>
          <button
            type="button"
            className="text-blue-500 hover:underline"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <button
              type="button"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
        <div className='flex d-flex border-slate-100'>

        <button
          type="button"
          className=" bg-emerald-600 text-white w-3/5 p-1 rounded-md ml-2"
          
        >
          Forgot Password
        </button>
        <div className='w-3'></div>
        <button
          type="button"
          className= "mr-4 bg-lime-600 text-white w-2/5 p-1 rounded-md"
          onClick={openSignupModal}
        >
          Register
        </button>
        </div>
        {isSignupModalOpen && (
        <SignupModal isOpen={isSignupModalOpen} onClose={closeSignupModal} />
      )}
      </div>
    </div>
  );
};

export default LoginModal;