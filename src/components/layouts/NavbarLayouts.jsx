import React from "react";
import NavItem from "../fragments/NavItem";
import Button from "../fragments/Button";

const NavbarLayouts = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full gap-12 px-12 py-4 bg-white shadow-lg">
        <div className="object-cover w-40">
          <img src="/refactory-logo.png" />
        </div>
        <div className="flex-auto">
          <ul className="flex items-center justify-end gap-8 text-lg grow">
            <NavItem>Home</NavItem>
            <NavItem>Services</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contacts</NavItem>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button className={"bg-blue-500 text-white border-2 border-blue-500"}>
            Login
          </Button>
          <Button className={"border-2 border-blue-500 text-blue-500"}>
            Register
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavbarLayouts;
