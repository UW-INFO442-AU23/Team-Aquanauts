import React from 'react';
import { NavLink } from 'react-router-dom'
import '../../index.css'
import NavBar from '../NavBar.js';

export default function EducationPage(props) {
  return (
    <div className="background-page">
      <NavBar />
      <header>
        <h1>Education Page</h1>
      </header>
      <main>
        <div class="container">
          <div class="row">

            {/* Card 1*/}
            <div class="col-sm-4">
              <div class="card card-flip h-100">
                <div class="card-front text-white bg-dark">
                  <div class="card-body">
                    <img src="../img/harbor-activity.jpg" class="card-img-top" alt="..."/>
                    <h3 class="card-title">King County Water</h3>
                    <p class="card-text">Hover to learn more about where King County gets water!</p>
                  </div>
                </div>
                <div class="card-back bg-dark text-white">
                  <div class="card-body">
                    <h3 class="card-title">Stats</h3>
                    <p class="card-text">Suprise this one has more more more more content on the back!</p>
                    <a href="#" class="btn btn-outline-secondary">Action</a>
                  </div>
                </div>
              </div>
            </div>

            {/*Card 2*/}
            <div class="col-sm-4">
              <div class="card card-flip h-100">
                <div class="card-front text-white bg-dark">
                  <div class="card-body">
                  <img src="../img/harbor-activity.jpg" class="card-img-top" alt="..."/>
                    <h3 class="card-title">Front</h3>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
                <div class="card-back bg-dark text-white">
                  <div class="card-body">
                    <h3 class="card-title">Back #2</h3>
                    <p class="card-text">Suprise this one has content on the back!</p>
                    <a href="#" class="btn btn-outline-secondary">Action</a>
                  </div>
                </div>
              </div>
            </div>

            {/*Card 3*/}
            <div class="col-sm-4">
              <div class="card card-flip h-100">
                <div class="card-front text-white bg-dark">
                  <div class="card-body">
                  <img src="../img/harbor-activity.jpg" class="card-img-top" alt="..."/>
                    <h3 class="card-title">Front</h3>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content. This one is a little because it has more text!</p>
                  </div>
                </div>
                <div class="card-back bg-dark text-white">
                  <div class="card-body text-primary">
                    <h3 class="card-title">Wow! #3</h3>
                    <p class="card-text">Suprise this one has content on the back!</p>
                    <a href="#" class="btn btn-outline-primary">Action</a>
                  </div>
                </div>
              </div>
            </div>

            {/*Card 4*/}
            <div class="col-sm-4 my-3">
              <div class="card card-flip h-100">
                <div class="card-front text-white bg-dark">
                  <div class="card-body">
                  <img src="../img/harbor-activity.jpg" class="card-img-top" alt="..."/>
                    <h3 class="card-title">Front</h3>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
                <div class="card-back bg-dark text-white">
                  <div class="card-body">
                    <h3 class="card-title">Back</h3>
                    <p class="card-text">Suprise this one has more more more more content on the back!</p>
                    <a href="#" class="btn btn-outline-secondary">Action</a>
                  </div>
                </div>
              </div>
            </div>

            {/*Card 5*/}
            <div class="col-sm-4 my-3">
              <div class="card card-flip h-100">
                <div class="card-front text-white bg-dark">
                  <div class="card-body">
                  <img src="../img/harbor-activity.jpg" class="card-img-top" alt="..."/>
                    <h3 class="card-title">Front</h3>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
                <div class="card-back bg-dark text-white">
                  <div class="card-body">
                    <h3 class="card-title">Back</h3>
                    <p class="card-text">Suprise this one has more more more more content on the back!</p>
                    <a href="#" class="btn btn-outline-secondary">Action</a>
                  </div>
                </div>
              </div>
            </div>

            {/*Card 6*/}
            <div class="col-sm-4 my-3">
              <div class="card card-flip h-100">
                <div class="card-front text-white bg-dark">
                  <div class="card-body">
                  <img src="../img/harbor-activity.jpg" class="card-img-top" alt="..."/>
                    <h3 class="card-title">Front</h3>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
                <div class="card-back bg-dark text-white">
                  <div class="card-body">
                    <h3 class="card-title">Back</h3>
                    <p class="card-text">Suprise this one has more more more more content on the back!</p>
                    <a href="#" class="btn btn-outline-secondary">Action</a>
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