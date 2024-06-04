import { Link } from "react-router-dom";


const BecomeTeacher = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content gap-10 flex-col lg:flex-row ">
                    <img src="https://i.ibb.co/M55hgFF/OIP.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Want to Become a Teacher</h1>
                        <p className="py-6">Here arround the world instructors are teaches tech and give advice from LearnBridge.We provide tools and skills to teach what you want.</p>

                        <Link to='/teachesOnLearnBridge'>
                        <a href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-sky-400 border-2 border-sky-400 rounded-full hover:text-white group hover:bg-gray-50">
                            <span className="absolute left-0 block w-full h-0 transition-all bg-sky-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative">Become a Teacher</span>
                        </a>
                        
                        </Link>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeTeacher;