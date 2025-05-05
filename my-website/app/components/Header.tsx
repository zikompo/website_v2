import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-4 text-sm">
      <div className="font-medium">your.name</div>
      <div className="space-x-4">
        <a href="#about">about</a>
        <a href="#projects">projects</a>
        <a href="#writing">writing</a>
      </div>
    </nav>
  );
};
export default Header;