import React from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiSolidBookAlt } from "react-icons/bi";
import { MdExplore } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { BsFillMicFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { BiFoodMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav id='navbar'>
      <ul>
        <li>
          <a href='#Home'>
            <AiOutlineHome />
          </a>
        </li>
        <li>
          <a href='#About'>
            <BiSolidBookAlt />
          </a>
        </li>
        <li>
          <a href='#Experience'>
            <MdExplore />
          </a>
        </li>
        <li>
          <a href='#Services'>
            <AiFillSetting />
          </a>
        </li>
        <li>
          <a href='#Projects'>
            <BsBook />
          </a>
        </li>
        <li>
          <a href='#Testimonials'>
            <BsFillMicFill />
          </a>
        </li>
        <li>
          <a href='#Contact'>
            <BiSolidContact />
          </a>
        </li>
        <li>
          <a href='#Footer'>
            <BiFoodMenu />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
