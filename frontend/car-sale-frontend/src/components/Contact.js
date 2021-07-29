import React from "react"
import contactimage from "../images/undraw_contact_us_15o2.svg"
import buyericon from "../images/icons8-car-rental-90.png"
import sellericon from "../images/icons8-car-sale-90.png"
import InquiryForm from "./Form/InquiryForm"

class Contact extends React.Component {
	constructor() {
		super()
		this.state = { showForm: false }
	}

	_showForm = bool => {
		this.setState({
			showForm: bool
		})
	}

	render() {
		return (
			<section id="contact" className="contact">
				<div className="container" data-aos="fade-up">
					<div className="section-title">
						<h2>Contact Us</h2>
						<p>Contact us to get started</p>
					</div>

					<div className="row">
						<div className="col-md-6 col-lg-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
							<div className="icon-box">
								<div className="icon">
									<img src={buyericon} alt="buyer icon"></img>
								</div>
								<h4 className="title">
									<h2>Buy a vehicle</h2>
								</h4>
								<p className="description">Searching for your dream vehicle? Still couldn't find a suitable one? Reach out to us to find your dream vehicle!!</p>
							</div>
						</div>

						<div className="col-md-6 col-lg-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
							<div className="icon-box">
								<div className="icon">
									<img src={sellericon} alt="seller icon"></img>
								</div>
								<h4 className="title">
									<h2>Sell your vehicle</h2>
								</h4>
								<p className="description">Dreaming of going bigger with your vehicle? But still couldn't sell your old vehicle? Reach out to us to upgrade your vehicle!!</p>
							</div>
						</div>
					</div>

					<div className="row reachus">
						<div className="reachus-container col-lg-12 col-md-12">
							<button className="reachus-btn" to="/inquiry-form" onClick={this.state.showForm === false ? this._showForm.bind(null, true) : this._showForm.bind(null, false)}>
								Reach Us
							</button>
							{this.state.showForm && <InquiryForm />}
						</div>
					</div>

					<div className="row">
						<div className="col-lg-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
							<div className="info">
								<div className="address">
									<i className="bi bi-geo-alt"></i>
									<h4>Location:</h4>
									<p>145/12,Sirisena Goonathilake Mawatha,Welegoda,Matara.</p>
								</div>

								<div className="email">
									<i className="bi bi-envelope"></i>
									<h4>Email:</h4>
									<p>ekanayakecs@gmail.com</p>
								</div>

								<div className="phone">
									<i className="bi bi-phone"></i>
									<h4>Call:</h4>
									<p>0777 448 888</p>
								</div>

								<iframe title="location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{ border: "0", width: "100%", height: "290px" }} allowfullscreen></iframe>
							</div>
						</div>

						<div className="col-lg-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
							<img src={contactimage} className="img-fluid" alt="" data-aos="zoom-in"></img>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Contact
