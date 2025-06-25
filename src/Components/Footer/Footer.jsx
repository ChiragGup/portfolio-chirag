import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div
      id="Contact"
      className="bg-[#465697] text-white py-10 px-6 md:py-12 md:px-24 flex flex-col md:flex-row justify-between items-center gap-8"
    >
      {/* Left Section */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">Contact</h1>
        <h3 className="text-sm md:text-xl font-normal">
          Feel free to reach out!
        </h3>
      </div>

      {/* Right Section */}
      <ul className="flex flex-col gap-4 text-sm md:text-lg">
        {/* Email */}
        <li className="flex items-center gap-3 hover:scale-105 duration-300">
          <a
            href="mailto:deepakrathour05tech@gmail.com"
            className="flex items-center gap-2 text-white hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineEmail size={25} />
            chiragupta07@gmail.com
          </a>
        </li>
        {/* LinkedIn */}
        <li className="flex items-center gap-3 hover:scale-105 duration-300">
          <a
            href="https://www.linkedin.com/in/chirag-gupta-3405132a2/"
            className="flex items-center gap-2 text-white hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin size={25} />
            LinkedIn Profile
          </a>
        </li>
        {/* GitHub */}
        <li className="flex items-center gap-3 hover:scale-105 duration-300">
          <a
            href="https://github.com/ChiragGup"
            className="flex items-center gap-2 text-white hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={25} />
            github.com/ChiragGup
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
