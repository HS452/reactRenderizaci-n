import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React from 'react';
import Cart from './components/cart';

//Comentados //
// import Home from './components/Home'; //
// import Login from './components/Login'; //
// import Register from './components/Register'; //

function App() {
  return (
    <div>
      <Navbar />
      <Cart />
    { /* <Register /> */}
     { /* <Login /> */} 
      { /* <Home/>  */ } 
      <Footer />
    </div>
  );
}

export default App;
