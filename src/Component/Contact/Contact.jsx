import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone} from '@fortawesome/free-solid-svg-icons'

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
    const formData = new FormData(event.target);

    formData.append("access_key", "b4b4a765-5689-47dc-8442-abf33c08237e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
      event.target.reset();
    }
  };
  return (
    <div id='Contact' className='text-white m-5'>
       <h1 className=' text-center text-6xl m-20'>Get in touch</h1>
       <div className='flex flex-col md:flex-row  self-start mt-10 mx-20'>
  <div className='w-1/2 mx-3'>
    <h1 className=' text-7xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500'>Let's talk</h1>
    <p className='w-8/12 mx-3 my-3'>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
    <p><FontAwesomeIcon icon={faEnvelope} /> kb926464@gmail.com</p>
    <p><FontAwesomeIcon icon={faPhone} />+91 9760402549</p>
    <p><FontAwesomeIcon icon={faLocationDot} /> Delhi, India</p>
  </div>
  <div className='w-3/12 mx-3'>
    <form onSubmit={onSubmit} className='flex flex-col space-y-3'>
      <label htmlFor=''>Your Name</label>
      <input type="text" name="name" placeholder='Enter Your Name' className='bg-zinc-800 h-10 rounded-md' pattern="[a-zA-Z]+" required />
      <label htmlFor=''>Your Email</label>
      <input type="email" name="email" placeholder='Enter Your Email' className='bg-zinc-800 h-10 rounded-md'required />
      <label htmlFor=''> Write your message here</label>
      <textarea name="message" rows="8" placeholder='Enter your message' className='bg-zinc-800 rounded-md'required></textarea>
      <button type='submit' className='w-1/2 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-500 cursor-pointer hover:border-2'>Submit Now</button>
    </form>
  </div>
</div>
    </div>
  )
}

export default Contact