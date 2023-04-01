import React, { useState } from 'react';

export default function Nav(setAboutMe) {

    return 	<nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Ivan Munoz</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class=" collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto ">
          <li class="nav-item">
            <button class="nav-link mx-2 active" aria-current="page" onClick={() => setAboutMe(true)}>About me</button>
          </li>
          <li class="nav-item">
            <button class="nav-link mx-2" href="#">Portfolio</button>
          </li>
          <li class="nav-item">
            <button class="nav-link mx-2" href="#">Contact</button>
          </li>
          <li class="nav-item">
            <button class="nav-link mx-2" href="#">Resume</button>
          </li>
        </ul>
      </div>
    </div>
    </nav>
}
