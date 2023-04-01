import React, { useState } from 'react';

export default function Nav(props) {

  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Ivan Munoz</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className=" collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto ">
          <li className="nav-item">
            <button
              className="nav-link mx-2 active"
              aria-current="page"
              onClick={() => props.setContentType('aboutMe')}
            >About me</button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link mx-2 active"
              aria-current="page"
              onClick={() => props.setContentType('portfolio')}
            >Portfolio</button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link mx-2 active"
              aria-current="page"
              onClick={() => props.setContentType('contact')}
            >Contact</button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link mx-2 active"
              aria-current="page"
              onClick={() => props.setContentType('resume')}
            >Resume</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}
