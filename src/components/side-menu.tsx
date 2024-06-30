import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { useState } from "react";

export function SideMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

//   const downloadPdf = () => {
//     fetch('Pay-Me-Or-Else-Arabic-v1.0.pdf').then(response => {
//         response.blob().then(blob => {
//             const fileURL = window.URL.createObjectURL(blob);
//             let alink = document.getElementById('pdf-file');
//             alink?.href = fileURL;
//             alink.download = 'SamplePDF.pdf';
//             alink.click();
//         })
//     })
// }

  return (
    <div>
      <AiOutlineMenu
        className="sm:hidden absolute top-4 right-4 cursor-pointer z-50"
        onClick={handleNav}
      />

      {isNavOpen && (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center gap-6 items-center z-10 ">
          <a
          onClick={handleNav}
            href="#main"
            className="flex justify-center items-center gap-2 p-4 bg-gray-100 rounded-full shadow-lg shadow-gray-400 w-3/4 hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span>Home</span>
          </a>
          <a
          onClick={handleNav}
            href="#projects"
            className="flex justify-center items-center gap-2 p-4 bg-gray-100 rounded-full shadow-lg shadow-gray-400 w-3/4 hover:scale-110 ease-in duration-200 "
          >
            <GrProjects size={20} />
            <span>Works</span>
          </a>
          <a
          onClick={handleNav}
            href="#main"
            className="flex justify-center items-center gap-2 p-4 bg-gray-100 rounded-full shadow-lg shadow-gray-400 w-3/4 hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span>Projects</span>
          </a>
          <a
          onClick={handleNav}
            href="#main"
            className="flex justify-center items-center gap-2 p-4 bg-gray-100 rounded-full shadow-lg shadow-gray-400 w-3/4 hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span>Resume</span>
          </a>
          <a
          onClick={handleNav}
            href="#main"
            className="flex justify-center items-center gap-2 p-4 bg-gray-100 rounded-full shadow-lg shadow-gray-400 w-3/4 hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span>contact</span>
          </a>
        </div>
      )}

      <div className="hidden sm:flex flex-col gap-2 fixed top-1/4 pl-4 z-[99]" >
        <a
          href="#main"
          className=" p-4 bg-gray-100 rounded-full shadow-lg shadow-gray-400  hover:scale-110 ease-in duration-300"
          >
          <AiOutlineHome size={20} />
        </a>
        <a
          href="#projects"
          className=" p-4 bg-gray-100 rounded-full shadow-lg shadow-gray-400  hover:scale-110 ease-in duration-300 "
        >
          <GrProjects size={20} />
        </a>
        <a
          href="#time-line"
          className=" p-4 bg-gray-100 rounded-full shadow-lg shadow-gray-400  hover:scale-110 ease-in duration-300"
        >
          <AiOutlineProject size={20} />
        </a>
        <a
          href='/public/Mohammed Fahmy Resume.pdf' download
          id="pdf-file"
          className=" p-4 bg-gray-100 rounded-full shadow-lg shadow-gray-400  hover:scale-110 ease-in duration-300"
        >
          <BsPerson size={20} />
        </a>
        <a
          href="#contact"
          className=" p-4 bg-gray-100 rounded-full shadow-lg shadow-gray-400  hover:scale-110 ease-in duration-300"
        >
          <AiOutlineMail size={20} />
        </a>
      </div>
    </div>
  );
}

