import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navbarData = [
    { id: 1, title: "Home", link: "home" },
    { id: 2, title: "Services", link: "services" },
    { id: 3, title: "Tracking", link: "tracking" },
    { id: 4, title: "Contact", link: "contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <p className="text-2xl font-bold text-blue-600">Swift Rescue</p>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8 text-gray-700 font-medium">
            {navbarData.map((item) => (
              <li
                key={item.id}
                className="text-black text-lg hover:text-blue-600 cursor-pointer"
              >
                {item.title}
              </li>
            ))}
          </ul>

          {/* Login / Signup Buttons */}
          <Button
            variant="ghost"
            className="px-4 py-2 bg-blue-600!  hover:bg-blue-700! text-white! rounded-lg transition-all duration-300"
          >
            Signup
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {open ? (
            <X
              size={28}
              onClick={() => setOpen(!open)}
              className="cursor-pointer"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setOpen(!open)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ${
          open ? "max-h-96 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-gray-700 font-medium">
          {navbarData.map((item) => (
            <li key={item.id} className="text-black text-lg">
              <a className="hover:text-blue-600">{item.title}</a>
            </li>
          ))}

          {/* Mobile Login / Signup Buttons */}
          <div className="flex flex-col gap-3 mt-4 w-3/4">
            <Button
              variant="ghost"
              className="w-full px-4 py-2 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-300"
            >
              Login
            </Button>
            <Button
              variant="ghost"
              className="w-full px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all duration-300"
            >
              Signup
            </Button>
          </div>
        </ul>
      </div>
    </nav>
  );
}
