import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.svg";
import { Case, File, Github, HomeIcon, User } from "../components/Icons";

const headers = [
  { title: "Home", to: "/", component: <HomeIcon /> },
  { title: "Projects", to: "/projects", component: <Github /> },
  { title: "Experience", to: "/experience", component: <Case /> },
  { title: "Resume", to: "/resume", component: <File /> },
  { title: "About", to: "/about", component: <User /> },
];

function Header() {
  return (
    <header className="border-b-2 border-gray-500 py-5 px-20 flex">
      <Link to="/" className="will-change-transform duration-300 hover:-translate-y-1 hover:scale-125">
        <img src={logo} className="h-12" />
      </Link>
      <div className="flex m-auto gap-6 mt-2">
        {headers.map((header) => (
          <section className="flex gap-1 text-xl will-change-transform duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer">
            {header.component}
            <NavLink to={header.to}>{header.title}</NavLink>
          </section>
        ))}
      </div>
    </header>
  );
}

export default Header;
