import React, { useEffect, useRef } from "react";

import { BsArrowRightCircleFill } from "react-icons/bs";
import Card from "./Card.jsx";
import { CardData } from "../CardData.js";
import LeftContent from "./LeftContent.jsx";

const Pagecontent = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!scrollContainer) return;

      scrollAmount += 1; // speed
      scrollContainer.scrollLeft = scrollAmount;

      // Reset when end reached
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollAmount = 0;
      }
    }, 20); // lower = faster FPS

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-10 flex gap-8 h-[90vh] w-full">
      <LeftContent />

      {/* right content of cards */}
      <div
        ref={scrollRef}
        className="w-2/3 flex gap-5 flex-nowrap overflow-x-auto"
      >
        {CardData.map(function (data) {
          return (
            <Card
              key={data.id}
              number={data.number}
              img={data.image}
              text={data.text}
              btntxt={data.buttonText}
              color={data.color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pagecontent;
