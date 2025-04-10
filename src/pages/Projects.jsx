import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useLoaderData } from "react-router";
import Card from "../components/Card";

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
  const data = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((repo, index) => {
        let [year, month] = repo.created_at.split("-");
        month = monthNames[+month];
        return <Card month={month} year={year} repo={repo} index={index} />;
      })}
    </div>
  );
}
