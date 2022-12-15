import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import reportSageImg from "../../public/assets/projects/reportSage.png";
import { RxTriangleRight } from "react-icons/rx";

const ReportSage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Projects - ReportSage</title>
        <meta name="description" content="ReportSage project description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-[40vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[60vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={reportSageImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-10 ">
          <h2 className="py-2">ReportSage</h2>
          <h3>MongoDB, Express, React, Node, User Authentication</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p className="pt-5">
            This is a reporting app where nonprofit program staff can register
            for an account to create and manage program and event reports.
            Development staff can then use report information to generate
            program statistics and communicate to funders. Features include:
            mobile responsiveness, user login/logout and authentication, form
            submission and routing, data aggregation, and dashboard analytics.
            This app is currently being used by Delridge Neighborhoods
            Development Association.
          </p>
          <a
            href="https://reportsage.onrender.com/landing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
          <a
            href="https://github.com/nelkalm/ReportSageApp"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 ml-5">Code</button>
          </a>
        </div>
        <div className="col-span-6 md:col-span-2 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <h3 className="uppercase tracking-widest text-center pb-2">
              Tech &amp; Framework used
            </h3>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-1">
            <p className="text-gray-600 py-2 flex items-center">
              <RxTriangleRight className="pr-1" /> React
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RxTriangleRight className="pr-1" /> MongoDB
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RxTriangleRight className="pr-1" /> Express
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RxTriangleRight className="pr-1" /> Node
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RxTriangleRight className="pr-1" /> Rest API
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RxTriangleRight className="pr-1" /> Javascript
            </p>
          </div>
        </div>
        <Link href="/#projects">
          <h3 className="cursor-pointer">Back</h3>
        </Link>
      </div>
    </div>
  );
};

export default ReportSage;
