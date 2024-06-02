import { Typewriter } from "react-simple-typewriter";


const Banner = () => {
    return (
        <div>
            <div className="relative">
                <img className="w-full" src="https://i.ibb.co/dj5nW7J/digital-learning-in-the-wor-50b5ae47ce.jpg" alt="" />
                <div className="absolute top-1/3 lg:left-20">
                    <h1 className="text-4xl font-extrabold">LearnBridge</h1>
                    <p className="text-2xl font-bold">Here Come to Learn and Share Your
                        <span className="ml-3" style={{ color: 'red', fontWeight: 'bold' }}>
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
                </div>
            </div>
        </div>
    );
};

export default Banner;