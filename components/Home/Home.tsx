import React from "react";
import Image from "next/image";
import photoMe from "../photome.jpg";

export default function HomePage() {
  return (
    <section
      id="home"
      className="h-screen border border-yellow-300 pt-28"
    >
      <div>
        <h1 className="text-5xl pb-10">David Koshkadze</h1>

        <div className="text-white/50 w-1/2">
          <p className="mb-3">
            Welcome to my portfolio website, where innovation meets creativity
            and code comes to life!
          </p>
          <p>
            As a skilled web developer, I bring a passion for crafting
            exceptional digital experiences that captivate users and drive
            results.
          </p>
        </div>
      </div>
    </section>
  );
}
