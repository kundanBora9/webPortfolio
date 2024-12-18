import React from "react";
import Project_1 from "../../assest/Project_1.png";
import project_2 from "../../assest/project_2.png";
import project_3 from "../../assest/project_3.png";
import project_4 from "../../assest/project_4.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Project() {
  return (
    <div id="Project" className="">
      <div className="m-20">
      <h1 className="text-white text-center text-6xl">Latest Work </h1>
      <h1 className="text-white text-center text-1xl mt-3 md:text-2xl lg:text-2xl">
        Each Work is a unique piece of development
      </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-10 mx-20">
        <div className="w-screen">
          <img src={Project_1} alt="" className="  md:w-3/4 md:h-3/4 md:mx-auto md: my-3  lg:w-3/4 lg:h-3/4 lg:mx-auto lg:my-3" />
        </div>
        <div className="w-auto  md:w-4/5 lg:w-4/5 text-white">
          <p className="w-screen md:w-9/12 lg:w-9/12 mx-3 my-3">
            This website helps you with the planning, creation, and execution of
            concepts for your physical brand showroom. Our staff offers
            knowledgeable direction to design a visually appealing and useful
            area that captures the essence of your company. With our customized
            solutions, you may improve customer experience and increase brand
            visibility.
          </p>
          <div className="mt-3 flex justify-center items-center">
            <button className="text-white px-3 py-2 border rounded-md mx-3">
              React
            </button>
            <button className=" text-white px-1 py-2 border rounded-md">
              Tailwind CSS
            </button>
          </div>
          <div className="mt-3 flex justify-center items-center">
            <button className="bg-white text-black px-3 py-2 rounded-md mx-3 ">
              <a href="https://github.com/kundanBora9/sundown">Code</a>
            </button>
            <button className="bg-white text-black px-3 py-2 rounded-md">
              <a href="https://sundown-git-main-kundanbora9s-projects.vercel.app/">Live Demo </a>  
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-10 mx-20">
        <div className="w-screen">
          <img src={project_2} alt="" className="w-full md:w-3/4 md:h-3/4 md:mx-auto md: my-3  lg:w-3/4 lg:h-3/4 lg:mx-auto lg:my-3" />
        </div>
        <div className="w-auto  md:w-4/5 lg:w-4/5 text-white">
          <p className="w-screen md:w-9/12 lg:w-9/12 mx-3 my-3">
            This website contributes to the growth of your business. We handle
            all of the infrastructure needs for your business, guaranteeing
            smooth expansion and effective operations. We offer full support,
            from facilities management to IT solutions, to help you grow your
            company.
          </p>
          <div className="mt-3 flex justify-center items-center">
            <button className="text-white px-3 py-2 border rounded-md mx-3">
              HTML
            </button>
            <button className=" text-white px-3 py-2 border rounded-md">
              CSS
            </button>
            <button className=" text-white px-3 py-2 border rounded-md mx-3">
              Java Script
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-white text-black px-3 py-2 rounded-md mx-3 mt-3">
              <a href="https://github.com/kundanBora9/webona">Code</a>
            </button>
            <button className="bg-white text-black px-3 py-2 rounded-md">
              <a href="https://kundanbora9.github.io/webona/">Live Code</a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-10 mx-20">
        <div className="w-screen">
          <img src={project_3} alt="" className="w-full md:w-3/4 md:h-3/4 md:mx-auto md: my-3  lg:w-3/4 lg:h-3/4 lg:mx-auto lg:my-3" />
        </div>
        <div className="w-auto  md:w-4/5 lg:w-4/5 text-white">
          <p className="w-screen md:w-9/12 lg:w-9/12 mx-3 my-3">
            This website helps you create a presentation to show to your client.
            With our simple tools and templates, you can easily create appealing
            and professional presentations. Impress your clients with beautiful
            pictures and concise, impactful messaging.
          </p>
          <div className="mt-3 flex justify-center items-center">
            <button className="text-white px-3 py-2 border rounded-md mx-3">
              React
            </button>
            <button className=" text-white px-3 py-2 border rounded-md">
              Tailwind CSS
            </button>
          </div>
          <div className="mt-3 flex justify-center items-center">
            <button className="bg-white text-black px-3 py-2 rounded-md mx-3">
              <a href="https://github.com/kundanBora9/ochi">Code</a>
            </button>
            <button className="bg-white text-black px-3 py-2 rounded-md">
              <a href="https://kundanbora9.github.io/ochi/">Live Demo</a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-10 mx-20">
        <div className="w-screen">
          <img src={project_4} alt="" className="w-full md:w-3/4 md:h-3/4 md:mx-auto md: my-3  lg:w-3/4 lg:h-3/4 lg:mx-auto lg:my-3" />
        </div>
        <div className="w-auto  md:w-4/5 lg:w-4/5 text-white">
          <p className="w-screen md:w-9/12 lg:w-9/12mx-3 my-3">
            Welcome to our e-commerce website, your go-to destination for
            premium quality foods. We offer a wide variety of fresh, organic,
            and gourmet products to cater to all your culinary needs. Enjoy a
            seamless shopping experience with fast delivery and exceptional
            customer service.
          </p>
          <div className="mt-3 flex justify-center items-center">
            <button className="text-white px-3 py-2 border rounded-md mx-3">
              React
            </button>
            <button className=" text-white px-3 py-2 border rounded-md">
              Tailwind CSS
            </button>
          </div>
          <div className="mt-3 flex justify-center items-center">
            <button className="bg-white text-black px-3 py-2 rounded-md mx-3">
             <a href="https://github.com/kundanBora9/e-commerce">Code</a>
            </button>
            <button className="bg-white text-black px-3 py-2 rounded-md">
              <a href="https://kundanbora9.github.io/e-commerce/">Live Demo</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
