import { useState, useEffect } from "react";
import { FaHome, FaClipboardList } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { RiContactsBookFill } from "react-icons/ri";
import { BsPersonVcardFill } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { Link, animateScroll } from "react-scroll";


function Header() {
  const [activeLink, setActiveLink] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50){
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleActiveLink = (link: string) => {
    setActiveLink(link);
  }

  return (
    <nav id="top" className={`${scrolled ? 'bg-primary/80' : 'bg-primary border-b border-primary'
    } fixed top-0 w-full flex items-center justify-between py-10 z-50`}>
      <div className="px-10 flex flex-wrap items-center">
      <Link
        to="hero"
        smooth={true}
        duration={1000}
        offset={-100}
        spy={true}
        className="text-5xl text-accent flex items-center cursor-pointer hover:text-neutral-500 font-extrabold"
        style={{ fontFamily: 'Shadows Into Light', fontWeight: 'bolder' }}
        onClick={() => handleActiveLink('hero')}
        >
        BK
      </Link>
      </div>
      <div className="pr-10 flex flex-wrap gap-7 text-2xl">
      <Link
        to="about"
        smooth={true}
        duration={1000}
        offset={-100}
        className={`${activeLink === 'about' ? 'text-neutral-500' : 'text-accent'} text-2xl font-bold flex items-center cursor-pointer hover:text-neutral-500`}
        onClick={() => handleActiveLink('about')}>
        <BsPersonVcardFill className="mr-2" />
        About
      </Link>
      <Link
        to="technologies"
        smooth={true}
        duration={1000}
        offset={-100}
        className={`${activeLink === 'technologies' ? 'text-neutral-500' : 'text-accent'} text-2xl font-bold flex items-center cursor-pointer hover:text-neutral-500`}
        onClick={() => setActiveLink('technologies')}>
        <FaGear className="mr-2" />
        Technologies
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={1000}
        offset={-100}
        className={`${activeLink === 'projects' ? 'text-neutral-500' : 'text-accent '} text-2xl font-bold flex items-center cursor-pointer hover:text-neutral-500`}
        onClick={() => setActiveLink('projects')}>
        <FaClipboardList className="mr-2" />
        Projects
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={1000}
        offset={-100}
        className={`${activeLink === 'contact' ? 'text-neutral-500' : 'text-accent '} text-2xl font-bold flex items-center cursor-pointer hover:text-neutral-500`}
        onClick={() => setActiveLink('contact')}>
        <RiContactsBookFill className="mr-2" />
        Contact
      </Link>
      </div>
    </nav>
  )
}

export default Header;