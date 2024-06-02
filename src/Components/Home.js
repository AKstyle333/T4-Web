// import React from "react";
// import image1 from "../Assets/images/image1.jpg";
// import image2 from "../Assets/images/image2.jpg";
// import image3 from "../Assets/images/image3.jpg";

// const Home = () => {
//     return (
//         <>
//             <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <img src={image1} className="d-block w-100 h-75" alt="..." />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={image2} className="d-block w-100 h-75" alt="..." />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={image3} className="d-block w-100 h-75" alt="..." />
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>
//             <div className="container">
//                 <div className="row py-5">
//                     <div className="col-12">
//                         <h1 className="text-center">Welcome to our website</h1>
//                         <p className="text-center">
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatem, quia quidem, voluptate quibusdam, quas quae quos quas quae quas quae quas quae quas quae quas
//                             quae{" "}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="container">
//                 <div className="row py-5">
//                     <div className="col-12">
//                         <h1 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing. </h1>
//                         <p className="text-center">
//                             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed nostrum voluptatem libero exercitationem. Ullam placeat quaerat consequatur quam enim molestiae aliquid
//                             doloribus incidunt exercitationem aut.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="container-fluid p-5 text-center bg-secondary">
//                 <h3 className="text-white">NewsLatter</h3>

//                 <div className="pt-3">
//                     <input type="text" placeholder="Enter Your Email" className="w-25 p-1 me-2" />
//                     <button className="btn btn-success">Subscribe</button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Home;
import React from "react";
import image1 from "../Assets/images/image1.jpg";
import image2 from "../Assets/images/image2.jpg";
import image3 from "../Assets/images/image3.jpg";
import product1 from "../Assets/images/product1.jpeg";
import product2 from "../Assets/images/product2.jpeg";
import product3 from "../Assets/images/product3.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100 h-75" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100 h-75" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100 h-75" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container">
                <div className="row py-5">
                    <div className="col-12">
                        <h1 className="text-center">Welcome to our website</h1>
                        <p className="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatem, quia quidem, voluptate quibusdam, quas quae quos quas quae quas quae quas quae quas quae quas
                            quae{" "}
                        </p>
                    </div>
                </div>
            </div>

            {/* Featured Products Section */}
            <div className="container-fluid bg-light py-5">
                <h2 className="text-center mb-4">Featured Products</h2>
                <div className="row justify-content-center">
                    {[product1, product2, product3].map((product, index) => (
                        <div key={index} className="col-md-3 mb-4">
                            <div className="card h-100">
                                <img src={product} className="card-img-top" alt={`Product ${index + 1}`} />
                                <div className="card-body">
                                    <h5 className="card-title">Product {index + 1}</h5>
                                    <p className="card-text">A brief description of our amazing product that you can't resist.</p>
                                    <Link to="#" className="btn btn-primary">
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="row py-5">
                    <div className="col-12">
                        <h1 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing. </h1>
                        <p className="text-center">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed nostrum voluptatem libero exercitationem. Ullam placeat quaerat consequatur quam enim molestiae aliquid
                            doloribus incidunt exercitationem aut.
                        </p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="container py-5">
                <h2 className="text-center mb-4">What Our Customers Say</h2>
                <div className="row">
                    {[1, 2, 3].map((_, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <p className="card-text">"I never knew I needed this product until I tried it. Now I can't live without it! The quality is amazing."</p>
                                    <footer className="blockquote-footer mt-2">John Doe {index + 1}</footer>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="container-fluid bg-dark text-white py-5">
                <h2 className="text-center mb-4">Why Choose Us</h2>
                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <i className="fas fa-award fa-3x mb-3"></i>
                        <h4>Quality</h4>
                        <p>We never compromise on quality. Our products are made with the finest materials.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <i className="fas fa-truck fa-3x mb-3"></i>
                        <h4>Fast Shipping</h4>
                        <p>Get your products delivered quickly with our express shipping options.</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <i className="fas fa-headset fa-3x mb-3"></i>
                        <h4>24/7 Support</h4>
                        <p>Our dedicated team is always here to help you, any time, any day.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-5 text-center bg-secondary">
                <h3 className="text-white">Newsletter</h3>
                <div className="pt-3">
                    <input type="text" placeholder="Enter Your Email" className="w-25 p-1 me-2" />
                    <button className="btn btn-success">Subscribe</button>
                </div>
            </div>
        </>
    );
};

export default Home;