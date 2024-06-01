import React from "react";
import image1 from "../Assets/images/image1.jpg";
import image2 from "../Assets/images/image2.jpg";
import image3 from "../Assets/images/image3.jpg";

const Home = () => {
    return (
        <>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={image1} class="d-block w-100 h-75" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={image2} class="d-block w-100 h-75" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={image3} class="d-block w-100 h-75" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
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
            <div className="container pb-5 text-center">
                <h3>NewsLatter</h3>

                <div className="pt-3">
                    <input type="text" placeholder="Enter Your Email" className="p-1 me-2" />
                    <button className="btn btn-success">Subscribe</button>
                </div>
            </div>
        </>
    );
};

export default Home;
