import React from 'react';

const styles = {
  a: {
    display: 'block',
  },
  };

export default function (props) {
  return (
    <div>
      {
      props.contentType === '' && (
      <p>Rendering main component</p>
      )
      }
     
      {
        props.contentType === 'aboutMe' && (
          <div> Hello world! Passionate full stack software developer, responsible father, best colleague ever. That pretty much sums it up, though at least the last one my former colleagues have to confirm. I try to do a good job in all roles I have in life, and I enjoy the process immensely. Do you want me to talk about my coding skills and experience now, or will we discuss it later in the interview?</div>
        )
      }

      {
        props.contentType === 'portfolio' && (
          <div>
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
          <div>Resume section</div>
        )
      }

    </div>
  );
}
