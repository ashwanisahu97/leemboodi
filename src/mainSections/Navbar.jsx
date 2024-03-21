import React from "react";
import "../Styles/Navbar/navbar.scss";
import { NavbarIcons, categories } from "../Data/Navbar/navbarData";
import { IoSearchSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

const Navbar = () => {
  const getIcons = (iconName) => {
    let icons = {
      IoSearchSharp: IoSearchSharp,
      FiShoppingCart: FiShoppingCart,
      FaRegHeart: FaRegHeart,
      GoPerson: GoPerson,
    };
    return icons[iconName];
  };
  return (
    <div className="navbar-container">
      <div className="top-strip">
        
      </div>
      <div className="bottom-strip">
        <div className="left-nav">
          <div className="image-container">
            <img
              src="https://leemboodi.com/cdn/shop/files/000000Leemboodi_logo_-_black.png?height=60&v=1677751554"
              alt=""
            />
          </div>
        </div>
        <div className="middle-nav">
          <div>
            {categories?.map((element) => (
              <p className="categories">{element}</p>
            ))}
          </div>
        </div>
        <div className="right-nav">
          <div>
            {NavbarIcons?.map((item) => {
              const RenderIcon = getIcons(item);
              return <RenderIcon className="icons" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
