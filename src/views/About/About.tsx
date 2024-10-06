import aboutImg from '../../assets/about.png'
import { ABOUT_TEXT } from '../../constants/constants';
function About() {
    return (
        <div id="about" className="border-b border-base-200 flex flex-col w-full h-auto min-h-screen p-20">
            <h1 className="text-4xl font-bold text-accent text-center my-20">
                About
                <span className="text-accent/70"> Me</span>
            </h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-xl" src={aboutImg} alt="about"></img>
                    </div>
                </div>
                    <div className='w-full lg:w-1/2'>
                        <div className='flex justify-center lg:justify-start'>
                            <p className='my-2 max-w-2xl py-6'>{ABOUT_TEXT}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default About;