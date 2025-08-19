import { useState } from "react";
import {
  ArrowRightEndOnRectangleIcon,
  Bars3Icon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { BriefcaseIcon } from "@heroicons/react/16/solid";
import HomeBanner from "../../banner/HomeBanner";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import MainMenu from "./MainMenu";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full fixed z-10">
        <nav
          aria-label="Global"
          className="mx-auto max-w-7xl flex items-center justify-between h-18 px-3"
        >
          <div className="text-2xl font-bold uppercase text-white flex items-center gap-1">
            <BriefcaseIcon width={40} />
            <span>
              Pixels <span className="text-orange-500">Jobs</span>
            </span>
          </div>
          <Button onClick={() => setMobileMenuOpen(true)}>
            <Bars3Icon width={20} className="text-white lg:hidden" />
          </Button>
          <MainMenu />
          <div className="buttonSection hidden lg:flex gap-3">
            <Button className="inline-flex items-center gap-1 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 cursor-pointer uppercase">
              <UserIcon width={20} /> Sign up
            </Button>
            <Button className="inline-flex items-center gap-1 rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-orange-700 data-open:bg-gray-700 cursor-pointer uppercase">
              <ArrowRightEndOnRectangleIcon width={20} /> Login
            </Button>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <DialogPanel
            className={
              "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-red-700 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            }
          >
            <nav
              aria-label="Global"
              className="mx-auto max-w-7xl flex items-center justify-between h-18 px-3"
            >
              <div className="text-2xl font-bold uppercase text-white flex items-center gap-1">
                <BriefcaseIcon width={40} />
                <span>
                  Pixels <span className="text-orange-500">Jobs</span>
                </span>
              </div>
              <Button onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon width={20} className="text-white lg:hidden" />
              </Button>
            </nav>
          </DialogPanel>
        </Dialog>
      </header>
      <HomeBanner />
    </>
  );
}
