import { Fragment } from "react";
import iconClose from "@/assets/icon-close.svg";
import { navLinks } from "@/constants";
import { Dialog, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ open, closeDrawer }) => {
  return (
    <div className="md:hidden">
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="mobile-menu relative z-10"
          onClose={closeDrawer}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-[16rem]">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md bg-primary-midnight-green">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="mb-10 pe-6 pt-14 text-right">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={closeDrawer}
                        >
                          <img src={iconClose} alt="icon-clone" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll shadow-xl">
                      <div className="p-0 px-12">
                        <div className="nav-items">
                          {navLinks.map((nav) => (
                            <NavLink
                              onClick={closeDrawer}
                              key={nav.id}
                              to={nav.url}
                              className="text-primary-white"
                            >
                              <div className="mobile-menu-list-item mb-6">
                                {nav.title}
                              </div>
                            </NavLink>
                          ))}
                        </div>
                        <NavLink
                          onClick={closeDrawer}
                          to="/contact"
                          className="btn btn-primary-light"
                        >
                          contact us
                        </NavLink>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default MobileMenu;
