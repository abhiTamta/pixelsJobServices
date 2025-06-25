import React, { useEffect, useRef, useState } from 'react'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    console.log("Selected:", value);
    setIsOpen(false);
  };

  const dropdowns = [
    {
      title: "Menu 1",
      options: ["Item 1", "Item 2", "Item 3"],
    },
    {
      title: "Menu 2",
      options: ["Alpha", "Beta", "Gamma"],
    },
    {
      title: "Menu 3",
      options: ["One", "Two", "Three"],
    },
  ];

  return (
    
    <div className="p-10">
      <div className="relative group inline-block text-left">
        {/* Main menu button */}
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Menu
        </button>

        {/* Dropdown menu */}
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition duration-150 z-10">
          <ul className="py-1 text-gray-800">
            <li>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                Item 1
              </button>
            </li>

            {/* Submenu container */}
            <li className="relative">
              <div className="group/sub">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex justify-between items-center">
                  More Options
                  <span className="ml-2">▶</span>
                </button>

                {/* Submenu */}
                <div className="absolute top-0 left-full mt-0 w-48 bg-white border rounded-lg shadow-lg invisible group-hover/sub:visible opacity-0 group-hover/sub:opacity-100 transition duration-150 z-20">
                  <ul className="py-1 text-gray-800">
                    <li>
                      <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                        Sub Item A
                      </button>
                    </li>
                    <li>
                      <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                        Sub Item B
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                Item 3
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu
