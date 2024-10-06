import { NavLink } from "react-router-dom";
import { FaHome, FaClipboardList } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { RiContactsBookFill } from "react-icons/ri";
import { BsPersonVcardFill } from "react-icons/bs";
import { Link } from "react-scroll";



function Header() {
  return (
    <nav id="top" className="bg-primary/80 border-b border-primary flex items-center justify-between py-12">
      <div className="px-10 flex flex-wrap items-center">
      <Link
        to="top"
        smooth={true}
        duration={1000}
        spy={true}
        className="text-3xl font-bold text-accent flex items-center cursor-pointer hover:text-neutral"
        style={{ fontFamily: 'Charmonman, cursive'}}>
        BK
      </Link>
      </div>
      <div className="pr-10 flex flex-wrap gap-7 text-2xl">
        <Link
        to="certificates"
        smooth={true}
        duration={1000}
        className="text-2xl text-accent font-bold flex items-center cursor-pointer hover:text-neutral">
        <PiCertificateFill className="mr-2" />
        Certificates
        </Link>
        <Link
        to="projects"
        smooth={true}
        duration={1000}
        className="text-2xl font-bold text-accent flex items-center cursor-pointer hover:text-neutral">
        <FaClipboardList className="mr-2" />
        Projects
        </Link>
        <Link
        to="about"
        smooth={true}
        duration={1000}
        className="text-2xl font-bold text-accent flex items-center cursor-pointer hover:text-neutral">
        <BsPersonVcardFill className="mr-2" />
        About
        </Link>
        <Link
        to="contact"
        smooth={true}
        duration={1000}
        className="text-2xl font-bold text-accent flex items-center cursor-pointer hover:text-neutral">
        <RiContactsBookFill className="mr-2" />
        Contact
        </Link>
      </div>
    </nav>
  )
}

export default Header;