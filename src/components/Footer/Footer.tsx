import { FaGithubSquare, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer footer-center p-4 flex flex-row justify-between bg-base-200">
            <p>© 2024 Bilyana Karcheva</p>
            <div className="flex gap-4">
                <FaGithubSquare size="2em" className="text-accent" />
                <a href="https://github.com/bilyanakarcheva" target="_blank" rel="noopener noreferrer" className="text-accent">Bilyana Karcheva</a>
            </div>
        </footer>
    );
}

export default Footer;