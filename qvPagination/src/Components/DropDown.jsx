import React, { useState } from "react";

const categories = [
  {
    name: "Apparel",
    children: [
      {
        name: "Men",
        children: ["Jackets", "Shirts", "Suits", "Pants", "Accessories"],
      },
      {
        name: "Women",
        children: [
          "Dresses",
          "Blouses",
          "Sweaters",
          "Pants",
          "Accessories",
          "Skirts",
          "Shoes",
          "Handbags",
        ],
      },
      {
        name: "Boys",
        children: ["Pants", "Tops", "Shoes"],
      },
      {
        name: "Girls",
        children: ["Shoes", "Tops", "Pants", "Skirts"],
      },
    ],
  },
  {
    name: "Electronics",
    children: ["Mobiles", "Laptops", "Tablets"],
  },
  {
    name: "Groceries",
    children: ["Fruits", "Vegetables", "Snacks"],
  },
  {
    name: "Men's Fashion",
    children: ["Pants", "Shirts"],
  },
  {
    name: "Women's Fashion",
    children: ["Active Wear"],
  },
];

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);

  const handleHover = (category) => {
    setHoveredMenu(category);
    setHoveredSubmenu(null); // Reset any hovered submenus
  };

  const handleSubmenuHover = (submenu) => {
    setHoveredSubmenu(submenu);
  };

  const closeMenu = () => {
    setActiveMenu(null);
    setHoveredMenu(null);
    setHoveredSubmenu(null);
  };

  return (
    <div className="relative" onMouseLeave={closeMenu}>
      <div
        className="p-2 cursor-pointer"
        onMouseEnter={() => setActiveMenu("main")}
      >
        All Categories
      </div>
      {activeMenu === "main" && (
        <div className="absolute top-full p-2 bg-white border shadow-lg">
          {categories.map((category) => (
            <div
              key={category.name}
              onMouseEnter={() => handleHover(category.name)}
              className="p-2 cursor-pointer relative hover:bg-cyan-100 rounded-lg"
            >
              {category.name}
              {hoveredMenu === category.name && (
                <div className="absolute top-0 left-full p-2 bg-white border shadow-lg">
                  {Array.isArray(category.children) &&
                    category.children.map((child) =>
                      typeof child === "string" ? (
                        <div key={child} className="p-2 ">
                          {child}
                        </div>
                      ) : (
                        <div
                          key={child.name}
                          onMouseEnter={() => handleSubmenuHover(child.name)}
                          className="p-2 cursor-pointer relative hover:bg-cyan-100 rounded-lg"
                        >
                          {child.name}
                          {hoveredSubmenu === child.name && (
                            <div className="absolute top-0 left-full p-2 bg-white border shadow-lg">
                              {child.children.map((subChild) => (
                                <div key={subChild} className="p-2 hover:bg-cyan-100 rounded-lg">
                                  {subChild}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
