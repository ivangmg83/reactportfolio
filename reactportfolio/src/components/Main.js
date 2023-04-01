import React from 'react';

export default function (props) {
  return (
    <div>
      <p>Rendering main component</p>

      {
        props.contentType === 'aboutMe' && props.users.map((user) => (
          <p>
            {
              user.email
            }
          </p>
        ))
      }

      {
        props.contentType === 'portfolio' && (
          <div>Portfolio section</div>
        )
      }

      {
        props.contentType === 'contact' && (
          <div>Contact section</div>
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
