import myPhoto from '../../assets/photo_Bilyana.jpg';
import { HERO_CONTENT } from '../../constants/constants';
import { motion } from 'framer-motion';

function Hero() {

  const container = (delay: number) => ({
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay },
    }
  });

  return (
    <div id="hero" className="flex flex-col w-full justify-center h-auto items-center border-b border-base-200 p-20 mt-20 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl text-left font-thin text-accent tracking-tight lg:mt-16 lg:text-8xl">
              Bilyana Karcheva
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 text-4xl text-left font-bold bg-clip-text tracking-tight text-transparent">
              Junior Software Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight text-2xl text-left">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className='w-full flex lg:pl-12 lg:w-1/2'>
          <div className="lg:max-w-lg lg:m-8">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-xl max-w-full max-h-full"
              src={myPhoto}
              alt="Bilyana Karcheva"
              style={{ maxHeight: '600px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;