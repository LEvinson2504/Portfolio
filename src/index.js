import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
// import Home from './pages/home/home';
import Social from './pages/social/Social'
import Navbar from './components/navbar/navbar'
// import PropTypes from 'prop-types'

function Portfolio() {
  return(
    <>
      <Navbar />
      <Social />
    </>
  )
}

ReactDOM.render(<Portfolio />, document.querySelector("#root"));