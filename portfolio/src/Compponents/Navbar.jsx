import { useState } from "react";

function Navbar() {
    const [isOpen,setOpen]=useState(false)
    function toggle(){
        setOpen(!isOpen)
    }
    return (  
         <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyPortfolio</h1>

      
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">AboutMe</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        <button
          onClick={toggle}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 font-medium text-gray-700 bg-white shadow-md">
          <li><a href="#hero" onClick={toggle} className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" onClick={toggle} className="hover:text-blue-500">AboutMe</a></li>
          <li><a href="#projects" onClick={toggle} className="hover:text-blue-500">Projects</a></li>
          <li><a href="#skills" onClick={toggle} className="hover:text-blue-500">Skills</a></li>
          <li><a href="#contact" onClick={toggle} className="hover:text-blue-500">Contact</a></li>
        </ul>
      )}
    </nav>
    );
}

export default Navbar
;