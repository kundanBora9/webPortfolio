import React from "react";
import about_img from "../../assest/about_img.png";
import html from "../../assest/html.png";
import css from "../../assest/css.png";
import js from "../../assest/js.png";
import tailwind from "../../assest/tailwind.png";
import react from "../../assest/react.png";
import bootstrap from '../../assest/bootstrap.png'
function About() {
  return (
    <div id="about" className="text-white">
      <h1 className="text-6xl text-center">About me</h1>
      <div className="">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full">
            <img src={about_img} alt="" className="" />
          </div>
          <div className="">
            <p className=" text-lg mx-auto w-9/12 md:w-7/12  lg:w-11/12">
              Hello there! I'm Kundan Bora, a driven front-end developer hoping
              to establish a name for myself online. I've always been fascinated
              by the nexus of technology and design, and this curiosity has
              guided me toward frontend development.
            </p>
            <h3 className="mt-5 text-center text-3xl lg:text-left md:text-left ">Teach Stack</h3>
            <div className="flex flex-wrap gap-2 mt-2  mx-5">
              <img src={html} alt="" class="w-16 h-16 mr-2 mb-2"/>
              <img src={css} alt="" class="w-16 h-16 mr-2 mb-2"/>
              <img src={js} alt="" class="w-16 h-16 mr-2 mb-2"/>
              <img src={bootstrap} alt="" class="w-16 h-16 mr-2 mb-2"/>
              <img src={tailwind} alt="" class="w-16 h-16 mr-2 mb-2"/>
              <img src={react} alt="" class="w-16 h-16 mr-2 mb-2"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
