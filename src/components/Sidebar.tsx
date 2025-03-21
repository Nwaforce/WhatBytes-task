import { useState } from "react";
import { Home, BarChart, FileText } from "lucide-react"; 
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const [active, setActive] = useState("Skill Test");

  const menuItems = [
    { name: "Dashboard", icon: <Home />, link: "/" },
    { name: "Skill Test", icon: <BarChart />, link: "/skill-test" },
    { name: "Internship", icon: <FileText />, link: "/internship" },
  ];

  return (
    <div className="w-64 bg-white shadow-md  px-5 py-20 flex flex-col">
     
      {/* Menu */}
      <nav className="mt-8 flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className={`flex items-center gap-3 p-3 rounded-lg text-gray-700 ${
              active === item.name ? "bg-gray-100 rounded-bl-xl font-semibold text-blue-600" : ""
            }`}
            onClick={() => setActive(item.name)}
          >
            {item.icon} {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
