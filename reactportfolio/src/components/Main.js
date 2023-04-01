import React from 'react';

export default function ({ aboutMe }) {
  return (
    <div className= {aboutMe ? "click" : "container"}>
     <p>Hello</p>
    </div>
  );
}
