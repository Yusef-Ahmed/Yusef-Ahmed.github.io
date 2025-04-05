import { Suspense, useState } from "react";
import cv from "../../assets/Youssef_Ahmed's_CV.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Resume() {
  const [numPages, setNumPages] = useState();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      }
    >
      <div className="flex flex-col items-center mt-5 gap-4">
        <a
          href={cv}
          download="Youssef_Ahmed's_CV.pdf"
          className="bg-indigo-600 p-3 rounded-sm text-lg animate-[bounce_1.6s_infinite] hover:animate-none w-fit"
        >
          Download CV
        </a>
      <Document
        className="mx-auto w-fit h-fit"
        file={cv}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            width={window.innerWidth * 0.6}
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            className="mb-2"
          />
        ))}
      </Document>
      </div>
    </Suspense>
  );
}
