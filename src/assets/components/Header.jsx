import React, { useState } from "react";
import logo from "../images/logo.webp";
import phone from "../images/phone.webp";

function Header() {
    const [open, setOpen] = useState(false);
    {
      open
        ? document.body.classList.add("overflow-hidden")
        : document.body.classList.remove("overflow-hidden");
    } 
  return (
    <>
      <div className="max-w-[1240px] mx-auto px-3 w-full flex flex-col min-h-[781px] min-[1440px]:min-h-screen">
        {/* navbar */}
        <nav className="h-[101px] min-[1200px]:pr-[78px] flex items-end">
          <div className="h-[60px] flex justify-between w-full">
            <div className="flex">
              <ul className="flex items-center">
                <li>
                  <img
                    className="w-[75px] h-[50px] min-[450px]:w-[91px] min-[450px]:h-[60px] z-10 relative"
                    src={logo}
                    alt="logo"
                  />
                </li>
                <li className="hidden min-[850px]:block">
                  <a
                    className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal ml-[33px] min-[992px]:ml-[65px] relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
                    href="#"
                  >
                    Our Services
                  </a>
                </li>
              </ul>
              <ul className="ml-[33px] min-[992px]:ml-[65px] min-[1200px]:ml-[135px] flex gap-[33px] items-center">
                <li className="hidden min-[850px]:block">
                  <a
                    className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
                    href=""
                  >
                    About
                  </a>
                </li>
                <li className="hidden min-[850px]:block">
                  <a
                    className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
                    href=""
                  >
                    Blog&News
                  </a>
                </li>
                <li className="hidden min-[850px]:block">
                  <a
                    className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
                    href=""
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <ul className="flex gap-[30px]">
                <li className="hidden min-[850px]:block">
                  <a
                    className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
                    href=""
                  >
                    Account
                  </a>
                </li>
                <li className="w-[1px] h-[19px] bg-[#DAD8D8] hidden min-[850px]:block"></li>
                <li>
                  <ul className="gap-[6px] items-center hidden min-[850px]:flex">
                    <img
                      className="w-[20px] h-[20px]"
                      src={phone}
                      alt="phone"
                    />
                    <li>
                      <a
                        className="text-black font-poppins text-base not-italic font-semibold leading-normal"
                        href="tel:+2349067322844"
                      >
                        +2349067322844
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* open/close navbar button */}
              <div
                className={`flex w-[30px] min-[400px]:w-[35px] h-[25px] duration-300 flex-col min-[850px]:hidden items-center justify-between cursor-pointer relative z-10`}
                onClick={() => setOpen(!open)}
              >
                <span
                  className={`w-full h-[5px] duration-300 bg-black rounded ${
                    open == false ? "" : "rotate-45"
                  }`}
                ></span>
                <span
                  className={`w-full h-[5px] duration-300 bg-black rounded ${
                    open == false ? "" : "rotate-[135deg] translate-y-[-20px]"
                  }`}
                ></span>
                <span
                  className={`w-full h-[5px] duration-300 bg-black rounded ${
                    open == false ? "" : "hidden"
                  }`}
                ></span>
              </div>
            </div>
          </div>
        </nav>
        {/* page */}
        <ul className={`w-full h-full fixed flex min-[850px]:hidden justify-center items-center flex-col gap-10 bg-white z-[5] left-[-100%] duration-300 ${open == false ? "":"left-[0%]"}`}>
          <li>
            <a
              className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal min-[992px]:ml-[65px] relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
              href="#"
            >
              Our Services
            </a>
          </li>
          <li>
            <a
              className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
              href=""
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
              href=""
            >
              Blog&News
            </a>
          </li>
          <li>
            <a
              className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
              href=""
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="text-black font-poppins text-[15px] not-italic font-semibold leading-normal relative after:absolute after:h-[2px] duration-300 after:w-[0%] hover:after:w-[75%] after:bg-[#B00000] after:left-[50%] after:duration-300 hover:after:left-[13%] after:bottom-[-4px] after:rounded-[10px]"
              href=""
            >
              Account
            </a>
          </li>
          <li>
            <ul className="gap-[6px] items-center flex">
              <img className="w-[20px] h-[20px]" src={phone} alt="phone" />
              <li>
                <a
                  className="text-black font-poppins text-base not-italic font-semibold leading-normal"
                  href="tel:+2349067322844"
                >
                  +2349067322844
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
