import React from "react";
import { doto, inter, poiretOne } from "@/app/utils/font";

function index() {
  return (
    <div className="w-full h-dvh overflow-hidden flex justify-center items-center">
      <div
        className={`${poiretOne.className} container text-white text-8xl font-bold text-center leading-32`}>
        I build seamless experiences through solid engineering and UX.
      </div>
    </div>
  );
}

export default index;
