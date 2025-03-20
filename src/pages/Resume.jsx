import { Suspense } from "react";
import cv from "../../assets/Youssef_Ahmed's_CV.pdf";

export default function Resume() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      }
    >
      <div className="flex justify-center mt-2">
        <iframe src={cv} className="lg:w-3/5 lg:h-[2200px]"></iframe>
      </div>
    </Suspense>
  );
}
