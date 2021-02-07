import React from 'react';
// This page has bootstrap
import'bootstrap/dist/css/bootstrap.min.css';
import "../styles/home.css";

import About from "./about";


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
                    <div className="col-md-6">
                        <h4>The Problem</h4>
                        <p>
                            There are racial disparities of COVID-19 cases, deaths, and vaccinations in the United States that aren’t being addressed. 
                            This leads communities of colors vulnerable during the pandemic.
                        </p>
                    </div>

                    <div className="col-md-6">
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
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <img className="card-img-top" src="https://gray-wbay-prod.cdn.arcpublishing.com/resizer/fln06LgHS8awdDtCHhWoikKI7UE=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/X3TAX5IMPBHY7EBGM6XW47YETE.jpg" alt="abcnews logo" />
                            <div className="card-body">
                                <h3 className="card-title">Racial disparities seen in New York City vaccination rates</h3>
                                <p><i>"New York City Mayor Bill de Blasio is acknowledging that Black and Latino New Yorkers are receiving COVID-19 vaccines at far lower rates than white or Asian residents"</i></p>
                                <button type="button" class="btn"><a href="https://abcnews.go.com/Health/wireStory/racial-disparities-york-city-vaccination-rates-75599686">Read Article</a></button>
                            </div>
                        
                        </div>
                    </div>

                    {/* Research Card 2*/}
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEb7BAHJY1Sy3gUxj1qU3yQ565CMpnRKMHxw&usqp=CAU" alt="abcnews logo" />
                            <div className="card-body">
                                <h3 className="card-title">Racial Disparities in COVID-19: Key Findings from Available Data and Analysis</h3>
                                <p><i>"Multiple analyses of available federal, state, and local data show that people of color are experiencing a disproportionate burden of COVID-19 cases and deaths."</i></p>
                                <button type="button" class="btn"><a href="https://www.kff.org/racial-equity-and-health-policy/issue-brief/racial-disparities-covid-19-key-findings-available-data-analysis/">Read Article</a></button>
                            </div>
                        
                        </div>
                    </div>

                    {/* Research Card 3*/}
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <img className="card-img-top" src="https://www.naaccr.org/wp-content/uploads/2016/11/cdc-logo.jpg" style={{width: "85%", alignSelf: "center"}} alt="abcnews logo" />
                            <div className="card-body">
                                <h3 className="card-title">Benefits of Getting a COVID-19 Vaccine</h3>
                                <p><i>"We understand that some people may be concerned about getting vaccinated now that COVID-19 vaccines are available in the United States. While more COVID-19 vaccines are being developed as quickly as possible, routine..."</i></p>
                                <button type="button" class="btn"><a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/vaccine-benefits.html">Read Article</a></button>
                            </div>
                        
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <img className="card-img-top" src="https://www.logosvgpng.com/wp-content/uploads/2018/03/the-mercury-news-logo-vector.png" style={{width: "80%", alignSelf: "center"}} alt="abcnews logo" />
                            <div className="card-body">
                                <h3 className="card-title">Racial disparities haunt Bay Area COVID vaccine programs</h3>
                                <p><i>"Local leaders are pushing for more equitable access to vaccines"</i></p>
                                <button type="button" class="btn"><a href="https://www.mercurynews.com/2021/02/04/racial-disparities-haunt-bay-area-covid-vaccine-programs/">Read Article</a></button>
                            </div>
                        
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <img className="card-img-top" src="https://media.istockphoto.com/vectors/food-and-drug-administration-fda-approved-vector-stamp-vector-id1250459233?k=6&m=1250459233&s=612x612&w=0&h=8X6uaTBGlxkAwklpcRsn7FDfB8QQbe_-nD8XdmWPXew=" style={{width: "50%", alignSelf: "center"}} alt="abcnews logo" />
                            <div className="card-body">
                                <h3 className="card-title">Pfizer-BioNTech COVID-19 Vaccine</h3>
                                <p><i>"On December 11, 2020, the U.S. Food and Drug Administration issued the first emergency use authorization (EUA) for a vaccine for the prevention of coronavirus disease 2019 (COVID-19) caused by severe acute respiratory..."</i></p>
                                <button type="button" class="btn"><a href="https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/pfizer-biontech-covid-19-vaccine">Read Article</a></button>
                            </div>
                        
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <img className="card-img-top" src="https://tukuz.com/wp-content/uploads/2020/09/healthline-logo-vector.png" style={{width: "75%", alignSelf: "center"}} alt="abcnews logo" />
                            <div className="card-body">
                                <h3 className="card-title">Why Some Black and Latinx People Are Reluctant to Get the COVID-19 Vaccine</h3>
                                <p><i>"Experts say we need to work directly with community leaders and amplify the voices of people of color to ease fears, build trust, and disseminate proper information about the vaccines."</i></p>
                                <button type="button" class="btn"><a href="https://www.healthline.com/health-news/why-some-black-and-latinx-people-are-reluctant-to-get-the-covid-19-vaccine#From-Tuskegee-to-now:-A-complex-history-of-medical-racism">Read Article</a></button>
                            </div>
                        
                        </div>
                    </div>

                </div>
            </div>

            <About />


            </>
        )
    }
}

export default Home;