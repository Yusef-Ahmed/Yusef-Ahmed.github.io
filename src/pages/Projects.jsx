import { useEffect, useRef, useState } from "react";
import altImage from "../../assets/project-alt.jpeg";

const monthNames = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function Projects() {
  const repos = useRef([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      fetch("https://api.github.com/users/Yusef-Ahmed/starred")
        .then((res) => res.json())
        .then((data) => {
          repos.current = data.filter(
            (repo) => repo.owner.login === "Yusef-Ahmed"
          );
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-6xl -mt-10">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center">
      {repos.current.map((repo) => {
        let [year, month] = repo.created_at.split("-");
        month = monthNames[+month];
        return (
          <div
            className="m-5 lg:w-3/10 border-2 rounded-lg p-3 h-fit"
            key={repo.id}
          >
            <a href={repo.html_url} target="_blank">
              <header className="flex justify-between items-center font-semibold">
                <h1 className="text-2xl text-center">
                  {repo.name.replaceAll("_", " ")}
                </h1>
                <p>
                  {month} {year}
                </p>
              </header>
              {/* Todo: should be Gif of project in future */}
              <img className="my-2 rounded-sm h-1/3 w-full" src={altImage} />
            </a>
            <div>
              {repo.description.split("•").map((point) => (
                <div key={point} className="flex gap-2 mb-2">
                  <p className="text-3xl -mt-2">•</p>
                  <p className="text-md font-semibold">{point}.</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-5">
              {repo.topics.map((topic) => (
                <p key={topic} className="border p-1 rounded-md capitalize">
                  {topic}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
