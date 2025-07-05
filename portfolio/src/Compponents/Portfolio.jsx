import React, { useState } from 'react';
import { Mail, Github, Linkedin ,Download, Instagram, PhoneCall} from 'lucide-react';
import GitHubStats from './GitHubStat';
import Skills from './skills';

import skillshare from '../assets/skillshare.png'
import caloricounter from '../assets/Caloricounter.png'
import profileImage from '../assets/ritikprotfolio.jpg'
import ImageComponent from './Image';
import SkillBridge from '../assets/SkillBridge.png'
import Resume from '../assets/RitikDethliya-Resume.pdf';
import Modesen from '../assets/Modesen.png'
import Navbar from './Navbar';
const projects = [
  {
    name: "CaloriSeeker",
    desc: "Scan food QR codes to get calories and a detailed health report.",
    tech: ["React", "HTML5 QR", "MongoDB"],
    live: "https://calari-counter.netlify.app/",
    code: "https://github.com/Ritik-Dethliya/CaloriSeeker",
    image:caloricounter
  },
  {
    name: "SkillShare",
    desc: "Skill-Share is a community-driven platform designed to help users share and enhance their skills through collaboration.",
    tech: ["React", "Talwind"],
    live: "https://skill-sharev8.netlify.app/",
    code: "https://github.com/kourjot/skill-share",
    image:skillshare
  },
  {
    name: "Modesen",
    desc: "ModeSens-Inspired Fashion E-commerce Platform.",
    tech: ["Html","Css","JavaScript","Firebase"],
    live: "https://modesensclone12.netlify.app/",
    code: "https://github.com/saurabhshambharkar/B42_WEB_001_Code-Crafters",
    image:Modesen
  },
  {
    name: "Cross-Generation SkillBridge",
    desc: "Cross-Generation – Bridging Ages with Tech.",
    tech: ["React","MongoDb","NodeJs","Express","Firebase","Sockets"],
    live: "https://cross-generation.netlify.app/",
    code: "https://github.com/Ritik-Dethliya/Cross-Generation",
    image:SkillBridge
  }
];
//https://cross-generation.netlify.app/
//https://modesensclone12.netlify.app/
export default function Portfolio() {
  const [project,setProject]=useState(null)
  const handelImage=(projectName)=>{
    setProject(projectName)
    console.log(projectName)
  }
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {project && <ImageComponent project={project}  setProject={setProject}/>}
      <Navbar/>
      
      <section id='hero' 
        className="min-h-screen my-15 flex flex-col items-center bg-cover bg-center justify-center text-center bg-white px-6 !background-repeat:no-repeat bg-[url('https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?ga=GA1.1.1012260453.1749411147&semt=ais_hybrid&w=740')]"
        >
        <img
            src={profileImage} 
            alt="Ritik Dethliya"
            className="w-64 h-64 rounded-full object-cover mb-4 border-4 border-gray-300"
        />
        <h1 className="text-4xl sm:text-7xl font-bold mb-4 text-white">Hi, I'm Ritik</h1>
        <p className="text-xl text-white mb-2">
          Full-Stack Developer | MERN
        </p>
        <p className="max-w-xl text-white font-bold">
          Ritik crafts dynamic web solutions by blending creativity and 
          code—specializing in JavaScript, React, Node.js, and MongoDB.
        </p>
      </section>

     
      <section id='about' className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          I'm Ritik Dethliya, currently pursuing a Software Development course. I enjoy solving real-world problems and building tools like CaloriSeeker to help people make better health choices. Whether it's crafting smooth UI or building secure APIs — I'm all in!
        </p>
        <div className='my-5'>
          <a href={Resume} 
            target='_blank'
            onClick={(e)=>{
              window.open(e.target.href)
            }             
            } 
            download 
            className="bg-gradient-to-r  from-blue-500 to-indigo-600 text-white  px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
          >
           Resume <Download className='inline'/>
        </a>
        </div>
        
      </section>

      <section id='projects' className="py-16 px-6 bg-cover bg-[url('')]">
      
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
              <h3 className="text-2xl font-bold mb-2">{proj.name}</h3>
              <img
                src={proj.image}
                alt={proj.name}
                className="w-full h-48 object-contain rounded-lg mb-4"
                
                />
              <p className="text-gray-600 mb-2">{proj.desc}</p>
              <p className="text-sm text-gray-500 mb-4">Tech: {proj.tech.join(', ')}</p>
              <div className="flex gap-4">
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noreferrer" className="text-blue-500 underline">
                    Live Demo
                  </a>
                )}
                <a href={proj.code} target="_blank" rel="noreferrer" className="text-blue-500 underline">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    
    <section id='skills'>
        <Skills/>
    </section>
    <section id='github-calander' className='p-2'>
        <GitHubStats/>
    </section>

    <section id='contact' className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-4">Let's Connect</h2>
      <p className="mb-6 text-gray-600">
        Wanna collaborate or just say hi? I’m always open to talk!
      </p>

      <div className="flex justify-center gap-6 text-blue-600 text-lg">
        <a href="mailto:dethliya73@example.com" className='shadow-md p-2'><Mail /></a>
        <a href="https://github.com/Ritik-Dethliya" className='shadow-md p-2' target="_blank" rel="noreferrer"><Github /></a>
        <a href="https://www.linkedin.com/in/ritik-dethliya-9aa0b6338/" className='shadow-md p-2' target="_blank" rel="noreferrer"><Linkedin /></a>
        <a href="https://www.instagram.com/__ritik_d" className='shadow-md p-2' target="_blank" rel="noreferrer"><Instagram /></a>
        <a href="https://wa.me/7869882466" className='shadow-md p-2' target="_blank" rel="noreferrer"><PhoneCall /></a>
      </div>
    </section>

      
    <footer className="text-center text-sm py-4 bg-white border-t border-gray-200">
      © 2025 Ritik Dethliya. All rights reserved.
    </footer>
  </div>
  );
}
 