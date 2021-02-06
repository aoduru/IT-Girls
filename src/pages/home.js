import React from 'react';
// This page has bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/home.css";


class Home extends React.Component {

    render() {
        return (
            <>
                <div className="home-hero flex">
                    <div className="container">
                        <h1>Covid-19</h1>
                    </div>
                </div>


                <div className="home-section container">
                    <h2>Don't be misinformed about the Vaccine</h2>
                </div>
            </>
        )
    }
}

export default Home;