import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white-800 text-black p-4 fixed top-0 left-0 right-0">
      {" "}
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-semibold">
          Your Logo
        </a>

        <div className="space-x-4">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Projects</NavLink>
          <NavLink href="#">Contact</NavLink>
        </div>

        <div className="space-x-4">
          <SocialLink href="#" iconClass="fab fa-linkedin" />
          <SocialLink href="#" iconClass="fab fa-github" />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <a href={href} className="text-white hover:text-gray-400">
    {children}
  </a>
);

const SocialLink = ({ href, iconClass }) => (
  <a href={href} target="_blank" className="text-white hover:text-gray-400">
    <i className={iconClass}></i>
  </a>
);

export default Navbar;
