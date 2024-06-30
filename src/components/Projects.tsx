import SingleProject from "@components/SingleProject";

function Projects() {
  return (
    <div id="projects" className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-3 ">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          voluptas sit consequuntur necessitatibus vel fuga architecto
          voluptatem beatae perspiciatis dolorum! Blanditiis unde est numquam
          accusamus enim neque ea, voluptatum illo.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12   ">
        <SingleProject
          img="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYnNpdGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
          title="test 1"
        />
        <SingleProject
          img="https://plus.unsplash.com/premium_photo-1683758344058-60a1506db480?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYnNpdGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
          title="test 2"
        />
        <SingleProject
          img="https://plus.unsplash.com/premium_photo-1681566925312-948c8a896b37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYnNpdGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
          title="test 3"
        />

        <SingleProject
          img="https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2Vic2l0ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
          title="test 4"
        />
 
      </div>
    </div>
  );
}

export default Projects;
