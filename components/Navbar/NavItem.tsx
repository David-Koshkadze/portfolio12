// import Link from "next/link";
import { Link } from "react-scroll";
import React from "react";

interface NavItemProps {
  icon: React.ReactElement;
  toLink: string;
  active: boolean;
  handleClick: any;
}

const activeClasses = "";
const inactiveClasses = "";

const IconWrapper = ({
  size,
  children,
}: {
  size: string;
  children: React.ReactNode;
}) => (
  <>
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  </>
);

export default function NavItem({
  icon,
  toLink,
  active,
  handleClick,
}: NavItemProps) {
  return (
    <Link
      to={toLink}
      spy={true}
      activeClass="bg-[#3F424D] rounded-full text-[#AAAEB9]"
      className="bg-transparent text-[#656A7B] cursor-pointer w-[60px] h-[60px] flex flex-col items-center justify-center gap-1 transition-all duration-300"
    >
      <IconWrapper size={active ? "32" : "24"}>{icon}</IconWrapper>
      {active ? (
        <div className="w-1 h-1 bg-[#AAAEB9] rounded-full"></div>
      ) : null}
    </Link>
  );
}
