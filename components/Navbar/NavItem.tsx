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
    <div
      className={`cursor-pointer w-[60px] h-[60px] flex flex-col items-center justify-center gap-1
        ${
          active
            ? "bg-[#3F424D] rounded-full text-[#AAAEB9]"
            : "bg-transparent text-[#656A7B]"
        }
      `}
      onClick={handleClick}
    >
      <IconWrapper size={active ? "32" : "24"}>{icon}</IconWrapper>
      {active ? (
        <div className="w-1 h-1 bg-[#AAAEB9] rounded-full"></div>
      ) : null}
    </div>
  );
}
