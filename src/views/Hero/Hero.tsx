import myPhoto from '../../assets/photo_Bilyana.jpg';
import { HERO_CONTENT } from '../../constants/constants';
function Hero() {
  return (
    <div id="hero" className="border-b border-base-200 p-20 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl text-left font-thin text-accent tracking-tight lg:mt-16 lg:text-8xl">
              Bilyana Karcheva
            </h1>
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 text-4xl text-left font-bold bg-clip-text tracking-tight text-transparent">
              Junior Software Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tight text-2xl text-left">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        {/* <div className="w-full lg:w-1/2 ">
          <div className="flex items-center justify-center">
            <img className="rounded-xl" src={myPhoto} alt="about"></img>
          </div>
        </div> */}
        <div className='w-full flex flex-wrap justify-center lg:w-1/2'>
            <div className="flex lg:max-w-lg lg:p-8">
              <img 
              className="rounded-xl max-w-full max-h-full" 
              src={myPhoto} 
              alt="Bilyana Karcheva" 
              style={{ maxHeight: '600px'}}
              />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;