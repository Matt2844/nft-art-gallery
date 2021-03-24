import React, { useState } from 'react'
import Button from '@material-ui/core/Button';


export default function Profile (props) {
  const [showContact, setShowContact] = useState('');

  return (
    <div className="profile-wrap">
      <img src="./profile-dog.jpg" className="profile-pic"></img>
      <div className="text">
        <h3>Profile Name {props.name}</h3>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo</p>
        <Button onClick={() => setShowContact(true)}>Contact</Button>
        {showContact ? (
          <div className="contact-wrap">
            <form action="https://formsubmit.co/matt.hd.ford@gmail.com" method="POST">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea placeholder={`Your Message To ${props.name}`} class="form-control" name="message" rows="7" required></textarea>
              <button type="submit">Send</button>
              <button onClick={() => setShowContact(false)}>Cancel</button>
            </form>
          </div>


        ) : null}
      </div>
    </div>
  )
}