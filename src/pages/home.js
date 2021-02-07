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
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        image can go here
                    </div>

                    <div className="col-md-6 col-lg-8">
                        <h4>The Problem</h4>
                        <p>
                            There are racial disparities of COVID-19 cases, deaths, and vaccinations in the United States that aren’t being addressed. 
                            This leads communities of colors vulnerable during the pandemic.
                        </p>

                        <h4>Our Solution</h4>
                        <p>
                            We want to build a central application that educates its users about vaccine progress, availability, and eligibility.
                            Our goal is to reach Black, Latinx, and Native American communities, properly inform them about the vaccine, and reduce anxiety or doubt about getting the Covid-19 Vaccine. 
                            We hope that with this application, we can provide facts on various vaccines that are currently available, combat fake news, and support communities of color in making this decision.
                        </p>
                    </div>
                </div>
            </div>


            <div className="home-section container">
                <h2>Research</h2>
                <div className="row">

                    {/* Research Card 1*/}
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="https://gray-wbay-prod.cdn.arcpublishing.com/resizer/fln06LgHS8awdDtCHhWoikKI7UE=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/X3TAX5IMPBHY7EBGM6XW47YETE.jpg" />
                            <div className="card-body">
                                <h3 className="card-title">Racial disparities seen in New York City vaccination rates</h3>
                                <p><i>"New York City Mayor Bill de Blasio is acknowledging that Black and Latino New Yorkers are receiving COVID-19 vaccines at far lower rates than white or Asian residents"</i></p>
                                <button type="button" class="btn"><a href="https://abcnews.go.com/Health/wireStory/racial-disparities-york-city-vaccination-rates-75599686">Read Article</a></button>
                            </div>
                        
                        </div>
                    </div>


                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                </div>
            </div>


            </>
        )
    }
}

export default Home;