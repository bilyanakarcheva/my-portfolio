import { RiReactjsLine } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiJest } from "react-icons/si";

const Technologies = () => {
    return (
        <div className="border-b border-base-200 pb-24">
            <h2 className="my-20 text-center text-4xl font-bold text-accent">Technologies</h2>
            <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="rounded-2xl border-4 border-base-100 p-4">
                    <RiReactjsLine className="text-7xl text-react text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-base-100 p-4">
                    <FaNodeJs className="text-7xl text-react text-green-500" />
                </div>
                <div className="rounded-2xl border-4 border-base-100 p-4">
                    <FaJsSquare className="text-7xl text-react text-yellow-500/70" />
                </div>
                <div className="rounded-2xl border-4 border-base-100 p-4">
                    <BiLogoTypescript className="text-7xl text-react text-blue-600" />
                </div>
                <div className="rounded-2xl border-4 border-base-100 p-4">
                    <FaHtml5 className="text-7xl text-react text-red-500/80" />
                </div>
                <div className="rounded-2xl border-4 border-base-100 p-4">
                    <IoLogoCss3 className="text-7xl text-react text-blue-500" />
                </div>
                <div className="rounded-2xl border-4 border-base-100 p-4">
                    <RiTailwindCssFill className="text-7xl text-react text-green-600" />
                </div>
                <div className="rounded-2xl border-4 border-base-100 p-4">
                    <IoLogoFirebase className="text-7xl text-react text-yellow-500/90" />
                </div>
                <div className="rounded-2xl border-4 border-base-100 p-4">
                    <FaGitAlt className="text-7xl text-react text-red-600" />
                </div>
                <div className="rounded-2xl border-4 border-base-100 p-4">
                    <FaGithub className="text-7xl text-react " />
                </div>
                <div className="rounded-2xl border-4 border-base-100 p-4">
                    <SiJest className="text-7xl text-react text-red-900/85" />
                </div>
            </div>
        </div>
    )
}

export default Technologies