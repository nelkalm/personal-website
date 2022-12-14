import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import youTrainImg from "../../public/assets/projects/youTrain.png";
import { RxTriangleRight } from "react-icons/rx";

const YouTrain = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Projects - ReportSage</title>
        <meta name="description" content="YouTrain project description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-[40vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[60vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={youTrainImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-10 ">
          <h2 className="py-2">YouTrain</h2>
          <h3>MongoDB, Express, React, Node</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p className="pt-5">
            YouTrain is a full-stack MERN App, a Single Page Application that
            tracks exercises completed by the user. User can create their
            exercise data by inputting using a form, with data fields including
            the name of the exercise performed, the number of reps, the amount
            of weight, the weight unit, and the date the exercise was performed.
            The exercise data is then populated onto a table on the Home page.
            User can then click on the pencil icon to edit the exercise, or
            click on the trash icon to delete the exercise.
          </p>
          <p className="pt-5">
            The frontend was built with Node and React, and global design
            features. The backend was built with MongoDB persistence, Mongoose,
            Express, REST, and Node.
          </p>
          <a
            href="https://github.com/nelkalm/ExercisesApp"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
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

export default YouTrain;
