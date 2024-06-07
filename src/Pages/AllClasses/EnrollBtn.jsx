import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const EnrollBtn = () => {
    const itemDetails = useLoaderData()
    // console.log(itemDetails)
    const { id } = useParams()
    // console.log(id)
    const itemDetail = itemDetails.find(item => item._id === id)
    // console.log(itemDetail)

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
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EnrollBtn;