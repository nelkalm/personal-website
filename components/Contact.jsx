import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import contactImg from "../public/contact-me.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <h3 className="uppercase text-xl tracking-widest text-[#808000]">
          Contact me
        </h3>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Nelson Lu</h2>
                <p className="py-4">
                  I&#39;m looking for internship opportunities while I finish my
                  degree in CS. I&#39;m based in Seattle, WA.
                </p>
                <p className="py-4">
                  I made this site with React, NextJS, and TailwindCSS. Code
                  available{" "}
                  <a
                    href="https://github.com/nelkalm/personal-website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
              <div>
                <h3 className="uppercase pt-8">Connect With Me</h3>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/nelson-lu-075a6b53/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-120 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/nelkalm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-120 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a href="mailto:nelkalmlu@gmail.com">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-120 ease-in duration-300">
                      <FaEnvelope />
                    </div>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1HAxIlnjiO5uU0_9Q8UVN6t99yfrwVIhr/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-120 ease-in duration-300">
                      <BsPersonLinesFill />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/c3e97106-86eb-4f09-bff6-b37ba4c3c014"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
