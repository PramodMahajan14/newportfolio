import React, { useState, useEffect } from "react";
import ServiceCard from "./Cards/ServiceCard";
import { Services } from "../Helper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  "http://cdnjs.cdnjs.cloudflare.com/ajax/libs/pdf.js/9.1.1/pdf.worker.js";

const pdffile = "../Assets/Pramod Mahajan-resume.pdf";
const Service = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const updateVisibleCards = () => {
    const width = window.innerWidth;

    if (width >= 1024) {
      setVisibleCards(3);
    } else if (width >= 768) {
      setVisibleCards(2);
    } else {
      setVisibleCards(1);
    }
  };

  const preSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Services.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === Services.length - visibleCards;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const getVisibleServices = () => {
    return Services.slice(currentIndex, currentIndex + visibleCards).concat(
      Services.slice(
        0,
        Math.max(0, currentIndex + visibleCards - Services.length)
      )
    );
  };

  useEffect(() => {
    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="py-5  text-center lg:mb-18 px-2 dark:text-white w-full">
      <div className="flex flex-col items-center text-center justify-center m-auto h-1/3  ">
        <h1 className="font-semibold my-3 text-2xl md:text-4xl">What I Do</h1>

        <div className="max-w-[1000px] w-full  flex justify-center m-auto gap-2  px-3 relative  group">
          {getVisibleServices().map((service, index) => (
            <ServiceCard key={index} services={service} />
          ))}

          {/* Left Icon */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%]  -left-2 p-1 md:left-2 md:p-2 rounded-full text-white bg-slate-800 cursor-pointer">
            <FaChevronLeft onClick={preSlide} />
          </div>
          {/* Right Icon */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-2 p-1 md:right-2 md:p-2 rounded-full text-white  bg-slate-800 cursor-pointer">
            <FaChevronRight onClick={nextSlide} />
          </div>
        </div>
        <span className="flex items-center">
          {Services.map((curr) => (
            <p
              key={curr.id}
              className={`mx-2 rounded-full bg-white ${
                curr.id === currentIndex + 1 ? "p-[6px]" : "p-1"
              }`}
            ></p>
          ))}
        </span>
      </div>
      <h1 className="text-xl md:text-2xl my-10">Certifications</h1>
      <motion.div
        className="flex space-x-5 m-auto justify-between  lg:max-w-1/2 cursor-pointer"
        animate={{ x: [1000, -1000] }} // Moves from right to left
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear", // Smooth movement
        }}
      >
        <span className="px-3 p-2 bg-gray-200 rounded-md mx-2 flex-shrink-0 h-fit dark:bg-gray-900">
          Internship Completion - RedPositive services
        </span>
        <span className="px-3 p-2 bg-gray-200 rounded-md mx-2 flex-shrink-0 h-fi  dark:bg-gray-900">
          ReactJs - Namaste dev
        </span>
        <span className="px-3 p-2 bg-gray-200 rounded-md mx-2 flex-shrink-0 h-fi  dark:bg-gray-900">
          Internship Completion - Infobytes Technosys
        </span>
        <span className="px-3 p-2 bg-gray-200 rounded-md mx-2 flex-shrink-0 h-fi  dark:bg-gray-900">
          NodeJs - Udemy
        </span>
      </motion.div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
            <div className="overflow-y-auto max-h-96">
              <Document file={pdffile} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </div>
            <div className="flex justify-end">
              <button
                className="px-2 py-1 bg-red-500 text-white rounded"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
