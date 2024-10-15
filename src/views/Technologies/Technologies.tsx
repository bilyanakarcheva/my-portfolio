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
import { SiEslint } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { motion } from "framer-motion";

const Technologies = () => {

    const iconVariants = (duration: number) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse" as const
            }
        },
    });

    return (
        <div id="technologies" className="border-b border-base-200 px-3 lg:px-10 pb-24">
            <motion.h2 
                whileInView={ { opacity: 1, y:0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
            className="my-12 lg:my-20 text-center text-4xl font-bold text-accent">
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="flex flex-wrap justify-center items-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-base-100 p-4">
                    <RiReactjsLine className="text-5xl lg:text-7xl text-react text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-base-100 p-4">
                    <FaNodeJs className="text-5xl lg:text-7xl text-react text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-base-100 p-4">
                    <FaJsSquare className="text-5xl lg:text-7xl text-react text-yellow-500/70" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-base-100 p-4">
                    <BiLogoTypescript className="text-5xl lg:text-7xl text-react text-blue-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-base-100 p-4">
                    <FaHtml5 className="text-5xl lg:text-7xl text-react text-red-500/80" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-base-100 p-4">
                    <IoLogoCss3 className="text-5xl lg:text-7xl text-react text-blue-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-base-100 p-4">
                    <RiTailwindCssFill className="text-5xl lg:text-7xl text-react text-green-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-base-100 p-4">
                    <IoLogoFirebase className="text-5xl lg:text-7xl text-react text-yellow-500/90" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-base-100 p-4">
                    <FaGitAlt className="text-5xl lg:text-7xl text-react text-red-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-base-100 p-4">
                    <FaGithub className="text-5xl lg:text-7xl text-react " />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-base-100 p-4">
                    <SiJest className="text-5xl lg:text-7xl text-react text-red-900/85" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-base-100 p-4">
                    <SiEslint className="text-5xl lg:text-7xl text-react text-indigo-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-base-100 p-4">
                    <SiVite className="text-5xl lg:text-7xl text-react text-violet-600/90" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies