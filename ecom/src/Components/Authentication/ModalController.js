// import React, { useState } from 'react';
// import LoginModal from './Login';
// import SignupModal from './Signup';

// const ModalController = () => {
//   const [isLoginModalOpen, setLoginModalOpen] = useState(false);
//   const [isSignupModalOpen, setSignupModalOpen] = useState(false);

//   const openLoginModal = () => {
//     setLoginModalOpen(true);
//     setSignupModalOpen(false);
//   };

//   const openSignupModal = () => {
//     setSignupModalOpen(true);
//     setLoginModalOpen(false);
//   };

//   const closeModals = () => {
//     setLoginModalOpen(false);
//     setSignupModalOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={openLoginModal}>Open Login Modal</button>
//       <button onClick={openSignupModal}>Open Signup Modal</button>
//       <button onClick={closeModals}>Close Modals</button>
//       {isLoginModalOpen && <LoginModal isOpen={true} onClose={closeModals} />}
//       {isSignupModalOpen && <SignupModal isOpen={true} onClose={closeModals} />}
//     </div>
//   );
// };

// export default ModalController;
