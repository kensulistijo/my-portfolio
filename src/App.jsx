import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "@fontsource/poppins/400.css"; 
import "@fontsource/poppins/600.css"; 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaGithub, FaLinkedin, FaPhone, FaDiscord } from "react-icons/fa";
import {Contact} from "./Contact";
import myPhoto from './assets/ken.jpeg';
import bookber from './assets/bookber.jpg';
import univision from './assets/univision.jpg';
import pricehub from './assets/pricehub.jpg';
import schoolgrad from './assets/school-grad.jpeg';
import therapease from './assets/therapease.jpg';
import watchgoods from './assets/watchgoods.jpg';
import webdev from './assets/web-dev.jpg';
import mobiledev from './assets/mobile-dev.jpg';
import pm from './assets/project-management.png';
import for2 from './assets/for2.jpg';
import porto from './assets/porto.jpg';
import frontrow from './assets/frontrow.jpg';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className="">
      <div className="navbar bg-base-100 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a href="#aboutMe">ABOUT</a></li>
          <li>
            <a href="#education">EDUCATION</a>
            <ul className="p-2">
            <li><a href="#school">&gt; SCHOOL</a></li>
            <li><a href="#college">&gt; COLLEGE</a></li>
            </ul>
          </li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#contactMe">CONTACT</a></li>
        </ul>
    </div>
    <a href="#aboutMe" className="btn btn-ghost text-xl">Ken Sulistijo</a>
  </div>
  <div className="navbar hidden lg:flex sticky w-full bg-green-600 flex items-center px-4 py-3 z-50 z-[9999] top-0">
    <ul className="menu menu-horizontal px-1">
      <li><a href="#aboutMe">ABOUT</a></li>
      <li>
        <details>
          <summary>EDUCATION</summary>
          <ul className="p-2 bg-[#2CB00F]">
            <li><a href="#school">SCHOOL</a></li>
            <li><a href="#college">COLLEGE</a></li>
          </ul>
        </details>
      </li>
      <li><a href="#projects">PROJECTS</a></li>
      <li><a href="#skills">SKILLS</a></li>
      <li><a href="#contactMe">CONTACT</a></li>
    </ul>
  </div>
  </div>
  <div className="introContainer" id="aboutMe">
    <div className="intro">
      <div className="leftSideIntro">
          <div className="avatar">
            <div className="avatarFrame rounded-full drop-shadow-xl">
              <img src={myPhoto} />
            </div>
          </div>
      </div>
      <div className="rightSideIntro w-full px-4 overflow-x-hidden text-center md:text-left">
        <div className="brief">
          <span className="greetings text-3xl md:text-4xl lg:text-5xl font-bold text-green-500 flex flex-wrap flex-col lg:flex-row justify-center md:justify-start break-words">
            Hi, I'm 
            <span className="text-rotate lg:ml-2 inline-block">
              <span className="myName flex flex-col items-center lg:items-start">
                <span className="bg-white text-center text-teal-800 px-2 underline">Jakendra!</span>
                <span className="bg-white text-center text-[#d4c21c] px-2 underline">Ken!</span>
                <span className="bg-white text-center text-red-800 px-2 underline">Jack!</span>
                <span className="bg-white text-center text-blue-800 px-2 underline">Jake!</span>
              </span>
            </span>
          </span>
          <h4 className="hehe md:text-xl pt-1">Jakendra is my actual name ^&gt;^</h4>
          <h2 className='aboutMe md:text-lg lg:xl font-italic leading-snug'>I am a junior Software Engineer with many flexible skills, allowing me to easily fit into different roles.</h2>
          <h2 className="text-md md:text-lg lg:xl mt-3 leading-snug">Based in Jakarta, Indonesia, but my English and communication skills have allowed me to cross borders.</h2>
        </div>
        <div className="socials flex flex-col items-center lg:items-start w-full">
          <h2 className="text-2xl font-bold text-center lg:text-left">WHERE TO FIND ME</h2>
          <div className="mySocials flex flex-col items-center md:flex-row md:justify-start md:flex-wrap gap-6 mt-4">
            <div className="linkedInSocial flex items-center">
              <a href="https://www.linkedin.com/in/ken-sulistijo/" className='flex items-center'>
                <FaLinkedin className="text-3xl"/>
                <span className='pl-2'>Ken Sulistijo</span>
              </a>
            </div>
            <div className="githubSocial flex items-center">
              <a href="https://github.com/kensulistijo" className='flex items-center'>
                <FaGithub className="text-3xl"/>
                <span className='pl-2'>kensulistijo</span>
              </a>
            </div>
            <div className="phoneSocial flex items-center">
              <a className="flex items-center">
                <FaPhone className="text-3xl"/>
                <span className="pl-2">0877-8506-8081</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
  <div className="rolesContainer">
      <div className="roles">
      <div className="card bg-base-100 md:w-48 lg:w-[32%] shadow-sm drop-shadow-xl">
        <figure>
          <img
            src={pm}
            alt="Project Management"
            className="h-48" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-lg lg:text-xl">PROJECT MANAGEMENT</h2>
          <p>Delivering beneficiary projects on-time by working closely with users and developers, along with administration.</p>
        </div>
      </div>
      <div className="card bg-base-100 md:w-48 lg:w-[32%] shadow-sm drop-shadow-xl">
        <figure>
          <img
            src={mobiledev}
            alt="Mobile Development"
            className="h-48" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-lg lg:text-xl">MOBILE DEVELOPMENT</h2>
          <p>Developing mobile applications (Android) with the use of Flutter and Android Studio.</p>
        </div>
      </div>
      <div className="card bg-base-100 md:w-48 lg:w-[32%] shadow-sm drop-shadow-xl">
        <figure>
          <img
            src={webdev}
            alt="Web Development"
            className="h-48" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-lg lg:text-xl">WEB DEVELOPMENT</h2>
          <p>Developing web-based systems with multiple different programming languages and frameworks.</p>
        </div>
      </div>
  </div>
  </div>
  <div className="educationContainer bg-green-100" id="education">
    <div className="education">
      <h1 className="text-4xl">EDUCATION</h1>
      <div className="school flex items-stretch pt-5" id="school">
        <div className="leftSchool">
          <img src={schoolgrad} className="h-full object-cover" alt="" />
        </div>
        <div className="rightSchool p-5">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">Notre Dame Senior High School</h2>
          <h3 className="text-lg md:text-xl lg:text-2xl text-gray-500">Jakarta, Indonesia</h3>
          <h5 className="mt-2">Graduated as a high-ranking student, excelling through achievements of the highest grade in mathematics and english.</h5>
          <p className="mt-3 font-bold">Notable Achievements</p>
          <ul className="text-left list-disc list-inside space-y-2 inline-block list-disc pl-5 space-y-1">
            <li>1st in Advanced Mathematics.</li>
            <li>1st in English.</li>
            <li>3rd in the class of Science for 2022 Graduates.</li>
            <li>Member of the Student Council.</li>
            <li>Participant of the National Science Olympics (OSN) for Mathematics in 2020 and 2021.</li>
          </ul>
        </div>
      </div>
      <div className="college items-stretch" id="college">
        <div className="leftCollege p-5">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Bina Nusantara University
          </h2>
          <h3 className="text-lg md:text-xl lg:text-2xl text-gray-500">
            Jakarta, Indonesia
          </h3>
          <h5 className="text-base mt-2">
            Bachelor's Degree of Computer Science. Graduated with a GPA of 3.95 in 3.5 years.
          </h5>
          <p className="mt-3 font-bold">Notable Achievements</p>
          <ul className="text-left list-disc list-inside space-y-2 inline-block list-disc pl-5 space-y-1">
            <li>Graduated with a GPA of 3.95.</li>
            <li>Achieved Summa Cum Laude status.</li>
            <li>Division Manager in the community/body for Computer Science students (HIMTI).</li>
            <li>Underwent an Internship at PT. Astra Daihatsu Motor as an IT Developer. Had roles as a project manager, a mobile developer, and a web developer.</li>
          </ul>
        </div>
        <div className="rightCollege overflow-x-hidden">
          <img
            src="https://binus.ac.id/sdg/wp-content/uploads/2022/01/alsut.jpg"
            className="w-full object-cover object-top"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div className="projectsContainer" id="projects">
    <h1 className="text-4xl">PROJECTS</h1>
    <div className="projects">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={porto}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide6" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={watchgoods}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={frontrow}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={pricehub}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src={univision}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img
            src={bookber}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide5" className="btn btn-circle">❮</a>
            <a href="#slide7" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide7" className="carousel-item relative w-full">
          <img
            src={therapease}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide6" className="btn btn-circle">❮</a>
            <a href="#slide8" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide8" className="carousel-item relative w-full">
          <img
            src={for2}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide7" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="languagesContainer" id="skills">
    <div className="languagesInnerContainer">
      <h1 className="text-2xl text-white">PROGRAMMING LANGUAGES</h1>
      <div className="languages md:justify-center lg:justify-between w-full max-w-7xl gap-5">
        <Carousel responsive={responsive} itemClass="px-2 lg:px-4">
        <div className="card bg-base-100 w-full h-80">
          <figure>
            <img
              src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
              alt="Java"
              className="h-full"
              />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lg">JAVA</h2>
            <p>Used for developing web-based applications. Also my main language for learning Object-Oriented Programming.</p>
          </div>
        </div>
        <div className="card bg-base-100 w-full h-80">
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/3840px-Python-logo-notext.svg.png"
              alt="Python" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lg">PYTHON</h2>
            <p>Mainly for scripting and file processing (xml, json, and spreadsheet). Most of the experience comes from scripting in IBM's Maximo EAM which uses Jython.</p>
          </div>
        </div>
        <div className="card bg-base-100 w-full h-80">
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/3840px-PHP-logo.svg.png"
              alt="PHP" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lg">PHP</h2>
            <p>Used for developing web-based applications with Laravel as a framework.</p>
          </div>
        </div>
        <div className="card bg-base-100 w-full h-80">
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/500px-C_Programming_Language.svg.png"
              alt="C" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lg">C</h2>
            <p>Used for making quick programs for day-to-day basic activities such as calculators and probability calculations.</p>
          </div>
        </div>
        <div className="card bg-base-100 w-full h-80">
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
              alt="C++" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lg">C++</h2>
            <p>Similar to C where I use it to create programs to help with basic activities. The difference is that I use C++ when I know there are libraries that can help me way easier.</p>
          </div>
        </div>
        <div className="card bg-base-100 w-full h-80">
          <figure>
            <img
              src="https://avatars.githubusercontent.com/u/1609975?s=280&v=4"
              alt="Dart" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lg">DART</h2>
            <p>Developed mobile applications using Flutter and Android Studio with Dart as the language.</p>
          </div>
        </div>
        </Carousel>
      </div>
    </div>
  </div>
  <div className="toolsContainer">
    <div className="toolsInnerContainer">
      <h1 className="text-2xl">TOOLS</h1>
        <div className="tools">
          <Carousel responsive={responsive} itemClass="px-2 lg:px-4">
          <div className="card bg-base-100 w-full h-80">
            <figure>
              <img
                src="https://cdn-icons-png.flaticon.com/256/25/25231.png"
                alt="GitHub" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg">GITHUB</h2>
              <p>My main tool to manage repositories for my projects. Although I am not usually the one to handle branches, I can still do them.</p>
            </div>
          </div>
          <div className="card bg-base-100 w-full h-80">
            <figure>
              <img
                src="https://images.icon-icons.com/2699/PNG/512/gitlab_logo_icon_169112.png"
                alt="GitLab" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg">GITLAB</h2>
              <p>Used in the same way as GitHub, but I used it specifically for private repositories within a company.</p>
            </div>
          </div>
          <div className="card bg-base-100 w-full h-80">
            <figure>
              <img
                src="https://i.pinimg.com/originals/32/a0/3a/32a03aee0c76419ec5bde950a62883bc.png"
                alt="SQL Server Management Studio" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg">SQL Server Management Studio</h2>
              <p>Learned it during my Internship program and it was used as my main tool for querying and creating Stored Procedures.</p>
            </div>
          </div>
          <div className="card bg-base-100 w-full h-80">
            <figure>
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png"
                alt="Postman" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg">POSTMAN</h2>
              <p>Picked it up during my Internship program, and then continued to keep using it to test, execute, and collect API requests.</p>
            </div>
          </div>
          <div className="card bg-base-100 w-full h-80">
            <figure>
              <img
                src="https://statik.unesa.ac.id/ktp/thumbnail/d8cb3ad0-f880-4356-a7d6-52ca850098af.png"
                alt="Figma" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg">FIGMA</h2>
              <p>All of my projects use Figma to create a mock-up version of them. After the main system design is drawn up, I can then start developing it.</p>
            </div>
          </div>
          <div className="card bg-base-100 w-full h-80">
            <figure>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Android_Studio_Logo_%282023%29.svg/1280px-Android_Studio_Logo_%282023%29.svg.png"
                alt="Android Studio"
                />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-lg">ANDROID STUDIO</h2>
              <p>Mobile development for Android-based devices are done through Android Studio to build and run apps.</p>
            </div>
          </div>
          </Carousel>
        </div>
      </div>
    </div>
    <div className="contactMeContainer" id="contactMe">
      <div className="contactMe flex flex-col md:flex md:flex-row">
        <div className="leftSideContacts w-full md:w-1/2">
          <div className="contactTitle">
            <h1 className="text-left font-bold text-3xl md:text-5xl mb-5 text-[#2CB00F]">Get in Touch?</h1>
            <h1 className="text-left italic text-lg md:text-2xl mb-5 text-[#229e06]">I'd like to hear from you!</h1>
            <h1 className="text-left text-md md:text-md mb-5 text-[#136b00]">Of course, you can always contact me through my socials ;)</h1>
          </div>
          <div className="contactImageContainer">
            <img src="https://theglorioblog.com/wp-content/uploads/2013/10/monogatari_15_2.jpg" className="h-full object-cover" alt="" />
          </div>
        </div>
        <div className="rightSideContacts w-full mt-5 md:mt-0 md:w-1/2 md:ml-5 flex flex-col justify-end">
          <Contact>
          </Contact>
        </div>
      </div>
    </div>
    <div className="outro p-5">
      <h3 className="italic">Thanks for tuning in! Looking forward to working with you.</h3>
    </div>
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 ">
      <aside>
        <div className="nameFooter flex center items-center">
          <span className="text-lg md:text-2xl font-bold">Jakendra Lathaniel Sulistijo</span>
        </div>
        <div className="emailFooter flex center items-center">
          <img className="w-6 md:w-8" src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/email-envelope-white-icon.png" alt="" />
          <span className="text-md md:text-lg font-bold ml-3">jakendra.lathaniel@gmail.com</span>
        </div>
        <div className="phoneFooter flex center items-center">
          <img className="w-6 md:w-8" src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/phone-call-white-icon.png" alt="" />
          <span className="text-md md:text-lg font-bold ml-3">+(62)-877-8506-8081</span>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title text-lg md:text-2xl font-bold text-white">Social</h6>
        <div className="grid grid-flow-row gap-3">
          <div className="linkedinFooter flex items-center">
            <a href="https://www.linkedin.com/in/ken-sulistijo/">
            <FaLinkedin className="text-xl md:text-2xl"/>
            </a>
            <span className="ml-2">/ken-sulistijo</span>
          </div>
          <div className="githubFooter flex items-center">
            <a href="https://github.com/kensulistijo">
            <FaGithub className="text-xl md:text-2xl "/>
          </a>
          <span className="ml-2">/kensulistijo</span>
          </div>
          <div className="discordFooter flex items-center">
            <a>
              <FaDiscord className="text-xl md:text-2xl"/>
            </a>
            <span className="ml-2">/oovalantisoo</span>
          </div>
        </div>
      </nav>
    </footer>
  </div>
  </>
  )
}

export default App
