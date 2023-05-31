import React, { useEffect, useState } from "react";

import dsaBasic from "../assets/dsa_basic.json";
import dsaInter from "../assets/dsa_inter.json";
import { Link } from "react-router-dom";

import { TfiControlBackward, TfiControlForward } from "react-icons/tfi";

function DSAList() {
  const handleClickScroll = (idName) => {
    const element = document.getElementById(idName);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="my-6">
        <h1 className="text-lg font-bold mx-5 my-2">DSA Questions:</h1>
        <p className="flex text-sm text-white gap-5 mx-2 justify-center md:justify-start items-center">
          <span
            className="bg-slate-600 px-2 py-px rounded-xl hover:text-cyan-300 cursor-pointer"
            onClick={() => {
              handleClickScroll("basic");
            }}
          >
            #Basic
          </span>
          <span
            className="bg-slate-600 px-2 py-px rounded-xl hover:text-cyan-300 cursor-pointer"
            onClick={() => {
              handleClickScroll("inter");
            }}
          >
            #Intermediate
          </span>
          <span
            className="bg-slate-600 px-2 py-px rounded-xl hover:text-cyan-300 cursor-pointer"
            onClick={() => {
              handleClickScroll("advance");
            }}
          >
            #Advance
          </span>
        </p>
      </header>

      <h1
        id="basic"
        className="text-lg font-semibold mx-5 pl-2 my-3 flex justify-between items-center"
      >
        <p>Basic:</p>
        <p className="flex justify-between items-center text-cyan-300 text-xl gap-5 bg-slate-800 px-2 py-1 rounded-2xl">
          <TfiControlForward
            className="hover:scale-125 cursor-pointer duration-300 transition-all ease-in-out"
            onClick={() => {
              handleClickScroll("inter");
            }}
          />
        </p>
      </h1>
      <div className="px-5">
        {dsaBasic.questions.map((question, key) => {
          return (
            <Link key={key} to={`/dsa/${question?.question}`}>
              <div className="px-4 text-lg py-3 my-4 rounded-md border border-slate-700 shadow-lg">
                <p className="font-extrabold text-blue-500 -m-1">
                  {key + 1 + "."}
                </p>
                <p className="font-semibold">{question?.question}</p>
                <p className="font-semibold"></p>
                <p className="font-semibold text-base my-1">Explanation:</p>
                <p className="font-mono text-sm bg-slate-700 w-fit px-4 py-2 text-white rounded-xl">
                  {question?.explanation}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <h1
        id="inter"
        className="text-lg font-semibold mx-5 pl-2 my-3 flex justify-between items-center"
      >
        <p>Intermediate:</p>
        <p className="flex justify-between items-center text-cyan-300 text-xl gap-5 bg-slate-800 px-2 py-1 rounded-2xl">
          <TfiControlBackward
            className="hover:scale-125 cursor-pointer duration-300 transition-all ease-in-out"
            onClick={() => {
              handleClickScroll("basic");
            }}
          />
          <TfiControlForward
            className="hover:scale-125 cursor-pointer duration-300 transition-all ease-in-out"
            onClick={() => {
              handleClickScroll("advance");
            }}
          />
        </p>
      </h1>

      {dsaInter.questions.map((question, key) => {
        return (
          <Link key={key} to={`/dsa/${question?.question}`}>
            <div className="px-4 text-lg py-3 m-5 rounded-md border border-slate-700 shadow-lg">
              <p className="font-extrabold text-blue-500 -m-1">
                {key + 1 + "."}
              </p>
              <p className="font-semibold">{question?.question}</p>
              <p className="font-semibold"></p>
              <p className="font-semibold text-base my-1">Explanation:</p>
              <p className="font-mono text-sm bg-slate-700 w-fit px-4 py-2 text-white rounded-xl">
                {question?.explanation}
              </p>
            </div>
          </Link>
        );
      })}

      <h1
        id="advance"
        className="text-lg font-semibold mx-5 pl-2 my-3 flex justify-between items-center"
      >
        <p>Advance:</p>
        <p className="flex justify-between items-center text-cyan-300 text-xl gap-5 bg-slate-800 px-2 py-1 rounded-2xl">
          <TfiControlBackward
            className="hover:scale-125 cursor-pointer duration-300 transition-all ease-in-out"
            onClick={() => {
              handleClickScroll("inter");
            }}
          />
        </p>
      </h1>
    </>
  );
}

export default DSAList;
