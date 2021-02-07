import React from 'react';
// This page has bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/home.css";


class Home extends React.Component {

    render() {
        return (
            <>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4 home-hero">
                    <div>
                        <h1>Covid-19</h1>
                        <h2>Breaking down the Vaccine</h2>
                    </div>
                </div>

                {/* Hero Image Here */}
                <div className="col-xs-12 col-sm-6 col-md-8 home-hero-img"></div>
            </div>

            <div className="home-section container">
                <h2>Be Informed</h2>
            </div>
            </>
        )
    }
}

export default Home;