import { useQuery } from "@tanstack/react-query";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";






const AllClasses = () => {
    const axiosPublic = useAxiosPublic()
    const { data: classes = [], } = useQuery({    
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allclass')
            // console.log(res.data)
            return res.data
        }

    })
    // console.log(classes)

    // const handleEnroll = async (classId, refetch) => {
    //     const res = await axiosPublic.post(`/enroll/${classId}`)
    //     if (res.status == 200) {
    //         Swal.fire({
    //             icon: 'success',
    //             title: 'Enrolled Successfully',
    //             text: 'Enrolled Successfully',

    //         })
    //         refetch()
    //     } else {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: 'Something went wrong!',
    //         })
    //     }
    // }

    // const [totalEnroll, setTotalEnroll] = useState()
    // useEffect(() => {
    //     const enrollMents = async () => {
    //         const res = await axiosPublic.get('/enroll');
    //         setTotalEnroll(res.data)
    //     };
    //     enrollMents();

    // }, [axiosPublic])

    
    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:p-20 grid lg:grid-cols-2 gap-5 justify-items-center">
                {
                    classes.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={item.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className='text-xl font-extrabold text-blue-300'>{item.title}</h2>
                            <p className="text-lg font-semibold"><span className="text-green-600">Posted By :</span> {item.name}</p>
                            <p>Category : {item.category}</p>
                            <p>  {
                                item.description.split(' ').length > 35
                                    ? item.description.split(' ').slice(0, 35).join(' ') + '...'
                                    : item.description
                            }</p>
                            <div className="flex gap-10">
                                <p className="text-lg font-semibold text-red-400"><span className="text-green-600">Price :</span>${item.price}</p>
                                <p className="text-lg font-semibold text-green-600"><span>Total Enroll : </span></p>
                            </div>
                            <div  className="card-actions">
                               <Link to={`/enroll/${item._id}`}>
                                    <button className="btn btn-outline btn-info">Enroll</button>
                                </Link>

                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllClasses;