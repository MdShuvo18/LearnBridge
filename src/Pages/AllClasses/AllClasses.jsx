import { useQuery } from "@tanstack/react-query";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const AllClasses = () => {
    const axiosPublic = useAxiosPublic()
    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allclass')
            return res.data
        }
    })
    console.log(classes)
    return (
        <div>
            <Navbar></Navbar>
            <div className="p-20">
                {classes.length}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllClasses;