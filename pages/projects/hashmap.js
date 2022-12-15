import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import hashMapImg from "../../public/assets/projects/hashmap-sc.png";
import { RxTriangleRight } from "react-icons/rx";

const HashMap = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Projects - HashMap</title>
        <meta name="description" content="HashMap project description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-[40vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[60vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={hashMapImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-10 ">
          <h2 className="py-2">HashMap Implementation</h2>
          <h3>Python, Data Structures, Hashing</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-6 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p className="pt-5">
            This is a portfolio project for OSU&#39;s course in Data Structures.
            Two different HashMaps were implemented with two collision
            resolution methods: separate chaining and open addressing. For the
            HashMap using separate chaining for collision resolution, a dynamic
            array was used to store the hash table, and singly linked lists were
            used to implement chaining. For the HashMap using open addressing
            with quadratic probing for collision resolution, a dynamic array was
            used to store the hash table.
          </p>
          <a
            href="https://github.com/nelkalm/hashmap"
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
              <RxTriangleRight className="pr-1" /> Data Structures
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RxTriangleRight className="pr-1" /> Hashing
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RxTriangleRight className="pr-1" /> Unit Testing
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

export default HashMap;
