import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "motion/react";

function ExperienceCard({
  logo,
  position,
  link,
  company,
  interval,
  place,
  description,
  skills,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ type: "spring", duration: 2 }}
      ref={ref}
      className="border rounded md:p-10 p-5 lg:mx-10 mx-5 my-10 flex flex-col gap-5"
    >
      <header className="flex md:flex-row flex-col gap-10 items-center">
        <img className="bg-white rounded w-28" src={logo} loading="lazy" />
        <div className="flex flex-col gap-5 w-full">
          <div className="flex md:flex-row flex-col gap-5 items-center font-semibold">
            <h1 className="md:text-5xl text-3xl">{position}</h1>
            <motion.a
              animate={{ y: [0, -7, 0, -7, 0] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
              }}
              href={link}
              target="_blank"
              className="md:text-3xl text-2xl underline text-blue-500 hover:text-blue-600 underline-offset-8 will-change-transform"
            >
              {company}
            </motion.a>
          </div>
          <div className="flex md:flex-row flex-col md:gap-10 items-center gap-2 text-xl">
            <h2>{interval}</h2>
            <p>{place}</p>
          </div>
        </div>
      </header>
      <p className="md:text-xl text-lg text-gray-300 text-start leading-8">{description}</p>
      <div className="flex flex-wrap gap-5 md:justify-start justify-center">
        {skills.map((skill) => (
          <p
            key={skill}
            className="md:text-base text-sm border border-gray-400 p-2 rounded-md capitalize hover:-translate-y-1 duration-100 cursor-default"
          >
            {skill}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export default ExperienceCard;
