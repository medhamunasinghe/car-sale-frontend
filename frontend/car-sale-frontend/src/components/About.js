import React from "react"
import aboutimage from "../images/Document collaboration.svg"
import vision from "../images/icons8-eye-90.png"
import mission from "../images/icons8-goal-90.png"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
            <img src={aboutimage} className="img-fluid" alt="" data-aos="zoom-in"></img>
          </div>
          <div className="col-lg-6 pt-5 pt-lg-0">
            <h3 data-aos="fade-up">Who we are?</h3>
            <p data-aos="fade-up" data-aos-delay="100">
              Since its inauguration in 2017, as Ekanayake Car Sales, we have been on the journey to keep the long lasting goodwill and trust of our customers as a supplier of high-quality vehicles and a transport solutions provider. Our place is exclusively created to give a better service to our customers and make their vehicle dream come true. Our experienced team will help you to select the right product and service from our range of vehicles and services.
            </p>
            <div className="row">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <img src={vision} alt="vision"></img>
                <h4>Vision</h4>
                <p>To be the Number One Preferred Supplier for High Quality Motor Vehicles and related services with Profitable Growth through Superior Customer Service, Innovation, Quality and Commitment.</p>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <img src={mission} alt="mission"></img>
                <h4>Mission</h4>
                <p>To Provide our Customers Great Quality Vehicles at Best Possible Prices with Exceptional service.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
