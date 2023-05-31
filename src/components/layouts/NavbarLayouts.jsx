import React from "react";
import NavItem from "../fragments/NavItem";

const NavbarLayouts = () => {
  return (
    <>
      <div className="bg-white w-full px-12 shadow-lg flex justify-between items-center py-4">
        <div className="w-40 object-cover">
          <img src="/refactory-logo.png" />
        </div>
        <div>
          <ul className="flex items-center justify-end gap-8 text-lg">
            <NavItem>Home</NavItem>
            <NavItem>Services</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contacts</NavItem>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarLayouts;
