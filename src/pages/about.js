import React from 'react';
// This page has bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/about.css";

import placeholderimage from "../images/image.jpeg";
import camisa from "../images/camisa.jpg";
import uju from "../images/uju.jpg";

class About extends React.Component {
    render() {
        return (
            <>
                <div className="flex flex-col about-container">
                    <div className="about-section containers">
                        <h1>About</h1>


                        <h2>The Problem</h2>
                        <div className="row">
                        </div>

                        <div className="about-section-divider"></div>
                        <h2>Our Solution</h2>
                        <div className="row">
                        </div>





                        <div className="about-section-divider"></div>
                        <h2>Meet the Team</h2>
                        <div className="row">

                            {/* Team Member 1 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                    <img className="card-img-top" src={placeholderimage} alt="Shanice" />
                                    <div class="card-body">
                                        <h5 class="card-title">Shanice</h5>
                                        <p class="card-text">bio text.</p>
                                        <a href="#" class="btn btn-primary">Shanice's LinkedIn</a>
                                    </div>
                                </div>
                            </div>

                            {/* Team Member 2 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                    <img className="card-img-top" src={uju} alt="Uju" />
                                    <div class="card-body">
                                        <h5 class="card-title">Uju</h5>
                                        <p class="card-text">bio text.</p>
                                        <a href="#" class="btn btn-primary">Uju's LinkedIn</a>
                                    </div>
                                </div>
                            </div>

                            {/* Team Member 3 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                    <img className="card-img-top" src={placeholderimage} alt="Yesenia" />
                                    <div class="card-body">
                                        <h5 class="card-title">Yesenia</h5>
                                        <p class="card-text">bio text.</p>
                                        <a href="#" class="btn btn-primary">Yesenia's LinkedIn</a>
                                    </div>
                                </div>
                            </div>

                            {/* Team Member 4 */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="card">
                                    <img className="card-img-top" src={camisa} alt="Camisa" />
                                    <div class="card-body">
                                        <h5 class="card-title">Camisa</h5>
                                        <p class="card-text">bio text.</p>
                                        <a href="#" class="btn btn-primary">Camisa's LinkedIn</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                


                </div>
            </>
        )
    }
}

export default About;