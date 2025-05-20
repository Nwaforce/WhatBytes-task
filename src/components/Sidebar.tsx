import { useState } from "react";
import { Home, BarChart, FileText, Menu } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const [active, setActive] = useState("Skill Test");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <Home />, link: "/" },
    { name: "Skill Test", icon: <BarChart />, link: "/skill-test" },
    { name: "Internship", icon: <FileText />, link: "/internship" },
  ];

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden absolute top-5 left-5 bg-gray-100 p-2 rounded-full shadow-md"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative w-64 bg-white shadow-md px-5 py-20 flex flex-col transition-all duration-300 
                      ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
      >
        {/* Menu */}
        <nav className="mt-8 flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className={`flex items-center gap-3 p-3 rounded-lg text-gray-700 ${active === item.name
                  ? "bg-gray-100 rounded-bl-xl font-semibold text-blue-600"
                  : ""
                }`}
              onClick={() => {
                setActive(item.name);
                setIsOpen(false);
              }}
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
