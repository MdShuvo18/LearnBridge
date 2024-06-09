import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const MyProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={user?.photoURL} alt="image" className="rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user?.displayName}</h2>
                    <p>{user?.email}</p>
                    <div className="card-actions">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                    </div>
                    <p>{user.role}</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;