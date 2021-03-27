import React from 'react'

export default function Contact () {

  return (
    <div className="contact-wrap">
      <form action="https://formsubmit.co/matt.hd.ford@gmail.com" method="POST">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="hidden" name="_subject" value="NFT Art Gallery Contact"></input>
        <textarea placeholder={`Questions, comments or concerns? Please reach out.`} class="form-control" name="message" rows="7" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}