import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import Navbar from './navbar'
import Intro from './intro'
import Main from './main'
// import PropTypes from 'prop-types'

function Portfolio() {
  return(
    <>
      <Navbar />
      <Intro />
      <Main />
    </>
  )
}

ReactDOM.render(<Portfolio />, document.querySelector("#root"));