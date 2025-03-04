import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import github from "../assets/github.png";
import me from "../assets/me.jpg";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <main className="mx-16 mt-28 flex justify-between">
      <section className="w-4/7">
        <div className="flex flex-col justify-center gap-2 font-medium">
          <h1 className="text-6xl">Hi</h1>
          <div className="flex flex-row gap-4">
            <h1 className="text-6xl ">I'm</h1>
            <h1 className="text-6xl text-purple-600 font-bold">
              {" "}
              Youssef Ahmed
            </h1>
          </div>
          <TypeAnimation
            sequence={[
              "A Software Engineer",
              2000,
              "A Full-Stack Developer",
              2000,
              "A Competitive Programmer",
              2000,
            ]}
            wrapper="span"
            speed={200}
            deletionSpeed={220}
            style={{ fontSize: "60px", display: "inline-block" }}
            repeat={Infinity}
          />
          {/* <h1 className="text-6xl">A Software Engineer</h1> */}
        </div>
        <p className="text-lg mt-8 text-gray-400">
          I'm an obsessed Software Engineer and Full-Stack Web Developer with a
          strong background in competitive programming, holding an{" "}
          <span className="text-blue-400 font-semibold uppercase">Expert</span>{" "}
          rating on{" "}
          <span className="text-blue-500 font-semibold underline">
            <a target="_blank" href={"https://codeforces.com/profile/TANJIR0U"}>
              CodeForces
            </a>
          </span>{" "}
          and have qualified for the Arab Collegiate Programming Contest (ACPC)
          twice in a row.
        </p>
        <p className="mt-5 text-lg text-gray-300">
          At the end,
          <span className="text-purple-500 uppercase font-bold ml-1">
            <TypeAnimation
              sequence={[1000, "Obsession is gonna beat talent every time"]}
              wrapper="span"
              preRenderFirstString={true}
            />
          </span>
        </p>
        <div className="mt-10 gap-10 flex">
          <a target="_blank" href="https://www.linkedin.com/in/yussif-ahmed">
            <img className="w-12" src={linkedin} />
          </a>
          <a target="_blank" href="mailto:yousseffcai@gmail.com">
            <img className="w-12" src={gmail} />
          </a>
          <a target="_blank" href="https://github.com/Yusef-Ahmed">
            <img className="w-12" src={github} />
          </a>
        </div>
      </section>
      <section className="h-1/2 w-2/7 -mt-7">
        <img className="rounded-2xl" src={me} />
      </section>
    </main>
  );
}

export default App;
