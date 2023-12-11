"use client";
import intro from "./intro.module.css";
import { useEffect } from "react";

export default function Intro() {
  useEffect(() => {
    window.addEventListener("DOMContentLoaded", () => {
      const time = setTimeout(() => {
        document.getElementById("introStart").style.display = "none";
      }, 2000);
    });

    return () => {
      window.removeEventListener("DOMContentLoaded", () => {});
    };
  }, []);
  return (
    <div className={intro.box} id="introStart">
      <div className={intro.title}>
        <div className={intro.title__item__one}> Portfolio</div>
        <div className={intro.title__item__two}> of</div>
        <div className={intro.title__item__three}>Kadamato</div>
      </div>
    </div>
  );
}
