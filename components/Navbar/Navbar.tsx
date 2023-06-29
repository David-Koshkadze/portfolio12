"use client";
import { useState } from "react";
import NavItem from "./NavItem";

type NavLinkItems = {};

const navLinkItems = [
  {
    toLink: "home",
    active: false,
    icon: (
      <g id="Style=Round">
        <path
          id="Vector"
          d="M9.99778 19.3276V14.3276H13.9978V19.3276C13.9978 19.8776 14.4478 20.3276 14.9978 20.3276H17.9978C18.5478 20.3276 18.9978 19.8776 18.9978 19.3276V12.3276H20.6978C21.1578 12.3276 21.3778 11.7576 21.0278 11.4576L12.6678 3.92761C12.2878 3.58761 11.7078 3.58761 11.3278 3.92761L2.96778 11.4576C2.62778 11.7576 2.83778 12.3276 3.29778 12.3276H4.99778V19.3276C4.99778 19.8776 5.44778 20.3276 5.99778 20.3276H8.99778C9.54778 20.3276 9.99778 19.8776 9.99778 19.3276Z"
          fill="currentColor"
        />
      </g>
    ),
  },

  {
    toLink: "projects",
    active: true,
    icon: (
      <path
        d="M18.0142 17.3073L17.3042 18.0173C17.1042 18.2173 16.7942 18.2173 16.5942 18.0173C16.3942 17.8173 16.3942 17.5073 16.5942 17.3073L17.3042 16.5973L15.3642 14.6573L14.6542 15.3673C14.4542 15.5673 14.1442 15.5673 13.9442 15.3673C13.7442 15.1673 13.7442 14.8573 13.9442 14.6573L14.6542 13.9473L12.7142 12.0073L12.0042 12.7173C11.8042 12.9173 11.4942 12.9173 11.2942 12.7173C11.0942 12.5173 11.0942 12.2073 11.2942 12.0073L12.0042 11.2973L10.0542 9.34728L9.34425 10.0573C9.14425 10.2573 8.83425 10.2573 8.63425 10.0573C8.43425 9.85728 8.43425 9.54728 8.63425 9.34728L9.34425 8.63728L7.40425 6.69728L6.69425 7.40728C6.49425 7.60728 6.18425 7.60728 5.98425 7.40728C5.78425 7.20728 5.78425 6.89728 5.98425 6.69728L6.69425 5.98728L5.20425 4.49728C4.89425 4.18728 4.35425 4.40728 4.35425 4.85728V17.6473C4.35425 18.7473 5.25425 19.6473 6.35425 19.6473H19.1442C19.5942 19.6473 19.8142 19.1073 19.4942 18.7973L18.0142 17.3073ZM7.35425 15.6473V10.8873L13.1142 16.6473H8.35425C7.80425 16.6473 7.35425 16.1973 7.35425 15.6473Z"
        fill="currentColor"
      />
    ),
  },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string>(navLinkItems[0].toLink);

  const handleItemClick = (toLink: string) => {
    setActiveItem(toLink);
  };

  return (
    <header className="navbar border border-[#3F424D] fixed flex flex-col justify-start items-center left-16 top-16 w-16 h-[305px] shadow-lg rounded-full pt-1">
      {/* Active item */}
      {navLinkItems.map((item, idx) => (
        <NavItem
          key={idx}
          {...item}
          handleClick={() => handleItemClick(item.toLink)}
          active={activeItem === item.toLink}
        />
      ))}
      <div
        className={`transition-opacity duration-300 ${
          activeItem ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </header>
  );
}
