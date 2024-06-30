import { FaGithub } from "react-icons/fa";

type singleProjectProps = {
  img: string;
  title: string;
};

function SingleProject({ img, title }: singleProjectProps) {
  return (
    <div className="w-fit flex flex-col justify-center items-center group relative shadow-xl shadow-gray-400 rounded-mdo">
      <img
        width={400}
        height={400}
        src={img}
        alt={title}
        className=" object-cover  rounded-md rounded-b-none"
      />
      <h3 className="tracking-wider p-2">{title.toLocaleUpperCase()}</h3>
      <div className="w-full h-full hidden group-hover:flex  bg-black absolute   opacity-80 justify-center items-center rounded-md">
        <a href="https://github.com/mohammedfahmy">
          <FaGithub color="white" size={40} className="hover:scale-150 transition-all"/>
        </a>
      </div>
    </div>
  );
}

export default SingleProject;
