import React from "react";

const devIconsData = [
  {
    icon: (
      <svg viewBox="0 0 128 128" width={50}>
        <path
          fill="#E44D26"
          d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499L108.431 27H19.569zM91.61 47.471l-.507 5.834L90.88 56H48.311l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69L64 106.964v-.005l-.027.012-22.777-5.916L39.65 84h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649L77.708 79H39.153l-2.734-30.836L36.152 45h55.724l-.266 2.471zM27.956 1.627h5.622v5.556h5.144V1.627h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.513V1.627z"
        ></path>
      </svg>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 128 128" width={50}>
        <path
          fill="#0acf83"
          d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
        ></path>
        <path
          fill="#a259ff"
          d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
        ></path>
        <path
          fill="#f24e1e"
          d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
        ></path>
        <path
          fill="#ff7262"
          d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
        ></path>
        <path
          fill="#1abcfe"
          d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
        ></path>
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen border grid place-items-center"
    >
      <div>
        <h1>Skills</h1>
        <div className="grid grid-cols-4">
          {devIconsData.map((item, idx) => (
            <>{item.icon}</>
          ))}
        </div>
      </div>
    </section>
  );
}
