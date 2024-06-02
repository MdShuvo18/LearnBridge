import { Typewriter } from "react-simple-typewriter";


const Banner = () => {
    return (
        <div>
            <div className="relative lg:space-y-3">
                <img className="w-full" src="https://i.ibb.co/dj5nW7J/digital-learning-in-the-wor-50b5ae47ce.jpg" alt="" />
                <div className="absolute top-1/3 lg:left-20">
                    <h1 className="text-4xl font-extrabold">LearnBridge</h1>
                    <p className="text-2xl font-bold lg:mb-3">Here Come to Learn and Share Your
                     <span className="ml-2" style={{ color: 'red', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Thoughts', 'Concepts', 'Discover']}
                                loop={0 | false}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span>
                    </p>
                    <div className="mt-2">
                        <a href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-green-300 group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-white">Explore</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;