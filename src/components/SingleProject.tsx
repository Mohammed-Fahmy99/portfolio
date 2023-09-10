
type singleProjectProps = {
    img:string,
    title:string
}

function SingleProject({img, title}:singleProjectProps) {
  return (
    <div className="flex flex-col justify-center items-center group relative shadow-xl shadow-gray-400 rounded-md ">
      <img src={img} alt="a" className=" object-cover w-full h-full rounded-md rounded-b-none"/>
      <h4 className="tracking-wider p-2">{title.toLocaleUpperCase()}</h4>
      <div className="w-full h-full hidden group-hover:flex bg-gradient-to-r from-gray-200 to-blue-800 absolute top-0 right-0 opacity-80 justify-center items-center rounded-md">
        <a href="#" className="tracking-wider p-3 rounded-lg bg-white text-gray-700 font-bold">More Info</a>
      </div>
    </div>
  )
}

export default SingleProject
