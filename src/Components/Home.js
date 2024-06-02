import React from "react";
import image1 from "../Assets/images/image1.jpg";
import image2 from "../Assets/images/image2.jpg";
import image3 from "../Assets/images/image3.jpg";

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
            <div className="container-fluid p-5 text-center bg-secondary">
                <h3 className="text-white">NewsLatter</h3>

                <div className="pt-3">
                    <input type="text" placeholder="Enter Your Email" className="w-25 p-1 me-2" />
                    <button className="btn btn-success">Subscribe</button>
                </div>
            </div>
        </>
    );
};

export default Home;
