import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"
import axios from "axios"

const KEY = "pk_test_51N8UR5HJev4Mbm4Hrw1mLrILf4eCP0vJQlD8YJMupvIZOz5CXwgV5tAFYOKb8Jal7rGdb4i5uCMriqkO06kvyjnm00yTx68pGh"

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
    // const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token)
        console.log(token)
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment", {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                );
                console.log(res.data)
                // navigate("/success")
            } catch(err) {
                console.log(err)
            }
        }
        stripeToken && makeRequest();
    },[stripeToken])

    return (
        <div
            styles={{
                height: "100vh",
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
            }}
        >
         {stripeToken ? (
            <span>Processing. Please wait...</span>
         ) : (   
          <StripeCheckout 
            name="Rodella Shop"
            image="https://avatars.githubusercontent.com/u/60709324?v=4"
            billingAddress
            shippingAddress
            description="Your total is $20"
            amount={2000} //cents
            token={onToken}
            stripeKey={KEY}
            >
            <button
                style={{
                    border: "none",
                    width: 120,
                    borderRadius:5,
                    padding: "20px" ,
                    background: "black",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                }}
            >
                Pay Now
            </button>
         </StripeCheckout>
        )} 
        </div>
    )
}

export default Pay;