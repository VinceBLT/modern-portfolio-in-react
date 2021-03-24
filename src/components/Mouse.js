import React from "react";
import { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const handleCursor = (e) => {
      document.querySelector(".cursor").style.top = e.pageY + "px";
      document.querySelector(".cursor").style.left = e.pageX + "px";
    };
    window.addEventListener("mousemove", handleCursor);
  }, []);

  return (
    <div>
      <span className="cursor"></span>
    </div>
  );
};

export default Mouse;
