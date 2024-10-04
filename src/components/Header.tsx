import { NavLink } from "react-router-dom";
import { FaHome, FaClipboardList } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { RiContactsBookFill } from "react-icons/ri";
import { BsPersonVcardFill } from "react-icons/bs";
import { Link } from "react-scroll";



function Header() {
  return (
    <nav id="top" className="bg-primary/70 flex items-center justify-between py-12">
      <div className="px-10 flex flex-shrink-0 items-center">
      <Link
        to="top"
        smooth={true}
        duration={1000}
        spy={true}
        className="text-2xl font-bold text-accent flex items-center cursor-pointer hover:text-secondary"
        style={{ fontFamily: 'Charmonman, cursive'}}>
        BK
      </Link>
      </div>
      <div className="pr-10 flex gap-7 text-2xl">
        <Link
        to="certificates"
        smooth={true}
        duration={1000}
        className="text-2xl font-bold text-accent flex items-center cursor-pointer hover:text-secondary">
        <PiCertificateFill className="mr-2" />
        Certificates
        </Link>
        <Link
        to="portfolio"
        smooth={true}
        duration={1000}
        className="text-2xl font-bold text-accent flex items-center cursor-pointer hover:text-secondary">
        <FaClipboardList className="mr-2" />
        Portfolio
        </Link>
        <Link
        to="about"
        smooth={true}
        duration={1000}
        className="text-2xl font-bold text-accent flex items-center cursor-pointer hover:text-secondary">
        <BsPersonVcardFill className="mr-2" />
        About
        </Link>
        <Link
        to="contact"
        smooth={true}
        duration={1000}
        className="text-2xl font-bold text-accent flex items-center cursor-pointer hover:text-secondary">
        <RiContactsBookFill className="mr-2" />
        Contact
        </Link>
      </div>
    </nav>
  )
}

export default Header;