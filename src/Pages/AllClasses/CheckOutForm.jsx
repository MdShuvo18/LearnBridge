import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOutForm = () => {
    const { user } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const itemDetail = location.state?.itemDetail;
    const [clientSecret, setClientSecret] = useState('')
    const [error, setError] = useState('')
    const [transectionId, setTransectionId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { amount: itemDetail.price })
            .then(res => {
                // console.log('client secret',res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, itemDetail.price])

    // console.log(clientSecret)

    // const handlePay = (e) => {
    //     console.log(e)
    //     Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: "Payment success",
    //         showConfirmButton: false,
    //         timer: 1500
    //     });
    //       navigate('/dashbord/myenrollclass')
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'Anonymous',
                    name: user?.displayName || 'Anonymous'

                }
            }
        })

        if (confirmError) {
            console.log(confirmError.message)

        } else {
            console.log(paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                setTransectionId(paymentIntent.id)
                const payment = {
                    email: user?.email,
                    amount: itemDetail?.price,
                    title: itemDetail?.title,
                    transectionId: paymentIntent.id,
                    image: itemDetail?.image,
                    name: itemDetail?.name
                }
                const res = await axiosSecure.post('/payment', payment)
                console.log(res.data)

            }

        }
    }
    return (
        <div>
            <p className="text-3xl font-extrabold text-center mb-4">Pay Now : ${itemDetail.price}</p>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button  className="btn btn-outline btn-success btn-xs" type="submit" disabled={!stripe}>
                    Pay
                </button>
                <p className="text-xl text-red-600">{error}</p>
            </form>
        </div>
    );
};

export default CheckOutForm;