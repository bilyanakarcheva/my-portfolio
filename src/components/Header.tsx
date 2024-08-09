import { NavLink } from "react-router-dom";
import { FaHome, FaClipboardList } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { RiContactsBookFill } from "react-icons/ri";
import { BsPersonVcardFill } from "react-icons/bs";


function Header() {
  return (
    <div className="navbar bg-base-200 p-4 w-full">
      <div className="flex justify-between items-center gap-8">
        <NavLink to="/"
          className="text-2xl font-bold text-accent flex items-center">
          <FaHome className="mr-2" /> Home
        </NavLink>
        <NavLink to="/certificates"
          className="text-2xl font-bold text-accent flex items-center">
          <PiCertificateFill className="mr-2" />
          Certificates
        </NavLink>
        <NavLink to="/portfolio"
          className="text-2xl font-bold text-accent flex items-center">
          <FaClipboardList className="mr-2" />
          Portfolio
        </NavLink>
        <NavLink to="/about" 
        className="text-2xl font-bold text-accent flex items-center">
          <BsPersonVcardFill className="mr-2" />
          About
          </NavLink>
        <NavLink to="/contact"
          className="text-2xl font-bold text-accent flex items-center">
          <RiContactsBookFill className="mr-2" />
          Contact
        </NavLink>
      </div>
    </div>
  )
}

export default Header;