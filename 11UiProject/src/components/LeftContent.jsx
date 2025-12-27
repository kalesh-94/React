import React from "react";
import "remixicon/fonts/remixicon.css";
const LeftContent = () => {
  return (
    <div className="h-h-[90vh] w-1/3 flex flex-col justify-between text-left">

        <div className="p-6">
            <h3 className="text-5xl font-bold font-sans mb-8 leading-[1.3] ">Prospective <br/> <span className="bg-gray-200 px-2 mt-1 rounded-full">customer</span> <br/>  segmentation</h3>
            <p className="text-m font-semibold text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, optio. Deserunt quasi accusantium omnis beatae iusto! Quae aspernatur fugiat excepturi?</p>
        </div>

      <div className="text-8xl">
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
};

export default LeftContent;
