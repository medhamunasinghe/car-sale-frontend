import React from "react"
import car01 from "../images/brown-car01.png"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h2>Check the right place to find your dream vehicle!!</h2>
            <h1>Ekanayake Car Sale</h1>
            <div>
              <Link to="/about" className="btn-get-started scrollto">
                Check Our Vehicles
              </Link>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src={car01} className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
