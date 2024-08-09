import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
    return (
        <div className="bg-base-300 w-full h-1/2 rounded-lg p-20">
            <div className="flex flex-row gap-10 justify-center items-center bg-base-300 w-full h-1/2 rounded-lg p-20">
                <div className="flex flex-col items-center gap-3 p-2">
                    <FaPhoneAlt size="2em" className="text-2xl font-bold text-accent" />
                    <p className="font-bold text-accent">PHONE</p>
                    <p className="font-bold text-accent">+359 878 798 207</p>
                </div>
                <div className="flex flex-col items-center gap-3 p-2">
                    <MdEmail size="2em" className="text-2xl font-bold text-accent" />
                    <p className="font-bold text-accent">EMAIL</p>
                    <p className="font-bold text-accent">bilyana.karcheva@gmail.com</p>
                </div>
                <div className="flex flex-col items-center gap-3 p-2">
                    <FaLinkedin size="2em" className="text-2xl font-bold text-accent" />
                    <p className="font-bold text-accent">LINKEDIN</p>
                    <a href="https://www.linkedin.com/in/bilyana-karcheva-a45b26105/" className="link link-accent link-hover font-bold ">Bilyana Karcheva</a>
                </div>
                <a href="mailto:karcheva.bilyana@gmail.com" className="text-accent"></a>
            </div>
        </div>
    );
}

export default Contact;