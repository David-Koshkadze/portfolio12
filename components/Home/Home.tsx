import React from "react";

export default function HomePage() {
  return (
    <section id="home" className="h-screen pt-28 font-rubik">
      <div className="border border-yellow-300 text-center">
        <h1 className="text-4xl mb-10 font-bold">David Koshkadze</h1>
        <h2 className="text-3xl mb-10">Full-Stack Developer</h2>

        <div className="text-white/50 text-center text-xl flex flex-col items-center gap-10">
          <p className="bg-teal-600 w-fit text-white py-2 px-3 rounded-md">
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
