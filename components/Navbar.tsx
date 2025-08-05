"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = ["Home", "About", "Franchise", "Career", "Blog", "News", "Contact"];

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav
      className="flex items-center px-6 py-4 bg-white w-full"
      style={{
        backgroundColor: "#ffffff",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <ul
        className="flex flex-1 justify-between text-sm"
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-between",
          fontSize: "24px",
          listStyle: "none",
          padding: 0,
        }}
      >
        {navItems.map((item) => (
          <li
            key={item}
            className="flex-1 text-center"
            style={{ margin: "0 8px" }}
          >
            <button
              onClick={() => setActive(item)}
              className={`font-semibold cursor-pointer px-2 py-1 transition-colors duration-200
                ${active === item ? "text-green-600" : "text-gray-700 hover:text-green-600"}`}
              style={{
                background: "none",
                border: "none",
                outline: "none",
                position: "relative",
                fontWeight: 600,
                cursor: "pointer",
                color: active === item ? "#059669" : "#374151",
                padding: 0,
                display: "inline-block",
                fontSize: "24px",
              }}
            >
              <span
                className={`relative`}
                style={{
                  display: "inline-block",
                  padding: "0 4px",
                  borderTop: active === item ? "2px solid #059669" : "2px solid transparent",
                  transition: "border-color 0.2s",
                }}
              >
                {item}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
