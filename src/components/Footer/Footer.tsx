import { FaGithubSquare, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer footer-center bg-primary border-t border-primary p-4 flex flex-row justify-center">
            <p>© 2024 Bilyana Karcheva</p>
            <div className="flex gap-2">
                <a href="https://github.com/bilyanakarcheva" target="_blank" rel="noopener noreferrer" className="text-accent font-bold">
                    <FaGithubSquare size="2.5em" className="text-accent" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;