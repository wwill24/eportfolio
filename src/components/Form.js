import './FormStyles.css'
import emailjs from '@emailjs/browser'

import React, { useRef } from 'react'

const Form = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_j700gps', 'template_yciz8cf', form.current, 'RGUzH8KjqY3e8drxr')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    e.target.reset()
  }

  return (
    <div className='form'>
        <form ref={form} onSubmit={sendEmail} className='form control'>
            <label>Name</label>
            <input type='text' name='user_name' required></input>
            <label>Email</label>
            <input type='email' name='user_email' required></input>
            <label>Subject</label>
            <input type='text' name='subject' required></input>
            <label>Message</label>
            <textarea name='message' rows='6' placeholder='Type your message here' required/>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form
