import { TypeAnimation } from "react-type-animation";
import {FaFacebookF,FaLinkedinIn,FaTwitter,FaGithub} from "react-icons/fa"

function Hero() {
  return (
    <div id="main">
      <img
        src="https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
        alt="hero"
        className="w-full h-screen object-cover"
      />
      <div className="w-full h-screen bg-white/50 absolute top-0 right-0 flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
            I'm Mohammed Fahmy
          </h1>
          <h2 className="text-2xl sm:3xl text-gray-800">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "I'm a Frontend developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "I'm a Frontend engineer",
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
        </div>
        <div className="flex gap-6">
            <FaFacebookF/>
            <FaLinkedinIn/>
            <FaGithub/>
            <FaTwitter/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
