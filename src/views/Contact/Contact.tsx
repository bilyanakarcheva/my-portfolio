import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CONTACTS } from "../../constants/constants";
import { motion } from "framer-motion";

function Contact() {
    return (
        <div id="contact" className="w-full h-1/2 p-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold text-accent text-center mb-10">
                Contact
                <span className="text-accent/70"> Me</span>
            </motion.h1>
            <div className="flex flex-wrap gap-10 text-center justify-center items-center bg-base-300 w-full h-1/2 rounded-lg p-20">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col font-bold text-accent items-center gap-3 p-2">
                    <FaPhoneAlt size="2em" className="text-2xl font-bold text-accent" />
                    <p>PHONE</p>
                    <p className="whitespace-nowrap">{CONTACTS.phone}</p>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col font-bold text-accent items-center gap-3 p-2">
                    <MdEmail size="2em" className="text-2xl font-bold text-accent" />
                    <p>EMAIL</p>
                    <a
                        href="mailto:{CONTACTS.email}"
                        className="link link-accent link-hover text-accent">
                        {CONTACTS.email}
                    </a>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col font-bold text-accent items-center gap-3 p-2">
                    <FaLinkedin size="2em" className="text-2xl font-bold text-accent" />
                    <p>LINKEDIN</p>
                    <a
                        href="https://www.linkedin.com/in/bilyana-karcheva-a45b26105/"
                        className="link link-accent link-hover font-bold whitespace-nowrap"
                        target="_blank"
                        rel="noopener noreferrer">
                        Bilyana Karcheva
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;