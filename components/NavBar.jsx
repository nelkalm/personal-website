import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-30 shadow-xl z-[100]"
          : "fixed w-full h-30 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="ml-10 mt-5 mb-5">
          <Link href="/">
            <h2>Nelson Lu</h2>
          </Link>
          <p>Aspiring Software Developer</p>
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 mr-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <MdMenu size={30} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] pg-10 ease-in duration-500 p-8"
              : "fixed left-[-100%] top-0 pg-10 ease-in duration-500 p-8"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div>
                <Link href="/">
                  <h2>Nelson Lu</h2>
                </Link>
                <p>Aspiring Software Developer</p>
              </div>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={handleNav}
              >
                <MdClose size={30} />
              </div>
            </div>
            <br />
            <div className="py-4 flex-col">
              <ul className="uppercase">
                <Link
                  onClick={() => {
                    setNav(false);
                  }}
                  href="/"
                >
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link
                  onClick={() => {
                    setNav(false);
                  }}
                  href="/#about"
                >
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link
                  onClick={() => {
                    setNav(false);
                  }}
                  href="/#projects"
                >
                  <li className="py-4 text-sm">Projects</li>
                </Link>
                <Link
                  onClick={() => {
                    setNav(false);
                  }}
                  href="/#contact"
                >
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#808000]">
                  Connect with me!
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaEnvelope />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
