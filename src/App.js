import React from 'react';
import './App.css';
import avatar from './images/headshot.png';
import resume from './images/resume-nathan-phillips.pdf';
import jiraIcon from './images/jira-3.svg';
import firebaseIcon from './images/firebase.svg';
import polyIcon from './images/polymer.svg';
import jhaIcon from './images/jha.svg';
import uniIcon from './images/uni.svg';
import pantherIcon from './images/panthers.svg';
import { IoLogoLinkedin } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { MdComputer } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { MdAccessibility } from "react-icons/md";
import { MdHotTub } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-image">
          <img src={avatar} className="avatar" alt="avatar"/> 
          
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/nathanjophillips/" target="_blank"><IoLogoLinkedin/><div className="social-icons-text">LinkedIn</div></a>
            <a href="https://www.linkedin.com/in/nathanjophillips/" target="_blank"><IoMdMail/><div className="social-icons-text">Email</div></a>
            <a href="https://github.com/nathanjophillips" target="_blank"><IoLogoGithub/><div className="social-icons-text">Github</div></a>
          </div>
        </div>
        <div className="intro-content">
          <h2 className="hi">Hi, I'm Nathan Phillips</h2>
          <h3 className="bio">Software Developer and Designer looking for the next project</h3>
          <a>
              <div className="location" title="location-icon" alt="location-icon"  target="_blank">  
                <MdLocationOn/>       
                Ames, IA
              </div>
            </a>
          <div className="resume-button-outside"><a className="resume-button" href={resume} download>Resume<div className="download-icon"><FiDownload/></div></a></div>
        </div>
      </header>
      <body>
        <div className="outside-title"><h1 className="skill-main-title">SKILLS</h1></div>
        <div className="skills-line"></div>
        <div className="skills-row">
          <div className="skill-icons-bottom">  
            <a>
              <div className="top-skill-icons" title="front-end-development-icon" alt="front-end-development-icon"  target="_blank">  
                <MdComputer/>       
                <div className="icon-text-top">Front End Development</div>
              </div>
            </a>
            <a>
              <div className="top-skill-icons" title="front-end-development-icon" alt="front-end-development-icon"  target="_blank">  
                <MdGroup/>       
                <div className="icon-text-top">Communication</div>
              </div>
            </a>
            <a>
              <div className="top-skill-icons" title="front-end-development-icon" alt="front-end-development-icon"  target="_blank">  
                <MdAccessibility/>       
                <div className="icon-text-top">Accessibility</div>
              </div>
            </a>
            <a>
              <div className="top-skill-icons" title="front-end-development-icon" alt="front-end-development-icon"  target="_blank">  
                <MdHotTub/>       
                <div className="icon-text-top">User Experience</div>
              </div>
            </a>
          </div>
        </div>
        <div className="skill-row">
          <div className="skill-columns">
            <h2 className="skill-titles">Languages</h2>
            <div className="skill-icons-left">
              <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank">
                <svg className="icon" title="html5-icon" alt="html5-icon"viewBox="0 0 128 128">
                  <path fill="#E44D26" d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"></path><path fill="#EBEBEB" d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
                </svg>
                <div className="icon-text">HTML5</div>
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Archive/CSS3" target="_blank">
                <svg  className="icon" title="css3-icon" alt="css3-icon" viewBox="0 0 128 128">
                  <path fill="#1572B6" d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
                </svg><div className="icon-text">CSS3</div>
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                <svg className="icon" title="js-icon"  alt="js-icon" viewBox="0 0 128 128">
                  <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                </svg>
                <div className="icon-text">Javascript</div>
              </a>
              <a href="https://www.python.org/" target="_blank">
                <svg className="icon" title="python-icon" alt="python-icon" viewBox="0 0 128 128">
                  <path fill="#FFD845" d="M49.33 62h29.159c8.117 0 14.511-6.868 14.511-15.019v-27.798c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191-12.355 2.181-14.453 6.751-14.453 15.176v10.817h29v4h-40.224000000000004c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53 2.075 8.642 7.03 14.659 15.515 14.659h9.946v-13.048c0-9.637 8.428-17.952 18.33-17.952zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zM122.281 48.811c-2.098-8.448-6.103-14.811-14.599-14.811h-10.682v12.981c0 10.05-8.794 18.019-18.511 18.019h-29.159c-7.988 0-14.33 7.326-14.33 15.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0 7.349-2.129 14.487-6.411 14.487-14.834v-11.126h-29v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path>
                </svg>
                <div className="icon-text">Python</div>
              </a>
              <a href="https://www.java.com/en/" target="_blank">
                <svg className="icon" title="java-icon" alt="java-icon" viewBox="0 0 128 128">
                  <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"></path><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"></path><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"></path><path fill="#EA2D2E" d="M76.491 1.587s12.968 12.976-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.548-12.834 32.229-19.059 26.998-39.667z"></path><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"></path>
                </svg>
                <div className="icon-text">Java</div>
              </a>
            </div>
          </div>
          <div className="skill-columns">
            <h2 className="skill-titles">Libraries and Frameworks</h2>
            <div className="skill-icons-right">
              <a href="https://www.polymer-project.org/" target="_blank">
                <img className="icon-image" src={polyIcon} title="polymer-icon" alt="polymer-icon"/>
                <div className="icon-text">Polymer</div>
              </a>
              <a href="https://nodejs.org/en/" target="_blank">
                <svg className="icon" title="node-js-icon" alt="node-js-icon" viewBox="0 0 128 128">
                  <path fill="#83CD29" d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
                </svg>
                <div class="icon-text">Node JS</div>
              </a>
              <a href="https://reactjs.org/" target="_blank">
                <svg className="icon" title="react-icon" alt="react-icon" viewBox="0 0 128 128">
                  <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                </svg>
                <div className="icon-text">React</div>
              </a>
              <a href="https://getbootstrap.com/" target="_blank">
                <svg className="icon" title="bootstrap-icon" alt="bootstrap-icon" viewBox="0 0 128 128">
                  <path fill="#5B4282" d="M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM73.282 55.087c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z"></path>
                </svg>
                <div className="icon-text">Bootstrap</div>
              </a>
              <a href="https://firebase.google.com/" target="_blank">
                <img className="icon-image" src={firebaseIcon} title="firebase-icon" alt="firebase-icon"/>
                <div className="icon-text">Firebase</div>
              </a>
            </div>
          </div>
        </div>
        <h2 className="skill-titles">Workflow and Design Tools</h2>
        <div className="skill-icons-bottom">  
          <a href="https://code.visualstudio.com/" target="_blank">
            <svg className="icon" title="vs-code-icon" alt="vs-code-icon" viewBox="0 0 128 128">
              <path className="a" d="M95 2.3l30.5 12.3v98.7L94.8 125.7 45.8 77l-31 24.1L2.5 94.9V33.1l12.3-5.9 31 24.3ZM14.8 45.7V83.2l18.5-19Zm48.1 18.5L94.8 89.3V39Z"></path>
            </svg>
            <div className="icon-text">VS Code</div>
          </a>
          <a href="https://git-scm.com/" target="_blank">
            <svg className="icon" title="git-icon" alt="git-icon" viewBox="0 0 128 128">
              <path fill="#F34F29" d="M124.737 58.378l-55.116-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.444 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.048-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.934-.933 2.014-1.638 3.167-2.11v-34.659c-1.153-.472-2.231-1.172-3.167-2.111-2.862-2.86-3.551-7.06-2.083-10.576l-14.313-14.313-37.792 37.79c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327-.001-11.501z"></path>
            </svg>
            <div class="icon-text">Git</div>
          </a>
          <a href="https://classic.yarnpkg.com/en/" target="_blank">
            <svg  class="icon" title="yarn-icon" alt="yarn-icon" viewBox="0 0 128 128">
              <path class="cls-1" d="M99.24,80.71C94.9,80.76,91.1,83,87.89,85c-6,3.71-9,3.47-9,3.47l-.1-.17c-.41-.67,1.92-6.68-.69-13.84-2.82-7.83-7.3-9.72-6.94-10.32,1.53-2.59,5.36-6.7,6.89-14.36.91-4.64.67-12.28-1.39-16.28-.38-.74-3.78,1.24-3.78,1.24s-3.18-7.09-4.07-7.66c-2.87-1.84-6,7.61-6,7.61a14,14,0,0,0-11.71,4.5,9.64,9.64,0,0,1-3.85,2.27c-.41.14-.91.12-2.15,3.47C43.2,50,48.34,55.74,48.34,55.74s-6.13,4.33-8.4,9.72a24.78,24.78,0,0,0-1.75,11.68s-4.36,3.78-4.64,7.68a12.87,12.87,0,0,0,1.77,7.83,1.94,1.94,0,0,0,2.63.91s-2.9,3.38-.19,4.81c2.47,1.29,6.63,2,8.83-.19,1.6-1.6,1.92-5.17,2.51-6.63.14-.34.62.57,1.08,1a10,10,0,0,0,1.36,1s-3.9,1.68-2.3,5.51c.53,1.27,2.42,2.08,5.51,2.06,1.15,0,13.76-.72,17.12-1.53a4.33,4.33,0,0,0,2.61-1.46,63,63,0,0,0,15.49-7c4.74-3.09,6.68-3.93,10.51-4.84C103.64,85.54,103.43,80.64,99.24,80.71Z"></path><path class="cls-1" d="M64,2a62,62,0,1,0,62,62A62,62,0,0,0,64,2Zm37.3,87.83c-3.35.81-4.91,1.44-9.41,4.36a67,67,0,0,1-15.56,7.18,8.71,8.71,0,0,1-3.64,1.77c-3.81.93-16.88,1.63-17.91,1.63h-.24c-4,0-6.27-1.24-7.49-2.54-3.4,1.7-7.8,1-11-.69a5.55,5.55,0,0,1-3-3.9,6,6,0,0,1,0-2.06,6.66,6.66,0,0,1-.79-1A16.38,16.38,0,0,1,30,84.52c.29-3.73,2.87-7.06,4.55-8.83A28.56,28.56,0,0,1,36.61,64a26.82,26.82,0,0,1,6.82-9c-1.65-2.78-3.33-7.06-1.7-11.42,1.17-3.11,2.13-4.84,4.24-5.58h0a6.84,6.84,0,0,0,2.51-1.34A17.65,17.65,0,0,1,60.34,31c.19-.48.41-1,.65-1.46,1.6-3.4,3.3-5.31,5.29-6a4.88,4.88,0,0,1,4.4.5c.65.43,1.48,1,3.9,6a4.69,4.69,0,0,1,2.85-.1,3.81,3.81,0,0,1,2.39,1.94c2.47,4.74,2.8,13.19,1.72,18.62a33.8,33.8,0,0,1-5.84,13.31,25.73,25.73,0,0,1,5.77,9.43,25.42,25.42,0,0,1,1.41,10.41A28.7,28.7,0,0,0,86,81.91c3.06-1.89,7.68-4.74,13.19-4.81a6.62,6.62,0,0,1,7,5.7A6.35,6.35,0,0,1,101.3,89.83Z"></path>
            </svg>
            <div class="icon-text">Yarn</div>
          </a>
          <a href="https://www.npmjs.com/" target="_blank">
            <svg className="icon" title="npm-icon" alt="npm-icon" viewBox="0 0 128 128">
              <path id="original-wordmark" class="cls-1" d="M2,38.5H126V82.21H64V89.5H36.44V82.21H2ZM8.89,74.93H22.67V53.07h6.89V74.93h6.89V45.79H8.89ZM43.33,45.79V82.21H57.11V74.93H70.89V45.79Zm13.78,7.29H64V67.64H57.11Zm20.67-7.29V74.93H91.56V53.07h6.89V74.93h6.89V53.07h6.89V74.93h6.89V45.79Z"></path>
            </svg>
            <div className="icon-text">Npm</div>
          </a>
          <a href="https://github.com/nathanjophillips" target="_blank">
            <svg class="icon" title="github-icon" alt="github-icon" viewBox="0 0 128 128">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
            </svg>
            <div class="icon-text">Github</div>
          </a>
          <a href="https://www.atlassian.com/software/jira" target="_blank">
            <img className="icon-image" src={jiraIcon} title="jira-icon" alt="jira-icon" />
            <div className="icon-text">Jira</div>
          </a>
          <a href="https://bitbucket.org/product" target="_blank">
            <svg className="icon" title="bitbucket-icon" alt="bitbucket-icon"  viewBox="0 0 128 128">
              <path d="M64 1.023v.002-.002c-30 0-54.557 8.074-54.557 18.1 0 2.64 6.55 40.504 9.147 55.52 1.165 6.733 18.56 16.607 45.39 16.607l.02-.08v.08c27 0 44.238-9.874 45.403-16.61 2.598-15.015 9.15-52.878 9.15-55.518C118.554 9.097 94 1.022 64 1.022zm0 78.062c-9.578 0-17.343-7.766-17.343-17.343C46.657 52.164 54.422 44.4 64 44.4s17.343 7.764 17.343 17.343c0 9.577-7.765 17.342-17.343 17.342zm-.01-54.368c-19.296-.03-34.934-3.384-34.928-7.49.007-4.107 15.656-7.41 34.952-7.378 19.296.03 34.934 3.382 34.927 7.49-.005 4.106-15.653 7.407-34.95 7.377z"></path><path d="M103.212 89.69c-.83 0-1.494.588-1.494.588S88.283 100.918 64 100.918s-37.718-10.64-37.718-10.64-.665-.587-1.494-.587c-.99 0-1.93.666-1.93 2.135 0 .155.015.31.044.462 2.085 11.16 3.61 19.09 3.876 20.296 1.82 8.21 17.88 14.417 37.22 14.417H64c19.342 0 35.402-6.207 37.222-14.417.268-1.205 1.79-9.13 3.876-20.29.028-.153.044-.31.044-.465 0-1.47-.94-2.137-1.93-2.137z"></path>
            </svg>
            <div className="icon-text">Bitbucket</div>
          </a>
          <a href="https://trello.com/" target="_blank">
            <svg className="icon" title="trello-icon" alt="trello-icon" viewBox="0 0 128 128">
              <path fill="#23719F" d="M127 16.142c0-8.363-6.779-15.142-15.142-15.142h-95.716c-8.363 0-15.142 6.779-15.142 15.142v95.715c0 8.364 6.779 15.143 15.142 15.143h95.716c8.363 0 15.142-6.779 15.142-15.143v-95.715zm-69 83.398c0 3.807-3.286 6.46-7.093 6.46h-27.344c-3.807 0-6.563-2.653-6.563-6.46v-76.31c0-3.808 2.756-7.23 6.563-7.23h27.344c3.807 0 7.093 3.422 7.093 7.23v76.31zm55-66.456v31.886000000000003c0 3.807-2.936 7.03-6.744 7.03h-27.33c-3.808 0-6.926-3.224-6.926-7.03v-42.104c0-3.808 3.118-6.866 6.926-6.866h27.33c3.808 0 6.744 3.058 6.744 6.866v10.218z"></path>
            </svg>
            <div className="icon-text">Trello</div>
          </a>
          <a href="https://www.sourcetreeapp.com/" target="_blank">
            <svg class="icon" title="sourcetree-icon" alt="sourcetree-icon" viewBox="0 0 128 128">
              <path fill="#205081" d="M64 .73C29.114.73.73 29.113.73 64S29.114 127.27 64 127.27c34.888 0 63.27-28.384 63.27-63.27S98.887.73 64 .73zM67.335 120.9v-10.988l27.44-13.9a1.955 1.955 0 0 0 1.073-1.747v-6.29a5.98 5.98 0 0 0 3.99-6.258 5.978 5.978 0 1 0-11.892 1.225 5.97 5.97 0 0 0 3.99 5.03v5.09l-24.6 12.46v-10.22l10.843-5.017a1.957 1.957 0 0 0 1.135-1.773l.02-17.026 20.07-11.276c.617-.346 1-1 1-1.706V53.76a5.974 5.974 0 0 0-2.57-11.59 5.975 5.975 0 0 0-1.344 11.59v3.606L76.42 68.636c-.617.35-1 1-1 1.706l-.02 16.92-8.068 3.73V54.2l16.884-8.257a1.95 1.95 0 0 0 1.097-1.755v-6.29a5.978 5.978 0 0 0 3.99-6.26 5.976 5.976 0 0 0-6.56-5.33 5.975 5.975 0 0 0-5.332 6.56 5.964 5.964 0 0 0 3.99 5.027v5.07l-14.068 6.877V28.598a5.977 5.977 0 1 0-7.902-5.03 5.97 5.97 0 0 0 3.988 5.028V63.24l-9.943-5.224V42.28a1.95 1.95 0 0 0-.767-1.552l-6.802-5.21a5.978 5.978 0 1 0-2.61 2.928l6.265 4.802V59.2c0 .728.404 1.395 1.048 1.733l12.81 6.73v12.724l-21.37-9.884.292-7.742a1.956 1.956 0 0 0-1.063-1.815l-9.797-5.025c.147-.63.2-1.292.13-1.97a5.978 5.978 0 0 0-11.892 1.227 5.977 5.977 0 0 0 6.56 5.33 5.91 5.91 0 0 0 3.1-1.268l9.004 4.616-.295 7.8c-.03.79.417 1.52 1.133 1.85L63.42 84.7v9.084a1.98 1.98 0 0 0 0 .516v26.693a57.53 57.53 0 0 1-6.093-.387V97.66c0-.766-.445-1.46-1.14-1.778l-15.182-6.987a5.974 5.974 0 0 0-6.563-6.527 5.976 5.976 0 1 0 4.924 10.08l14.047 6.463v21.092C27.022 115.028 6.992 91.815 6.992 64c0-31.434 25.574-57.01 57.01-57.01 31.433 0 57.006 25.576 57.006 57.01 0 30.315-23.787 55.17-53.674 56.902z"></path>
            </svg>
            <div className="icon-text">Sourcetree</div>
          </a>
          <a href="https://www.docker.com/" target="_blank">
            <svg class="icon" title="docker-icon" alt="docker-icon" viewBox="0 0 128 128">
              <path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6v-11.4h11.3v-11.2h22.5v-11.3h13.5v22.5z"></path><path fill="#00AADA" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-72.2c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6000000000000001c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"></path><path fill="#28B8EB" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.4.1-.5.2z"></path><path fill="#028BB8" d="M18.7 71.8c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26h-85.1v-.1z"></path><path fill="#019BC6" d="M23.5 71.8c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1h-70.6z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M28.4 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zM39.6 41.5h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M39.6 52.7h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M50.9 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M50.9 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zM62.2 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M62.2 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M62.2 30.2h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M73.5 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#D4EEF1" d="M48.8 78.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M48.8 79.1c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .8-1.9 1.9-1.9M1.1 72.8h125.4c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.9 4.5-7.6 5.2"></path><path fill="#BFDBE0" d="M56 97.8c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6 6 13.6 10.7 27.5 10.8h3.1z"></path><path fill="#D4EEF1" d="M46.1 89.9c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.3 1.2 5.7 2.4 11.4 2.9z"></path>
            </svg>
            <div className="icon-text">Docker</div>
          </a>
          <a href="https://www.adobe.com/products/photoshop.html?red=a" target="_blank">
            <svg className="icon" title="photoshop-icon" alt="photoshop-icon" viewBox="0 0 128 128">
              <path fill-rule="evenodd" clip-rule="evenodd" fill="#80B5E2" d="M50.246 41.616c-3.682-.925-7.369-.628-11.26-.022 0 6.805-.014 13.427.037 20.05.002.339.511.929.841.974 4.243.573 8.463.619 12.431-1.315 4.105-2 6.196-6.182 5.654-11.092-.492-4.471-3.139-7.448-7.703-8.595zM127 63.963v-60.678c0-2.096.023-2.285-2.012-2.285h-121.509c-1.979 0-2.479.19-2.479 2.186v121.509c0 2.018.252 2.021 2.209 2.021 40.555.001 81.231-.009 121.786.037 1.573.002 1.995-.417 1.991-1.959-.054-20.277.014-40.556.014-60.831zm-70.648 5.84c-5.557 1.982-11.352 2.093-17.352 1.628v22.569h-11v-1.402c0-18.895-.087-37.788-.14-56.682-.006-1.569.243-2.327 2.011-2.507 8.332-.852 16.617-1.81 24.902.133 8.906 2.087 14.041 7.975 14.431 16.11.483 10.074-3.944 16.974-12.852 20.151zm44.31 12.754c-.424 5.771-3.678 9.56-9.015 11.392-7.142 2.452-14.245 1.883-21.225-.891-1.143-.455-1.364-1.031-.987-2.196.687-2.126 1.19-4.312 1.72-6.286 2.951.866 5.757 1.947 8.664 2.458 2.053.361 4.272.149 6.359-.178 1.871-.294 3.217-1.564 3.524-3.572.312-2.041-.303-3.809-2.105-4.895-1.432-.862-3.01-1.479-4.523-2.202-2.433-1.163-5.026-2.075-7.27-3.53-8.831-5.727-5.956-16.383-.063-20.396 3.153-2.146 6.642-3.098 10.377-3.229 4.393-.154 8.623.604 12.778 2.623l-2.195 7.789c-1.74-.616-3.36-1.416-5.07-1.734-2.029-.378-4.157-.589-6.205-.422-2.746.225-4.354 2.12-4.354 4.47 0 1.392.528 2.57 1.689 3.245 1.666.969 3.434 1.768 5.186 2.579 1.896.877 3.898 1.551 5.723 2.552 4.87 2.67 7.405 6.8 6.992 12.423z"></path>
            </svg>
            <div className="icon-text">Photoshop</div>
          </a>
          <a href="https://www.adobe.com/products/illustrator.html?sdid=KKQML&mv=search&ef_id=Cj0KCQjw-O35BRDVARIsAJU5mQWZc60PdmxgdEtc4b5ElIdQe1wucXGKZQUNYSNRsZPWwRfuilE27mEaAqqgEALw_wcB:G:s&s_kwcid=AL!3085!3!442365417809!e!!g!!illustrator&gclid=Cj0KCQjw-O35BRDVARIsAJU5mQWZc60PdmxgdEtc4b5ElIdQe1wucXGKZQUNYSNRsZPWwRfuilE27mEaAqqgEALw_wcB" target="_blank">
            <svg className="icon" title="illustrator-icon" alt="illustrator-icon" viewBox="0 0 128 128">
              <path fill-rule="evenodd" clip-rule="evenodd" fill="#FAA625" d="M47.955 69h15.371c-2.646-9-5.252-17.32-7.816-25.776-2.488 8.486-5.012 16.776-7.555 25.776zM124.112 1h-121.239c-2.186 0-1.873.476-1.873 2.585v121.394c0 2.107-.313 2.021 1.719 2.021h121.547c2.031 0 2.734.086 2.734-2.022v-121.239c0-2.263-.702-2.739-2.888-2.739zm-46.814 95c-1.637 0-3.28-.133-4.909-.016-1.175.088-1.568-.406-1.881-1.426-1.514-4.931-3.123-9.86-4.638-14.79-.305-.992-.741-1.354-1.816-1.341-5.523.064-11.049.058-16.573-.007-1.163-.014-1.698.296-2.03 1.45-1.406 4.904-2.944 9.768-4.365 14.667-.308 1.062-.776 1.433-1.904 1.404-3.318-.083-6.641-.032-10.274-.032.959-3.045 1.829-5.861 2.729-8.665 5.514-17.2 11.047-34.4 16.521-51.611.382-1.198.913-1.567 2.143-1.54 3.886.086 7.775.022 11.663 0 .727-.005 1.223.038 1.489.864 6.505 20.116 13.033 40.356 19.555 60.47.028.091.01.573.025.573h-5.735zm20.702 0h-12v-45h12v45zm-6.35-51.071c-3.665-.005-6.289-2.528-6.314-6.07-.024-3.532 2.707-6.159 6.406-6.163 3.728-.004 6.355 2.537 6.384 6.171.026 3.545-2.667 6.068-6.476 6.062z"></path>
            </svg>
            <div className="icon-text">Illustrator</div>
          </a>
        </div>
        <div className="card">
          <div className="container">
            <u><h1 className="resume-content-title">Education</h1></u>
            <a  className="work-titles" href="https://www.uni.edu" target="_blank">
              <img className="icon-uni" src={uniIcon}/>
              <h2 className="company-title">UNIVERSITY OF NORTHERN IOWA</h2>
            </a>
            <h3 className="job-title">Bachelor Of Arts In Interactive Digital Studies</h3>
            <h3>2014 - 2018</h3>
            <ul>
              <li>Emphasis in Computer Science | Imaging | Visualizations</li>
              <li>Code For Cedar Valley Member</li>
              <li>Threehouse Leadership Team Member</li>
            </ul>
          </div>
          <div className="container">
            <u><h1 className="resume-content-title">Work Experience</h1></u>
            <a  className="work-titles" href="https://www.jackhenry.com/pages/default.aspx" target="_blank">
              <img className="icon-jha" src={jhaIcon}/>
              <h2 className="company-title">JACK HENRY & ASSOCIATES INC.</h2>
            </a>
            <h3 className="job-title">UX Web Developer Apprentice</h3>
            <h3>DEC 2018 - MAR- 2020</h3>
            <ul>
              <li>Wrote and maintained well-designed code in collaboration with development team to add functionality, fix bugs, update styling, and improve usability of application.</li>
              <li>Coordinated with development team to expand application functionality and improve usability.</li>
              <li>Developed Polymer-driven website with the use of Web Components, CSS, and HTML.</li>
              <li>Adapted GitHub to manage software and practiced collaborative code review.</li>
              <li>Implemented REST APIs to provide data to application. Solved problems presented by application linter to adhere to strict programming guidelines.</li>
              <li>Executed local web servers and Firebase to develop applications locally.</li>
              <li>Mapped out file structure of web applications using web component.</li>
              <li>Applied responsive design techniques on web applications to enhance user experience for users with a varying degree of screen sizes</li>
              <li>Communicated with design team to enforce accessibility practices into platform web apps</li>
              <li>Designed web applications that complied with company programming guidelines and meet end user needs.</li>
              <li>Employed waterfall-based methodology in combination with Waffle and JIRA to delegate and planwork.</li>
            </ul>
            <a className="work-titles" href="https://www.jackhenry.com/pages/default.aspx" target="_blank">
              <img className="icon-jha" src={jhaIcon}/>
              <h2 className="company-title">JACK HENRY & ASSOCIATES INC.</h2> 
            </a>
            <h3 className="job-title">UX Web Developer & Design Intern</h3>
            <h3>May 2017 - Dec 2018</h3>
            <ul>
              <li>Independently developed a Polymer-driven Web App as an On-boarding Project that keeps track of a list of unique user profiles through a real-time database</li>
              <li>Designed On-boarding Project with responsive design and accessibility practices in HTML & CSS</li>
              <li>Implemented On-boarding Project with web component structure and embedded linter testing.</li>
            </ul>
            <a className="work-titles" href="https://www.jackhenry.com/pages/default.aspx" target="_blank">
              <img className="icon-uni" src={uniIcon}/>
              <h2 className="company-title">UNIVERSITY OF NORTHERN IOWA ROD LIBRARY</h2> 
            </a>
            <h3 className="job-title">Assistant Web Developer</h3>
            <h3>AUG 2016 - MAY 2018</h3>
            <ul>
              <li>Collaborated with two co-workers to manage upkeep of UNI library website.</li>
              <li>Applied graphic design skill and UX experimentation with HTML & CSS.</li>
              <li>Utilized Drupal & design skill to develop a website for the college of education.</li>
            </ul>
          </div>
        </div>
      </body>
      <footer>
        <form action="https://formspree.io/xgenbezd" method="POST">
          <h2 className="contact-title">Lets Get in Touch!</h2><div className="line"></div>
          <label><IoMdMail/>
            <input type="text" placeholder="Your Email" name="_replyto"></input>
          </label>
          <label><MdMessage/>
            <textarea placeholder="Your Message"  name="message"></textarea>
          </label>
          <button type="submit">SEND</button>
        </form>
      </footer>
    </div>
  );
}

export default App;
