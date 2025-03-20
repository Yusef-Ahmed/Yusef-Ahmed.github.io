import linkedin from "../../assets/linkedin.png";
import gmail from "../../assets/gmail.png";
import github from "../../assets/github.png";
import codeforces from "../../assets/codeforces.png";
import me from "../../assets/me2.jpg";
import { TypeAnimation } from "react-type-animation";

const contacts = [
  { link: "https://www.linkedin.com/in/yussif-ahmed", src: linkedin },
  { link: "mailto:yousseffcai@gmail.com", src: gmail },
  { link: "https://github.com/Yusef-Ahmed", src: github },
  { link: "https://codeforces.com/profile/TANJIR0U", src: codeforces },
];

function Home() {
  return (
    <main className="lg:mx-5 lg:mt-18 mt-8 flex justify-between">
      <section className="lg:w-4/7 flex flex-col justify-between h-[70vh]">
        <div>
          <div className="flex flex-col justify-center items-center lg:items-baseline gap-2 font-medium">
            <h1 className="lg:text-5xl text-3xl">Hi</h1>
            <div className="flex flex-row gap-4">
              <h1 className="text-2xl lg:text-5xl">I'm</h1>
              <h1 className="text-2xl lg:text-5xl text-purple-600 font-bold">
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
              className="lg:text-5xl text-xl inline-block"
              repeat={Infinity}
            />
          </div>
          <p className="text-justify text-xs md:text-xl mt-6 text-gray-400 w-full md:w-5/6">
            I'm an obsessed Software Engineer and Full-Stack Web Developer with
            a strong background in competitive programming, holding an{" "}
            <span className="text-blue-600 font-semibold underline hover:text-blue-500">
              <a
                target="_blank"
                href={"https://codeforces.com/profile/TANJIR0U"}
                title="CodeForces Profile"
              >
                Expert
              </a>
            </span>{" "}
            rating on CodeForces and have qualified for the Arab Collegiate
            Programming Contest (ACPC) twice in a row.
          </p>
          <p className="mt-5 text-xs md:text-lg text-gray-300">
            At the end,
            <span className="text-purple-500 uppercase font-bold ml-1">
              <TypeAnimation
                sequence={[1000, "Obsession is gonna beat talent every time"]}
                wrapper="span"
                preRenderFirstString={true}
                className="text-xs md:text-lg"
              />
            </span>
          </p>
        </div>
        <div className="gap-10 flex">
          {contacts.map((contact) => (
            <a key={contact.link} target="_blank" href={contact.link}>
              <img
                className="lg:w-12 w-9 duration-200 hover:-translate-y-2"
                src={contact.src}
              />
            </a>
          ))}
        </div>
      </section>
      <section className="lg:h-1/2 lg:w-2/7 lg:-mt-10">
        <img className="rounded-2xl hidden lg:block" src={me} />
      </section>
    </main>
  );
}

export default Home;
