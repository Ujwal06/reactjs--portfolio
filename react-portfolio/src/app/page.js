"use client";

import React, { useState} from 'react';
import { FaGithubSquare, FaInstagram,FaLinkedin, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Head from 'next/head';
import { RxCross2 } from "react-icons/rx";

import Image from 'next/image';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  
  return (
    <>
    <Head>
    <title>Portfolio of Ujwal Kumar R</title>
    <meta name="description" content="Portfolio of Ujwal Kumar R, a passionate Web Developer specializing in React.js and JavaScript." />
    <meta name="keywords" content="Web Developer, Portfolio, React.js, JavaScript, Ujwal Kumar" />
    <meta name="author" content="Ujwal Kumar R" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    
      <main className='bg-white '>
        <section className=" min-h-screen">
        <nav
  className="fixed top-0 left-0 w-full bg-gray-600 text-white shadow-md z-10"
  role="navigation"
>
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    {/* Logo */}
    <h1 className="text-2xl font-bold cursor-pointer">
      PORTFOLIO<span className="sr-only"> - Ujwal Kumar's Portfolio</span>
    </h1>

    {/* Hamburger Icon for Mobile */}
    <button
  className="lg:hidden text-3xl cursor-pointer"
  onClick={handleToggle}
  aria-label="Toggle Navigation Menu"
  aria-expanded={isOpen}
  tabIndex="0"
>
  {isOpen ? <RxCross2 size={24} /> : <FaBars size={24} />}
</button>

    {/* Navigation Links */}
    <ul
      className={`lg:flex space-x-6 text-xl items-center ${
        isOpen
          ? 'fixed inset-0 bg-gray-600 z-20 flex flex-col justify-center'
          : 'hidden'
      } lg:block`}
    >
      {[
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label:'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
      ].map((item) => (
        <li key={item.id} className="text-center lg:text-left">
          <a
            href={`#${item.id}`}
            className="block py-2 lg:inline hover:text-teal-200"
          >
            {item.label}
          </a>
        </li>
      ))}
      <li className="text-center lg:text-left">
        <a
          className="block bg-gradient-to-r from-slate-400 to-teal-100 px-4 py-2 rounded-md lg:inline lg:ml-6 hover:bg-teal-200"
          href="/resume/UjwalKumar_Resume.pdf"
          download="UjwalKumar_Resume.pdf"
        >
          Resume
        </a>
      </li>
    </ul>
  </div>
</nav>

      <div className='flex items-center justify-center py-5 mt-8'>
      <Image 
    src="/images/ProfilePhoto.png" 
    alt="Profile Photo" 
    width={400} 
    height={400} 
    className='rounded-full object-cover'
  />

</div>
<div className="text-center px-6 sm:px-10">
  {/* Heading */}
  <h2 className="text-4xl sm:text-5xl py-1 text-teal-600">Ujwal Kumar R</h2>
  <h3 className="text-xl sm:text-2xl py-2">Web Developer</h3>
  
  {/* Introduction Text */}
  <p className="text-md sm:text-xl py-4 leading-7 sm:leading-8 text-gray-800 text-justify mx-auto max-w-2xl">
    Hi, I'm Ujwal Kumar R, a dedicated web developer with a passion for crafting elegant and functional digital experiences.
  </p>
  <p className="text-sm sm:text-md py-2 leading-7 sm:leading-8 text-gray-800 text-justify mx-auto max-w-2xl">
    With a strong foundation in HTML, CSS, and JavaScript, I'm proficient in building responsive websites and web applications. I enjoy exploring modern technologies like React.js and Node.js to create innovative solutions.
  </p>

  {/* Social Links */}
  <div className="text-4xl sm:text-5xl flex justify-center gap-6 sm:gap-12 cursor-pointer py-3">
    <FaGithubSquare />
    <FaInstagram />
    <FaLinkedin />
  </div>

  {/* About Section */}
  <div className="px-4 sm:px-10 py-10 text-justify" id="about">
    <h2 className="text-4xl sm:text-5xl py-4 sm:py-6 text-teal-600 text-center">
      About Me
    </h2>
    <p className="text-sm sm:text-md py-3 sm:py-5 leading-7 sm:leading-8 text-gray-800 max-w-3xl mx-auto">
      Hello! I'm Ujwal Kumar R, a passionate Web Developer with a background in Information Science and Engineering. I possess a strong foundation in web development technologies and am continually exploring new ways to create dynamic, user-friendly applications. I am proficient in Java, JavaScript, React.js, and Java Swing, which allows me to combine technical skills with creative problem-solving.
    </p>
    <p className="text-sm sm:text-md py-3 sm:py-5 leading-7 sm:leading-8 text-gray-800 max-w-3xl mx-auto">
      With a CGPA of 7, I am committed to continuous learning and growth, both academically and professionally. My objective is to build responsive, efficient, and scalable web solutions that cater to users' needs and enhance their digital experiences. I am enthusiastic about connecting, learning, and collaborating with like-minded individuals in the tech community.
    </p>
  </div>
</div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10' id='projects'>
            <h2 className='text-5xl py-2 text-teal-600 mt-7'>Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Project 1 */}
              <div className="flex flex-col md:flex-row items-center shadow-lg p-10 rounded-xl gap-8">
                {/* Left Side - Image */}
                <Image src="/images/Project-1-java.png"width={300} height={200} alt="Project 1"/>
                {/* Right Side - Description & Link */}
                <div className="text-left">
                  <h3 className="text-2xl font-bold">Hospital Management System</h3>
                  <p className="my-4">This is a Java project focused on implementing a hospital management system.</p>
                  <a href="https://github.com/your-repo" className="text-teal-600 hover:text-teal-800" target="_blank" rel="noopener noreferrer">
                  View Project Code
                  </a>
                </div>
            </div>
            {/* Project 2 */}
            <div className="flex flex-col md:flex-row items-center shadow-lg p-10 rounded-xl gap-8">
              <img src="./images/Project-2-js.png" width={300} height={200} alt="Project 2" />
              <div className="text-left">
                <h3 className="text-2xl font-bold">TextUtils</h3>
                <p className="my-4">This project showcases a dynamic web app built using JavaScript.</p>
                <a href="https://github.com/Ujwal06/textUtils-react" className="text-teal-600 hover:text-teal-800" target="_blank" rel="noopener noreferrer">
                View Project Code
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col md:flex-row items-center shadow-lg p-10 rounded-xl gap-8">
              <img src="./images/Project-3-js.png" width={300} height={200} alt="Project 3" />
            <div className="text-left">
              <h3 className="text-2xl font-bold">Instant Newzzz</h3>
              <p className="my-4">I developed a responsive Instant News App using React.js, designed to deliver the latest news updates in real-time. .</p>
              <a href="https://github.com/Ujwal06/intsantnewzzz" className="text-teal-600 hover:text-teal-800" target="_blank" rel="noopener noreferrer">
              View Project Code
              </a>
            </div>
          </div>

    {/* Project 4
    <div className="flex flex-col md:flex-row items-center shadow-lg p-10 rounded-xl gap-8">
      <img src="./images/Project-4-js.png" width={300} height={200} alt="Project 4" />
      <div className="text-left">
        <h3 className="text-2xl font-bold">Fullstack Project</h3>
        <p className="my-4">A fullstack application using Node.js, Express, and MongoDB.</p>
        <a href="https://github.com/your-repo" className="text-teal-600 hover:text-teal-800" target="_blank" rel="noopener noreferrer">
          View Project Code
        </a>
      </div>
    </div> */}
  </div>
</div>
<div className="text-center p-10" id='skills'>
  <h2 className="text-5xl py-2 text-teal-600 mt-7">Skills</h2>

  {/* Container for skill cards */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-10 my-10">

    {/* Frontend Skills Card */}
    <div className="bg-gray-100 p-8 rounded-xl shadow-lg w-80">
      <h3 className="text-3xl font-bold text-teal-600 mb-6">Frontend Skills</h3>
      <div className="space-y-4">
        {/* Skill with experience */}
        <div>
          <p className="text-left">HTML & CSS</p>
          <div className="w-full bg-gray-300 rounded-full h-3">
            <div className="bg-teal-500 h-3 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>

        <div>
          <p className="text-left">JavaScript</p>
          <div className="w-full bg-gray-300 rounded-full h-3">
            <div className="bg-teal-500 h-3 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>

        <div>
          <p className="text-left">React.js</p>
          <div className="w-full bg-gray-300 rounded-full h-3">
            <div className="bg-teal-500 h-3 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>


        <div>
          <p className="text-left">Tailwind CSS</p>
          <div className="w-full bg-gray-300 rounded-full h-3">
            <div className="bg-teal-500 h-3 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
    </div>

    {/* Backend Skills Card */}
    <div className="bg-gray-100 p-8 rounded-xl shadow-lg w-80">
      <h3 className="text-3xl font-bold text-teal-600 mb-6">Backend Skills</h3>
      <div className="space-y-4">
        {/* Skill with experience */}
        <div>
          <p className="text-left">Java</p>
          <div className="w-full bg-gray-300 rounded-full h-3">
            <div className="bg-teal-500 h-3 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>

        <div>
          <p className="text-left">Node.js</p>
          <div className="w-full bg-gray-300 rounded-full h-3">
            <div className="bg-teal-500 h-3 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>

        <div>
          <p className="text-left">SQL</p>
          <div className="w-full bg-gray-300 rounded-full h-3">
            <div className="bg-teal-500 h-3 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>

        <div>
          <p className="text-left">APIs</p>
          <div className="w-full bg-gray-300 rounded-full h-3">
            <div className="bg-teal-500 h-3 rounded-full" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="text-center p-10" id='experience'>
  <h2 className="text-5xl py-2 text-teal-600 mt-7">Experience</h2>

  {/* Experience Container/internship */}
  <div className="bg-gray-100 p-8 rounded-xl shadow-lg max-w-3xl mx-auto my-10 text-left">
    {/* Job Title */}
    <h3 className="text-3xl font-bold text-teal-600 mb-2">Frontend Web Developer</h3>
    
    {/* Company and Location */}
    <p className="text-lg font-semibold">Aqmenz Automation Pvt. Ltd., Bengaluru, Karnataka</p>
    
    {/* Duration */}
    <p className="text-gray-500 mb-4">August 2023 - September 2023</p>

    {/* Job Description */}
    <ul className="list-disc list-inside space-y-2">
      <li>Contributed to the development of an online food ordering system using HTML, CSS, and Java.</li>
      <li>Gained hands-on experience with version control (Git) and collaborative development environments.</li>
    </ul>
  </div>
</div>
<div className="text-center p-10" id='education'>
  <h2 className="text-5xl py-2 text-teal-600 mt-7">Education</h2>

  {/* Education Container */}
  <div className="max-w-4xl mx-auto my-10 space-y-8">
    
    {/* Degree */}
    <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-teal-600">SJB Institute of Technology, Bangalore</h3>
      <p className="text-gray-600">March 2020 - June 2024</p>
      <p className="font-semibold">Bachelor of Engineering (BE)</p>
      <p>Information Science and Engineering</p>
      <p className="text-gray-700">Overall CGPA: <span className="font-bold">7.0</span></p>
    </div>
    
    {/* P-U */}
    <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-teal-600">Aishwarya PU College, Maddur</h3>
      <p className="text-gray-600">June 2018 - March 2020</p>
      <p className="font-semibold">12th - PCMB</p>
      <p className="text-gray-700">Overall Percentage: <span className="font-bold">69%</span></p>
    </div>
    
    {/* School */}
    <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-teal-600">Shanthiniketan Public School, Ramanagara</h3>
      <p className="text-gray-600">June 2015 - March 2016</p>
      <p className="font-semibold">10th Standard</p>
      <p className="text-gray-700">CGPA: <span className="font-bold">8.0</span></p>
    </div>

  </div>
</div>
<div className="text-center p-6 sm:p-10" id="contact">
  {/* Heading */}
  <h2 className="text-4xl sm:text-5xl py-4 text-teal-600 mt-5">Contact</h2>

  {/* Contact-Icons */}
  <div className="text-4xl sm:text-5xl flex flex-col sm:flex-row justify-center items-center sm:gap-12 gap-6 cursor-pointer py-6">
    {/* Email */}
    <a
      href="mailto:ujwallll16@gmail.com"
      className="flex flex-col items-center group transition duration-300"
    >
      <CgMail className="group-hover:text-teal-500" />
      <p className="text-md sm:text-lg mt-2 group-hover:text-teal-500">
        ujwallll16@gmail.com
      </p>
    </a>

    {/* Phone Section */}
    <a
      href="tel:+918951272972"
      className="flex flex-col items-center group transition duration-300"
    >
      <FaPhoneAlt className="group-hover:text-teal-500" />
      <p className="text-md sm:text-lg mt-2 group-hover:text-teal-500">
        +91 89512 72972
      </p>
    </a>
  </div>
</div>


        </section>
      </main>
      </>
  );
}
