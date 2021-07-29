import React from "react"
import buyericon from "../images/icons8-car-rental-90.png"
import sellericon from "../images/icons8-car-sale-90.png"

const Services = () => {
	return (
		<main id="main">
			<section id="services" className="services section-bg">
				<div className="container" data-aos="fade-up">
					<div className="section-title">
						<h2>Services</h2>
						<p>What you can expect from us</p>
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
				</div>
			</section>
		</main>
	)
}

export default Services
