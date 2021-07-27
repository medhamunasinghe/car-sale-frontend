import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-contact">
              <h3>Ekanayake Car Sale</h3>
              <p>
                145/12,
                <br />
                Sirisena Goonathilake Mawatha,
                <br />
                Welegoda, <br />
                Matara.
                <br />
                <br />
                <strong>Phone:</strong> 0777 448 888
                <br />
                <strong>Email:</strong> ekanayakecs@gmail.com
                <br />
              </p>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/our-vehicles">Our Vehicles</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <div>
                <Link to="/" className="btn-get-started scrollto">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
