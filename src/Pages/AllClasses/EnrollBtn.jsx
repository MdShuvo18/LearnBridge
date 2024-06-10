import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const EnrollBtn = () => {
    const itemDetails = useLoaderData()
    console.log(itemDetails)
    const { id } = useParams()
    console.log(id)
    const itemDetail = itemDetails.find(item => item._id === id)
    console.log(itemDetail)

    return (
        <div>
            <Navbar></Navbar>

            <div className="card w-full h-[800px]  bg-base-100 shadow-xl mb-10">
                <figure><img src={itemDetail.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Title : {itemDetail.title}</h2>
                    <p>{itemDetail.description}</p>
                    <p className="card-title">Teacher : {itemDetail.name}</p>
                    <p className="card-title">Price : <span className="text-red-400"> ${itemDetail.price}</span></p>

                    <div className="card-actions justify-end">
                        <Link to='/payment' state={{ itemDetail }}>
                            <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">PAY NOW </span>
                            </a>
                        </Link>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EnrollBtn;