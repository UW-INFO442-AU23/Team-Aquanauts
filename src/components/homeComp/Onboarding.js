import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import '../../index.css';
import HomePage from './HomePage.js';

export default function Onboarding(props) {

    return (
        <div className="background-onboarding">
            <div className="onboarding-screen">
                <div className="onboarding-header">
                    <header>
                        <h2 className="onboarding-the-header">the</h2>
                        <h1 className="onboarding-aquapod-header">AquaPod</h1>
                    </header>
                </div>
                <main>
                    <div className="onboarding-about">
                        <div className="onboarding-intro">
                            <p className="mission-statement">Our goal is to promote water and sanitation access in King County. We want to educate the people of King County
                                on water facilities to ensure that they can locate necessary sanitation resources as well as opportunities to donate.
                                Our mission supports the United Nations SDG of Clean Water and Sanitation by making it easy for people to educate themselves on
                                water scarcity and hygiene as well as find free water resources and opportunities to donate to charities that share our
                                goals.</p>
                            <div className="un-video">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/LCKsU4bPFOQ?si=xWd3xcz-l96bG57P" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                        <h2 className="button-link-header-onboarding">What to get on board? Are you a...</h2>
                        <div className="button-links-onboarding">
                            <div className="d-flex flex-row w-25" id="aquanaut-links">
                                <Link to='/home' className="btn btn-info btn-lg mb-5 nav-link" id="new-aquanaut">New Aquanaut</Link>
                                <Link to='/home' className="btn btn-info btn-lg mb-5 nav-link" id="exist-aquanaut">Existing Aquanaut</Link>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="features-onboarding">
                    <div className="features-box-onboarding">
                        <div className="features-text-onboarding">
                            <h2 className="our-features-text">Our Features</h2>
                            <p className="title-desc">Navigate through any one of our offered opportunities!</p>
                        </div>
                        <div className="features-images">
                            <img className="resource-icon" src="https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/Drop.png?raw=true" alt="waterdrop resource icon"/>
                            <img className="donation-icon" src="https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/Smiley.png?raw=true" alt="smile face donation icon"/>
                            <img className="education-icon" src="https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/BookBookmark.png?raw=true" alt="book education icon"/>
                        </div>
                        <div className="features-feature-titles">
                            <h3 className="resource-title">Resources</h3>
                            <h3 className="donation-title">Donations</h3>
                            <h3 className="education-title">Education</h3>
                        </div>
                        <div className="features-feature-desc">
                            <p className="resource-desc">Find nearby resources within King County by a search of an existing zip code, ranging from public bathrooms, showers, and water refill stations.</p>
                            <p className="donation-desc">Explore various water and hygeine causes serving to provide resources to those in need and meet ways to contribute to the change.</p>
                            <p className="education-desc">Want to learn more about the initiative? Engage with interactive flash cards containing statistics and current facts about the issue.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}