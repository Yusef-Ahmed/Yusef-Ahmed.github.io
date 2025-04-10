import { Suspense, useState } from "react";
import cv from "../../assets/Youssef_Ahmed's_CV.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import ResumeLoading from "../components/ResumeLoading";

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
    <div className="flex flex-col items-center mt-8 gap-4">
      <motion.a
        initial={{ y: 0 }}
        animate={{ y: -10 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        whileHover={{
          y: -5,
          transition: {
            duration: 0.5,
            repeat: 0,
          },
        }}
        href={cv}
        download="Youssef_Ahmed's_CV.pdf"
        className="bg-indigo-600 p-3 rounded-sm text-lg w-fit active:scale-125"
      >
        Download CV
      </motion.a>
      <Document
        className="mx-auto w-fit h-fit"
        file={cv}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<ResumeLoading />}
      >
        {Array.from(new Array(numPages), (el, index) => {
          const w = window.innerWidth;
          return (
            <Page
              width={w < 1024 ? w * 0.9 : w * 0.6}
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              className="mb-2"
            />
          );
        })}
      </Document>
    </div>
  );
}
