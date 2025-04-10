// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "motion/react";
// import altImage from "../../assets/project-alt.jpeg";
import { useRef } from "react";

export default function Card({ repo, month, year, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={isInView ? { opacity: 1.5, x: 0 } : {}}
      transition={{ type: "spring", duration: 2,delay: index * 0.5 }}
      ref={ref}
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
        <img className="my-2 rounded-sm h-1/3 w-full" src={repo.image} />
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
    </motion.div>
  );
}
