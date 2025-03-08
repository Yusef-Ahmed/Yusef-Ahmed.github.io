import { Link } from "react-router";
import Header from "./Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-8xl font-bold">404</h1>
        <h2 className="text-xl">Page Not Found</h2>
        <Link
          href="/"
          className="bg-blue-700 p-3 rounded-md mt-10 hover:bg-blue-600 font-semibold duration-200 hover:-translate-y-1"
        >
          Back to home page
        </Link>
      </div>
    </>
  );
}
