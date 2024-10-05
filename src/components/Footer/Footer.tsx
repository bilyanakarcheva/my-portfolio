import { FaGithubSquare, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer footer-center bg-primary/80 border-t border-primary p-4 flex flex-row justify-between ">
            <p>© 2024 Bilyana Karcheva</p>
            <div className="flex gap-4">
                <FaGithubSquare size="2em" className="text-accent" />
                <a href="https://github.com/bilyanakarcheva" target="_blank" rel="noopener noreferrer" className="text-accent font-bold">Bilyana Karcheva</a>
            </div>
        </footer>
    );
}

export default Footer;