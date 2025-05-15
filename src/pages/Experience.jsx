import ExperienceCard from "../components/ExperienceCard";
import WAYZ from "../../assets/wayz.png";
import TAZA from "../../assets/taza.jpeg";
import REMOTASKS from "../../assets/remotasks.jpeg";

const data = [
  {
    logo: WAYZ,
    position: "Freelancer",
    link: "http://157.175.46.234:4173",
    company: "@WAYZ",
    interval: "Apr 2025 - May 2025",
    place: "Saudi Arabia, Remote",
    description: `Developed a full-stack scooter rental web 
    platform using React.js and Node.js with TypeScript, 
    creating a fully responsive and device-compatible interface. 
    The application was containerized with Docker, using Nginx 
    to serve the frontend as static files and integrating a 
    PostgreSQL database for the backend. I refactored the codebase 
    to fix database schema issues and resolve various functional
    bugs, improving overall system stability. Additionally, I implemented a
    file upload module that allows users to upload files through the
    frontend and receive secure, backend-generated access links. To enhance
    user experience and error management, I developed a response interceptor
    that gracefully handles backend errors using an enum-based feedback
    system, ensuring clear and consistent communication throughout the
    application.`,
    skills: [
      "Full-Stack Development",
      "React.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "RESTful API",
      "Responsive Web Design",
      "Bug Fixing",
      "Code Refactoring",
      "Database Schema Design & Optimization",
      "Error Handling",
      "File Upload Handling",
      "Docker",
      "Nginx",
      "Git",
      "Link & QR Generation",
    ],
  },
  {
    logo: TAZA,
    position: "Full-Stack developer",
    link: "https://taza-app.com",
    company: "@TAZA",
    interval: "Jan 2025 - May 2025",
    place: "Cairo, Remote",
    description: `As a part-time full-stack developer for a 
    fresh produce delivery platform, I worked with NestJS 
    on the backend and React Native on the frontend to deliver 
    a seamless cross-platform experience. I refactored the 
    codebase by extracting reusable components and improving 
    the overall project structure, which enhanced scalability 
    and maintainability. I added new features and fixed bugs 
    to improve functionality and user experience. Using React 
    Query, I implemented efficient data fetching and state 
    management, and applied design patterns to ensure clean, 
    maintainable, and robust code across the stack.`,
    skills: [
      "Full-Stack Development",
      "NestJS",
      "React Native",
      "React Query",
      "Cross-Platform Mobile Development",
      "Reusable Component Design",
      "Code Refactoring",
      "Project Structure Optimization",
      "Bug Fixing",
      "Feature Development",
      "State Management",
      "Efficient Data Fetching",
      "Design Patterns",
      "Code Maintainability",
    ],
  },
  {
    logo: REMOTASKS,
    position: "Software Engineer",
    link: "https://www.remotasks.com",
    company: "@Remotasks & scale AI",
    interval: "Jun 2023 – Jul 2024",
    place: "San Francisco, Remote",
    description: `As part of a generative AI training initiative, 
    I solve coding challenges in C++, Python, and Java to help refine 
    and improve the model’s ability to generate high-quality code. My 
    work focuses on efficient algorithm development, solution optimization, 
    and in-depth problem-solving. I write, refine, and evaluate functional, 
    high-performance code to enhance the model’s output quality, while also 
    analyzing and explaining various approaches to maximize its effectiveness 
    in handling diverse programming tasks.`,
    skills: [
      "C++",
      "Python",
      "Java",
      "Algorithm Development",
      "Data structures",
      "Problem Solving",
      "Code Optimization",
      "High-Performance Computing",
      "Code Evaluation",
      "Generative AI Training",
      "Multi-language Programming",
      "Technical Analysis",
      "Solution Explanation",
      "Model Fine-Tuning Support",
    ],
  },
];

function Experience() {
  return (
    <>
      {data.map((item, index) => (
        <ExperienceCard
          key={index}
          logo={item.logo}
          position={item.position}
          link={item.link}
          company={item.company}
          interval={item.interval}
          place={item.place}
          description={item.description}
          skills={item.skills}
        />
      ))}
    </>
  );
}

export default Experience;
