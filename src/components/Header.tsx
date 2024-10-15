import { useState, useEffect } from "react";
import { FaHome, FaClipboardList } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { RiContactsBookFill } from "react-icons/ri";
import { BsPersonVcardFill } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { Link, animateScroll } from "react-scroll";
import { FaGithubSquare, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [activeLink, setActiveLink] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="top" className={`${scrolled ? 'bg-primary/80' : 'bg-primary'
      } fixed top-0 w-full items-center lg:py-10 py-7 px-20 z-50`}>
      <div className="lg:flex lg:flex-wrap justify-between hidden">
        <div className="px-10 flex flex-wrap gap-10 items-center">
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
          <div className=" flex flex-wrap gap-7 text-2xl">
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
        </div>

        <div className="flex justify-between gap-2 pl-4">
          <div className="flex gap-2">
            <a href="https://github.com/bilyanakarcheva" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare size="2.5em" className="text-accent cursor-pointer hover:text-neutral-500" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/bilyana-karcheva-a45b26105/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="2.5em" className="font-bold text-accent cursor-pointer hover:text-neutral-500" />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-accent text-3xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {menuOpen && (
          <div className={`${scrolled ? 'bg-primary/80' : 'bg-primary'
      } absolute top-16 left-0 w-full flex flex-col items-center gap-7 text-2xl py-4`}>
            <Link
              to="hero"
              smooth={true}
              duration={1000}
              offset={-100}
              spy={true}
              className="text-5xl text-accent flex items-center cursor-pointer font-extrabold"
              style={{ fontFamily: 'Shadows Into Light', fontWeight: 'bolder' }}
              onClick={() => {
                handleActiveLink('hero')
                setMenuOpen(false)
              }}
            >
              BK
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              offset={-80}
              className={`${activeLink === 'about' ? 'text-neutral-500' : 'text-accent'
                } text-2xl font-bold flex items-center cursor-pointer`}
              onClick={() => {
                handleActiveLink('about');
                setMenuOpen(false);
              }}
            >
              <BsPersonVcardFill className="mr-2" />
              About
            </Link>
            <Link
              to="technologies"
              smooth={true}
              duration={1000}
              offset={-80}
              className={`${activeLink === 'technologies' ? 'text-neutral-500' : 'text-accent'
                } text-2xl font-bold flex items-center cursor-pointer`}
              onClick={() => {
                handleActiveLink('technologies');
                setMenuOpen(false);
              }}
            >
              <FaGear className="mr-2" />
              Technologies
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              offset={-100}
              className={`${activeLink === 'projects' ? 'text-neutral-500' : 'text-accent '} text-2xl font-bold flex items-center cursor-pointer hover:text-neutral-500`}
              onClick={() => {
                setActiveLink('projects')
                setMenuOpen(false)
              }}
            >
              <FaClipboardList className="mr-2" />
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              offset={-100}
              className={`${activeLink === 'contact' ? 'text-neutral-500' : 'text-accent '} text-2xl font-bold flex items-center cursor-pointer hover:text-neutral-500`}
              onClick={() => {
              setActiveLink('contact')
              setMenuOpen(false)
              }}
              >
              <RiContactsBookFill className="mr-2" />
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header;