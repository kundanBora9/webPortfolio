import React from "react";

function Footer() {
  return (
    <div className="text-white">
      <div className="flex flex-col justify-evenly md:flex-row items-center text-white mt-10 mb-2 ">
        <div>
          <h1 className="text-3xl"  >Kundan.dev</h1>
          <p className="md:w-1/2 lg:w-1/2 ">
            Passionate front-end developer with a creative flair and a drive for
            continuous learning.
          </p>
        </div>
        <div className="">
          <form action="" className="flex gap-5 item-center">
            <input type="email" placeholder="Enter your email" className='bg-zinc-800 h-10 rounded-md'required  />
            <button type="submit" className='px-5 w-auto h-10 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-500 cursor-pointer hover:border-2'>Subscribe</button>
          </form>
          
        </div>
      </div>
      <hr></hr>
      <div class="lg:flex lg:justify-between lg:items-center flex-col lg:flex-row mx-10 m-5">
  <p>&copy;2024 Kundan Bora. All rights reserved</p>
  <div class="flex justify-center items-center lg:gap-2 gap-0 lg:mt-0 mt-5 lg:flex-row flex-col">
    <p class="lg:mr-5">Term of Services</p>
    <p class="lg:mr-5">Privacy Policy</p>
    <p>Connect with me</p>
  </div>
</div>
    </div>
  );
}

export default Footer;
