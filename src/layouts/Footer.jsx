import logo from "@/assets/logo.svg";
import { navLinks } from "@/constants";
import { footerSocialLinks } from "@/constants";
import { NavLink } from "react-router-dom";
import SocialIcon from "../components/SocialIcon";

const Footer = () => {
  return (
    <div className="footer bg-secondary-dark-green py-16 md:py-14 lg:py-12">
      <div className="container-fluid flex flex-col justify-between text-center md:text-start lg:flex-row">
        <div className="left-side flex flex-col items-center mb-10 md:mb-9 md:flex-row md:justify-between md:items-start lg:mb-0">
          <div className="first-section me-0 mb-6 md:mb-0 lg:me-32">
            <div className="footer-logo mx-auto mb-6 w-24 md:mx-0 md:mb-16 lg:mb-6 lg:w-40">
              <img src={logo} alt="" />
            </div>
            <div className="footer-links">
              {navLinks.map((nav, index) => (
                <NavLink
                  key={nav.id}
                  to={nav.url}
                  className={`${
                    index === navLinks.length - 1 ? "mr-0" : "me-10"
                  } transition hover:text-primary-light-coral active:text-primary-light-coral body-2 lg:text-lg`}
                >
                  {nav.title}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="second-section">
            <div className="body-2 opacity-60 md:text-right lg:text-left">
              <p>987 Hillcrest Lane</p>
              <p>Irvine, CA</p>
              <p>California 92714</p>
              <p>Call Us: 949-833-7432</p>
            </div>
          </div>
        </div>
        <div className="right-side flex flex-col justify-between md:flex-row lg:flex-col">
          <div className="social-media flex justify-center items-center space-x-4 mb-4 md:justify-start md:md-0 lg:justify-end">
            {footerSocialLinks.map((link) => (
              <SocialIcon key={link.id} link={link.link} icon={link.icon} />
            ))}
          </div>
          <div className="copyright body-2 opacity-60">
            <p>Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
