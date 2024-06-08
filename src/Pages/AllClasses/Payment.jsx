import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
// console.log(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="p-20">
                <h2 className="text-4xl font-extrabold text-red-400 text-center">Payment</h2>
                
                <div>
                    <Elements stripe={stripePromise}>
                        <CheckOutForm></CheckOutForm>
                    </Elements>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Payment;