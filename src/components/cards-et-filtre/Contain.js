import React from "react";
import { IoMdDownload } from "react-icons/io";

const Contain = () => {
  return (
    <div>
      <div className="flex justify-between px-3">
        <div>
          <h5>101.5 k</h5>
        </div>
        <div className="bg-sky-500 rounded-full h-auto w-auto">
          <IoMdDownload className="text-2xl text-white" />
        </div>
      </div>
      <div>
        <p className="text-sm m-3">Downloads</p>
      </div>
    </div>
  );
};

export default Contain;
