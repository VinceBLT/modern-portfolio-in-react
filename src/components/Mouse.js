import React from "react";
import { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const handleCursor = (e) => {
      document.querySelector(".cursor").style.top = e.pageY + "px";
      document.querySelector(".cursor").style.left = e.pageX + "px";
    };
    window.addEventListener("mousemove", handleCursor);

    const handleHover = () => {
      document.querySelector(".cursor").classList.add("hovered");
    };

    const handleLeave = () => {
      document.querySelector(".cursor").classList.remove("hovered");
    };

    document.querySelectorAll(".hover").forEach((link) => {
      link.addEventListener("mouseover", handleHover);
      link.addEventListener("mouseleave", handleLeave);
    });
  }, []);

  return (
    <div>
      <span className="cursor"></span>
    </div>
  );
};

export default Mouse;
