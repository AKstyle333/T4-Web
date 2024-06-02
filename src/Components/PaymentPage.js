import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DataContext from "./Context";

const PaymentPage = () => {
    const { plan } = useParams();
    const navigate = useNavigate();
    const { updateUserPlan } = useContext(DataContext);

    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        nameOnCard: "",
        billingAddress: "",
    });

    const planDetails = {
        free: { name: "Free Plan", price: 0 },
        starter: { name: "Starter Plan", price: 9.99 },
        pro: { name: "Pro Plan", price: 29.99 },
        enterprise: { name: "Enterprise Plan", price: null },
    };

    const handleInputChange = (e) => {
        setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the payment info to your backend for processing
        // For this example, we'll just simulate a successful payment
        console.log("Processing payment...", paymentInfo);
        setTimeout(() => {
            console.log("Payment successful!");
            updateUserPlan(plan);
            navigate("/success");
        }, 2000);
    };

    if (!planDetails[plan]) {
        return (
            <div className="container mt-5">
                <h2>Invalid plan selected.</h2>
            </div>
        );
    }

    if (plan === "enterprise") {
        return (
            <div className="container mt-5">
                <h2>Enterprise Plan - Contact Sales</h2>
                <p>For our Enterprise Plan, please contact our sales team for a custom quote and tailored solution.</p>
                <button className="btn btn-primary" onClick={() => navigate("/contact-sales")}>
                    Contact Sales
                </button>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <h2>Purchase {planDetails[plan].name}</h2>
            {plan !== "free" && <p>Monthly Payment: ${planDetails[plan].price}</p>}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="cardNumber" className="form-label">
                        Card Number
                    </label>
                    <input type="text" className="form-control" id="cardNumber" name="cardNumber" value={paymentInfo.cardNumber} onChange={handleInputChange} required />
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="expiryDate" className="form-label">
                            Expiry Date
                        </label>
                        <input type="text" className="form-control" id="expiryDate" name="expiryDate" placeholder="MM/YY" value={paymentInfo.expiryDate} onChange={handleInputChange} required />
                    </div>
                    <div className="col">
                        <label htmlFor="cvv" className="form-label">
                            CVV
                        </label>
                        <input type="text" className="form-control" id="cvv" name="cvv" value={paymentInfo.cvv} onChange={handleInputChange} required />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="nameOnCard" className="form-label">
                        Name on Card
                    </label>
                    <input type="text" className="form-control" id="nameOnCard" name="nameOnCard" value={paymentInfo.nameOnCard} onChange={handleInputChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="billingAddress" className="form-label">
                        Billing Address
                    </label>
                    <input type="text" className="form-control" id="billingAddress" name="billingAddress" value={paymentInfo.billingAddress} onChange={handleInputChange} required />
                </div>

                <button type="submit" className="btn btn-primary">
                    Complete Purchase
                </button>
            </form>
        </div>
    );
};

export default PaymentPage;
