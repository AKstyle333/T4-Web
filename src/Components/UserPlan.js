import React, { useContext } from "react";
import DataContext from "./Context";
import { Link } from "react-router-dom";
import freeplan from "../Assets/images/free-plan.png";
import starterplan from "../Assets/images/starterplan.png";
import proplan from "../Assets/images/proplan.png";
import enterpriseplan from "../Assets/images/enterpriseplan.png";

const UserPlan = () => {
    const { showUserPage } = useContext(DataContext);

    return (
        <>
            {showUserPage === true ? (
                <>
                    <div className="container m-5 mx-auto w-75">
                        <div className="card h-100">
                            <h3 className="card-header bg-light text-center">You Have Free Forever Plan</h3>
                            <img src={freeplan} className="card-img-top w-25 mx-auto mt-3" alt="An open gift box, symbolizing our free offering" />
                            <div className="card-body">
                                <h5 className="card-title">Free Plan</h5>
                                <p className="card-text">Try our service without any cost. Our Free Plan is perfect for personal use or to test our features. No credit card required.</p>
                                <ul className="list-unstyled">
                                    <li>✅ Basic Features</li>
                                    <li>✅ 1GB Storage</li>
                                    <li>✅ Community Support</li>
                                    <li>✅ Ad-Supported</li>
                                    <li>❌ No Ads (Pro+)</li>
                                    <li>❌ API Access (Pro+)</li>
                                </ul>
                                <p className="card-text">
                                    <strong className="text-success">$0/month</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-4 g-4 mx-2">
                        <div className="col">
                            <div className="card h-100">
                                {/* <div className="card-header bg-light">Free Forever</div> */}
                                <img src={freeplan} className="card-img-top w-25 mx-auto mt-3" alt="An open gift box, symbolizing our free offering" />
                                <div className="card-body">
                                    <h5 className="card-title">Free Plan</h5>
                                    <p className="card-text">Try our service without any cost. Our Free Plan is perfect for personal use or to test our features. No credit card required.</p>
                                    <ul className="list-unstyled">
                                        <li>✅ Basic Features</li>
                                        <li>✅ 1GB Storage</li>
                                        <li>✅ Community Support</li>
                                        <li>✅ Ad-Supported</li>
                                        <li>❌ No Ads (Pro+)</li>
                                        <li>❌ API Access (Pro+)</li>
                                    </ul>
                                    <p className="card-text">
                                        <strong className="text-success">$0/month</strong>
                                    </p>
                                    <Link href="#" className="btn btn-outline-primary">
                                        Start Free
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100">
                                <img src={starterplan} className="card-img-top w-25 mx-auto mt-3" alt="A rocket launching, symbolizing the start of your journey" />
                                <div className="card-body">
                                    <h5 className="card-title">Starter Plan</h5>
                                    <p className="card-text">Begin your adventure with our Starter Plan. Perfect for individuals and small projects. Get more storage and email support.</p>
                                    <ul className="list-unstyled">
                                        <li>✅ All Free Features</li>
                                        <li>✅ No Ads</li>
                                        <li>✅ 5GB Storage</li>
                                        <li>✅ Email Support</li>
                                        <li>❌ Team Features (Pro+)</li>
                                    </ul>
                                    <p className="card-text">
                                        <small className="text-muted">$9.99/month</small>
                                    </p>
                                    <Link href="#" className="btn btn-primary">
                                        Choose Starter
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100">
                                <img src={proplan} className="card-img-top w-25 mx-auto mt-3" alt="A professional workspace with dual monitors" />
                                <div className="card-body">
                                    <h5 className="card-title">Pro Plan</h5>
                                    <p className="card-text">Upgrade to Pro for a superior experience. Enjoy more storage, priority support, and advanced tools.</p>
                                    <ul className="list-unstyled">
                                        <li>✅ Everything in Starter</li>
                                        <li>✅ 50GB Storage</li>
                                        <li>✅ Priority Support</li>
                                        <li>✅ Team Collaboration</li>
                                        <li>✅ API Access</li>
                                    </ul>
                                    <p className="card-text">
                                        <small className="text-muted">$29.99/month</small>
                                    </p>
                                    <Link href="#" className="btn btn-primary">
                                        Go Pro
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 border-primary">
                                <div className="card-header bg-primary text-white">Most Popular</div>
                                <img src={enterpriseplan} className="card-img-top w-25 mx-auto mt-3" alt="A skyline of corporate buildings, representing enterprise-level solutions" />
                                <div className="card-body">
                                    <h5 className="card-title">Enterprise Plan</h5>
                                    <p className="card-text">Unleash limitless potential. Custom-tailored for large organizations with advanced needs.</p>
                                    <ul className="list-unstyled">
                                        <li>✅ Everything in Pro</li>
                                        <li>✅ Unlimited Storage</li>
                                        <li>✅ 24/7 Dedicated Support</li>
                                        <li>✅ Advanced Security</li>
                                        <li>✅ Custom Integrations</li>
                                        <li>✅ Account Manager</li>
                                    </ul>
                                    <p className="card-text">
                                        <small className="text-muted">Custom Pricing</small>
                                    </p>
                                    <Link href="#" className="btn btn-primary">
                                        Contact Sales
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="p-5 text-center">
                        <h3>Your Email or Password is Incorrect Please Go Back and Retry Login</h3>
                        <Link to="/signup" className="btn btn-primary mt-3">
                            Go Back
                        </Link>
                    </div>
                </>
            )}
        </>
    );
};

export default UserPlan;
