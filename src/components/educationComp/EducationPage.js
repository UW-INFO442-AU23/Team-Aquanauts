import React from 'react';
import { NavLink } from 'react-router-dom'
import '../../index.css'
import NavBar from '../NavBar.js';

export default function EducationPage(props) {
  return (
    <div className="background-page">
      <NavBar />
      <header className="page-title">
        <h1>Education Page</h1>
      </header>
      <main>
        <div className="container">
          <div className="row">

        <div className='flex-container'>
          <div className='education-intro'>
            <h2 className='ed-intro-heading'>Welcome to the Education Page of the Aquapod!</h2>
            <p ed-intro-text>
              The Aquapod's education page provides user with common information and issues with the water in the King County area.
              To learn more about specific topics hover over the cards on your personal computer or tap/click on a mobile device to view 
              key information located on the flip side of each card. Lastly, each information card has a button on the back that links to 
              external sites where even more information can be found. Happy learning Aquanauts!
            </p>
          </div>
        </div>

            {/* Card 1*/}
            <div className="col-sm-4">
              <div className="card card-flip h-100">
                <div className="card-front text-white bg-dark">
                  <div className="card-body">
                    <img src="https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/harbor-activity.jpg?raw=true" className="card-img-top" 
                      alt="Seattle Waterfront that sits on Elliot Bay. Several boats and the Great Wheel of Seattle are set in the background"/>
                    <h3 className="flip-card-title">King County Water</h3>
                    <p className="flip-card-text">Hover or tap to learn more about where King County gets water!</p>
                  </div>
                </div>
                <div className="card-back bg-dark text-white">
                  <div className="card-body">
                    <h3 className="flip-card-title">Facts</h3>
                    <p className="flip-card-text">King County gets most of it's water from watersheds.
                                          click the button to head to Seattle Public Utilities on for
                                          an in-depth look at the processes involved in getting clean water in central
                                          King County.</p>
                    <a href="https://www.seattle.gov/utilities/your-services/water/water-system" target="_blank" rel="noreferrer noopener" className="btn btn-outline-primary">Click me!</a>
                  </div>
                </div>
              </div>
            </div>

            {/*Card 2*/}
            <div className="col-sm-4">
              <div className="card card-flip h-100">
                <div className="card-front text-white bg-dark">
                  <div className="card-body">
                    <img src="https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/water-lisa-fotio.jpg?raw=true" className="card-img-top" 
                      alt="Close up of a person's hand set against a white background, where their hand is holding a nearly full glass of water" />
                    <h3 className="flip-card-title">Water Quality Issues</h3>
                    <p className="flip-card-text">Hover or tap to learn more about common water quality problems in King County</p>
                  </div>
                </div>
                <div className="card-back bg-dark text-white">
                  <div className="card-body">
                    <h3 className="flip-card-title">Facts</h3>
                    <p className="flip-card-text">Despite King County having some of the cleanest water from it's watersheds,
                                          there are still some common water quality problems within the county that.
                                          Click the link button to read about some of the problems that plague the water in King County.</p>
                    <a href="https://www.culligan.com/blog/featured-article/seattle-water-quality-facts-and-drinking-water-problems" target="_blank" rel="noreferrer noopener" className="btn btn-outline-primary">Click Me!</a>
                  </div>
                </div>
              </div>
            </div>

            {/*Card 3*/}
            <div className="col-sm-4">
              <div className="card card-flip h-100">
                <div className="card-front text-white bg-dark">
                  <div className="card-body">
                    <img src="https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/water-burst.jpg?raw=true" className="card-img-top" 
                      alt="A younger child washing their hands in a sink with soapy bubbles on their hands." />
                    <h3 className="flip-card-title">King County Sanitation</h3>
                    <p className="flip-card-text">Hover or tap to learn more about water sanitation in King County</p>
                  </div>
                </div>
                <div className="card-back bg-dark text-white">
                  <div className="card-body text-white">
                    <h3 className="flip-card-title">Facts</h3>
                    <p className="flip-card-text">Water Sanitation within King County is handeled within their wastewater services.
                      There are many water treatment plants that serve the area since the year of 1956. Click the button to head to
                      King County's Wastewater Services page to learn even more.</p>
                    <a href="https://kingcounty.gov/en/legacy/services/environment/wastewater.aspx" target="_blank" rel="noreferrer noopener"className="btn btn-outline-primary">Click Me!</a>
                  </div>
                </div>
              </div>
            </div>

            {/*Card 4*/}
            <div className="col-sm-4 my-3">
              <div className="card card-flip h-100">
                <div className="card-front text-white bg-dark">
                  <div className="card-body">
                    <img src="https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/pgs-brandie-robbins.jpg?raw=true" className="card-img-top" 
                      alt="Puget Sound with the Seattle Waterfront and Space Needle set in the background overlooking the water." />
                    <h3 className="flip-card-title">Public Facilities</h3>
                    <p className="flip-card-text">Hover or tap to learn more about King County's public water facilites</p>
                  </div>
                </div>
                <div className="card-back bg-dark text-white">
                  <div className="card-body">
                    <h3 className="flip-card-title">Facts</h3>
                    <p className="flip-card-text">Did you know that King County has over 40+ public water facilites that 
                                        you can use? A lot of them are found within public libraries and parks within the area
                                        of Seattle. Click the button for a map detaling the facilities in the Seattle Area.</p>
                    <a href="https://kingcountyschoolhealthdotcom.wordpress.com/2018/04/06/free-restrooms-showers-and-laundry-facilities-in-seattle/" 
                      target="_blank" rel="noreferrer noopener"className="btn btn-outline-primary">Click Me!</a>
                  </div>
                </div>
              </div>
            </div>

            {/*Card 5*/}
            <div className="col-sm-4 my-3">
              <div className="card card-flip h-100">
                <div className="card-front text-white bg-dark">
                  <div className="card-body">
                    <img src="https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/elliot-bay-maximilian-ruther.jpg?raw=true" className="card-img-top" 
                      alt="Elliot Bay in Seattle, Washington with the shipping docks set in the forefront of the picture." />
                    <h3 className="flip-card-title">Clean Conservation</h3>
                    <p className="flip-card-text">Hover or tap to learn about how to conserve clean water!</p>
                  </div>
                </div>
                <div className="card-back bg-dark text-white">
                  <div className="card-body">
                    <h3 className="flip-card-title">Facts</h3>
                    <p className="flip-card-text">Even though King County is surrounded by water all around there the area has run into times
                                        where it must save water due to droughts and other climatic events.</p>
                    <a href="https://www.seattle.gov/utilities/protecting-our-environment/sustainability-tips/conserve-water" 
                    target="_blank" rel="noreferrer noopener" className="btn btn-outline-primary">Click Me!</a>
                  </div>
                </div>
              </div>
            </div>

            {/*Card 6*/}
            <div className="col-sm-4 my-3">
              <div className="card card-flip h-100">
                <div className="card-front text-white bg-dark">
                  <div className="card-body">
                    <img src="https://github.com/UW-INFO442-AU23/aquanauts/blob/main/img/lakeunion-roman-pohorecki.jpg?raw=true" className="card-img-top" 
                      alt="Lake Union in the city of Seattle during sunset." />
                    <h3 className="flip-card-title">Water Usage</h3>
                    <p className="flip-card-text">Hover or tap to learn more about how water usage impacts King County.</p>
                  </div>
                </div>
                <div className="card-back bg-dark text-white">
                  <div className="card-body">
                    <h3 className="flip-card-title">Facts</h3>
                    <p className="flip-card-text">King County uses recycled water for environmental projects, farms,
                        and even on sports fields. Click the link below to see how recycled water helps the people and environment 
                        in King County. </p>
                    <a href="https://kingcounty.gov/en/dept/dnrp/waste-services/wastewater-treatment/resource-recovery/recycled-water/water-uses" 
                    target="_blank" rel="noreferrer noopener" className="btn btn-outline-primary">Click Me!</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  )
}