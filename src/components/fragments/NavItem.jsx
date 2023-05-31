import React from "react";

const NavItem = ({ children }) => {
  return (
    <div>
      <li className="font-medium text-slate-900 active:underline py-4 cursor-pointer">
        {children}
      </li>
    </div>
  );
};

export default NavItem;
