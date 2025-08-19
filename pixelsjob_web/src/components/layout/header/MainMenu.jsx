import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { mainMenu } from "../../../utils/mainMenu.js";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const MainMenu = () => {
  return (
    <div className="hidden lg:flex gap-8">
      {mainMenu.map((menu, idx) => (
        <Popover key={idx} className="relative">
          <PopoverButton className="flex items-center uppercase text-md/6 font-bold text-white focus:outline-none data-active:text-white data-focus:outline data-focus:outline-white data-hover:text-white cursor-pointer">
            {menu.name}
            {menu.children && <ChevronDownIcon className="h-5 w-5" />}
          </PopoverButton>
          {menu.children && (
            <PopoverPanel 
              transition
              anchor="bottom"
              className="divide-y divide-white/5 rounded-xl bg-black/80 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
            ><div className="flex">
              {menu.children.map((child, childIdx) => (
                  <div className="p-5 border-r border-gray-500/40 last:border-none" key={childIdx}>
                    <div className="text-lg font-bold text-white mb-2">{child.name}</div>
                    {child.children && (
                      <ul className="">
                        {child.children.map((sub, subIdx) => (
                          <li key={subIdx}><a className="block font-semibold text-white rounded-lg px-3 py-2 transition hover:bg-white/20" href="#">{sub.name}</a></li>
                        ))}
                      </ul>
                    )}
                  </div>
              ))}
              </div>
            </PopoverPanel>
          )}
        </Popover>
      ))}
    </div>
  );
};

export default MainMenu;
