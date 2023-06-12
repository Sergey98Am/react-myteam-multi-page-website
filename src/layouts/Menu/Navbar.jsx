import { NavLink } from "react-router-dom";
import logo from "@/assets/logo.svg";
import iconMenu from "@/assets/icon-hamburger.svg";
import { navLinks } from "@/constants";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <div className="navbar py-12 bg-primary-midnight-green md:py-16 lg:py-20">
        <div className="container-fluid flex justify-between items-center">
          {/* Start menu items */}
          <div className="flex md:items-center">
            <div className="navbar-brand me-20">
              <NavLink to="/">
                <img src={logo} alt="" />
              </NavLink>
            </div>
            <div className="nav-items hidden text-primary-white md:block">
              {navLinks.map((nav, index) => (
                <NavLink
                  key={nav.id}
                  to={nav.url}
                  className={`${
                    index === navLinks.length - 1 ? "mr-0" : "me-10"
                  } transition hover:text-primary-light-coral active:text-primary-light-coral`}
                >
                  {nav.title}
                </NavLink>
              ))}
            </div>
          </div>

          {/* End menu items */}
          <div className="hidden md:block">
            <NavLink to="/contact" className="btn btn-primary-light">
              contact us
            </NavLink>
          </div>

          {/* Mobile menu toggler */}
          <div className="navbar-toggle md:hidden">
            <img onClick={openDrawer} src={iconMenu} alt="icon-menu" />
          </div>
        </div>
      </div>
      <MobileMenu open={open} closeDrawer={closeDrawer} />
    </>
  );
};

export default Navbar;
