import { SideMenu } from "@components/side-menu";
import Hero from "@components/Hero";
import TimeLineWork from "@components/TimeLineWork";
import Projects from "@components/Projects";
import Contact from "@components/Contact";

function App() {
  return (
    <>
      <SideMenu />
      <main className="flex flex-col gap-16 flex-[10]">
        <Hero />
        <div className="flex flex-col py-4 px-4 sm:px-24 gap-8">
          <TimeLineWork />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
}

export default App;
