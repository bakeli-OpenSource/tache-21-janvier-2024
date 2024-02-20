import React from "react";

const Loader = () => {
  const contenue = ["1", "2", "3", "4"];
  return <>{contenue.map((contenu, index) => (
    <div key={index} className=" rounded-md p-4    w-full ">
      <div className={`animate-pulse ${contenu} flex space-x-4`}>
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  ))}</>;
};

export default Loader;
