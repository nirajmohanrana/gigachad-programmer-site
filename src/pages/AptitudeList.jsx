import React from "react";

import aptitude from "../assets/aptitude.json";

import { Link } from "react-router-dom";

import { TfiControlBackward, TfiControlForward } from "react-icons/tfi";

function AptitudeList() {
  // const handleClickScroll = (idName) => {
  //   const element = document.getElementById(idName);
  //   if (element) {
  //     // 👇 Will scroll smoothly to the top of the next section
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <>
      <header className="my-6">
        <h1 className="text-lg font-bold mx-5 my-2">Aptitude Questions:</h1>
      </header>

      <div className="px-5">
        {aptitude.questions.map((question, key) => {
          const urlPath = question?.question;
          const encodedPath = encodeURIComponent(urlPath);
          console.log(encodedPath);

          return (
            <Link key={key} to={`/aptitude/${encodedPath}`}>
              <div className="px-4 text-lg py-3 my-4 rounded-md border border-slate-700 shadow-lg">
                <p className="font-extrabold text-blue-500 -m-1">
                  {key + 1 + "."}
                </p>
                <p className="font-semibold">{question?.question}</p>
                <p className="font-semibold"></p>
                <p className="font-semibold text-base my-1">Given:</p>
                <p className="font-mono text-sm bg-slate-700 w-fit px-4 py-2 text-white rounded-xl">
                  {question?.given}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default AptitudeList;
