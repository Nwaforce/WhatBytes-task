import UserAvatar from "../components/UserAvatar";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow px-6 py-4 fixed w-full top-0 z-50 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-black-900">
        <div className="text-2xl font-bold flex items-center gap-2">
          WhatBytes
        </div>
      </h1>

      {/* Use the UserAvatar Component  */}
      <UserAvatar name="Emmanuel" imageUrl="" />

      <button className="md:hidden text-gray-700">☰</button>
    </nav>
  );
};

export default Navbar;
