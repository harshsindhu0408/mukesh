import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../components/common/Footer";

const Home = () => {
  const [mainSectionClass, setMainSectionClass] = useState("");
  const [amount, setAmount] = useState(0);

  const decrementHandler = () => {
    amount >= 100 ? setAmount(amount - 100) : setAmount(0);
  };

  const incrementHandler = () => {
    setAmount(amount + 100);
  };

  useEffect(() => {
    const determineMainSectionClass = () => {
      const isSmallScreen = window.innerWidth < 1600;
      return isSmallScreen ? "mainSection2" : "mainSection";
    };

    const handleResize = () => {
      setMainSectionClass(determineMainSectionClass());
    };

    setMainSectionClass(determineMainSectionClass());

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`scroll-smooth flex flex-col items-center justify-start`}>
      <div className={`w-full flex flex-col justify-start ${mainSectionClass} `}>

        <div className="flex flex-col items-center justify-center sm:flex-row md:flex-row lg:flex-row">
          <div className="z-10 flex items-center justify-between w-full sm:w-8/12 md:w-8/12 lg:w-8/12 mt-4 py-4 px-8">
            {/* Circle icon */}
            <div className="rounded-full flex items-center justify-center bg-white w-[44px] h-[44px]">
              {" "}
              <FaArrowLeft />{" "}
            </div>
            <h2 className="ml-4 sm:ml-0 md:ml-0 lg:ml-0 text-center font-Darker font-bold text-indigo-500 text-2xl w-full">
              Simulador
            </h2>
          </div>
        </div>

        {/* Add amount section on */}
        <div className="mt-4 flex items-center justify-center sm:mt-32">
          <div className="flex flex-col sm:w-10/12 xl:items-end sm:items-center justify-center">
            <div className="w-full lg:w-8/12 xl:w-6/12">
              <h3 className="text-violet-900 w-full drop-shadow-lg md:w-8/12 h-auto text-5xl font-extrabold font-['Darker Grotesque'] leading-10 overflow-hidden">
                Quanto você gostaria de ganhar por mês?
              </h3>
              <div className="w-full md:w-6/12 overflow-hidden font-semibold h-auto text-violet-900 text-2xl font-['Inter'] mt-6 leading-7">
                Você pode ganhar mais conforme a jornada, conforme sua
                experiência.
              </div>

              <div className="flex flex-col items-start mt-4 justify-center">
                {/* Button div */}
                <div className="flex flex-row items-center xl:w-6/12 sm:w-full h-28 bg-white rounded-full justify-between px-12">
                  {/* Subtract (-) button */}
                  <button
                    onClick={decrementHandler}
                    className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center "
                  >
                    <RiSubtractFill color="blue" fontSize="2em" />
                  </button>

                  {/* Amount div */}
                  <div className="text-violet-900 text-5xl font-extrabold font-['Darker Grotesque'] overflow-hidden">
                    R$ {amount}
                  </div>

                  {/* Subtract (-) button */}
                  <button
                    onClick={incrementHandler}
                    className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center "
                  >
                    <IoMdAdd color="blue" fontSize="2em" />
                  </button>
                </div>

                {/* Continue button */}
                <button className="bg-indigo-500 font-['Darker Grotesque'] text-white text-xl xl:w-6/12 sm:w-full rounded-full mt-8 py-3 ">
                  <div className="flex flex-row items-center justify-center gap-4">
                    Continue <FaArrowRight />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
