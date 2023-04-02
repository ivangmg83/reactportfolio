import React from 'react';

export default function (props) {
  return (
    <div>
      {
        props.contentType === 'aboutMe' && (
          <div>
            <h1>ABOUT ME</h1>
             <p>Hello world! Passionate full stack software developer, responsible father, best colleague ever. That pretty much sums it up, though at least the last one my former colleagues have to confirm. I try to do a good job in all roles I have in life, and I enjoy the process immensely. Do you want me to talk about my coding skills and experience now, or will we discuss it later in the interview?</p>
          </div>
        )
      }

      {
        props.contentType === 'portfolio' && (
          <div>
          <h1>PROJECT PORTFOLIO</h1>
          <a href= "https://github.com/JoshuaEliTate/ChatDown">Project1</a><br/>
          <a href= "https://github.com/JoshuaEliTate/ChatDown">Project2</a><br/>
          <a href= "https://github.com/JoshuaEliTate/ChatDown">Project3</a><br/>
          </div>
        )
      }

      {
        props.contentType === 'contact' && (
          <div>{props.Form()}</div>
        )
      }

      {
        props.contentType === 'resume' && (
          <div >
            <h1>RESUME</h1>
            <a
            href="https://github.com/ivangmg83/reactportfolio/blob/main/docs/ivan_generated_resume.pdf"
            class="link"
            >
            Download Resume
            </a>
            <ul>Front End
              <li>HMTL</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>Handlebars</li> 
              <li>Progressive Web Applications</li>
              <li>React</li>
            </ul>
            <ul>Back End
            <li> Node</li>
            <li> Object Oriented Programming</li>
            <li> Express</li>
            <li> MySql</li>
            <li> NoSql</li>
            <li> Mongo</li>
            <li> Mongoose</li>
            <li> GraphQL</li>
            </ul>
          </div>
        )
      }

    </div>
  );
}
