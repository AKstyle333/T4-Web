import { Link } from "react-router-dom";

const SuccessPage = () => (
    <div className="container mt-5">
        <h2>Payment Successful!</h2>
        <p>Your plan has been updated. Enjoy your new features!</p>
        <Link to="/dashboard" className="btn btn-primary">
            Go to Dashboard
        </Link>
    </div>
);

export default SuccessPage
