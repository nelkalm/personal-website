import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import restlessCryptImg from "../../public/assets/projects/restless-crypt.png";
import { RxTriangleRight } from "react-icons/rx";

const RestlessCrypt = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Projects - ReportSage</title>
        <meta name="description" content="Restless Crypt project description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-[40vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[60vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={restlessCryptImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-10 ">
          <h2 className="py-2">Restless Crypt</h2>
          <h3>
            Python, Pygame, Graphical User Interace, Object-Oriented Programming
          </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p className="pt-5">
            Restless Crypt is an implementation of a dungeon crawler game using
            the Pygame module. It&#39;s a game where the main character, a Fire
            Fairy, must escape a 4-level restless dungeon with enemies. The
            Fairy must fight a boss at the last level to escape the dungeon.
          </p>
          <p className="pt-5">
            This project is a fleshed-out version of a simple shell-based game
            introduced in my first CS courses. Originally, the project scope did
            not involve Pygame; it was just a command-line user interaction with
            one main character and two enemies to demonstrate my understanding
            of object-oriented programming concepts. I took this project a step
            further by creating more enemies and items, including level files,
            implementing a GUI with event-based user-interaction, including
            sound and sound effects.
          </p>
          <a
            href="https://github.com/nelkalm/restless_crypt"
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
              <RxTriangleRight className="pr-1" /> Python
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RxTriangleRight className="pr-1" /> Pygame
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RxTriangleRight className="pr-1" /> GUI
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RxTriangleRight className="pr-1" /> Object-Oriented Programming
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

export default RestlessCrypt;
