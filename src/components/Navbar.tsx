"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="fixed top-5 inset-x-0 max-w-7xl mx-auto z-50">
      <Menu setActive={setActive}>
        <div className="flex justify-between w-full px-6">
          <div>
            <Link href={"/"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="<Home />"
              ></MenuItem>
            </Link>
          </div>

          <div className="flex gap-4">
            <Link href={"about"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item=".about()"
              ></MenuItem>
            </Link>

            <Link href={"projects"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item=".projects()"
              ></MenuItem>
            </Link>

            <Link href={"contact"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item=".contact()"
              ></MenuItem>
            </Link>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default Navbar;
