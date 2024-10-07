import aboutImg from '../../assets/about.png'
import { ABOUT_TEXT } from '../../constants/constants';
import { motion } from 'framer-motion';

function About() {
    return (
        <div id="about" className="border-b border-base-200 flex flex-col w-full h-auto min-h-screen p-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold text-accent text-center my-20">
                About
                <span className="text-accent/70"> Me</span>
            </motion.h1>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-xl" src={aboutImg} alt="about"></img>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-2xl py-6'>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About;