import React from "react"
import "./CardStyle.css"

const CardUI = props => {
  return (
    <div className="card shadow">
      <div className="overflow">
        <img src={props.imgsrc} className="card-img-top" alt="car example"></img>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">
          {props.vehicleNumber} | {props.model}
        </h4>
        <h6 className="card-subtitle1">Mileage: {props.mileage}km</h6>
        <p calssName="card-text text-secondary">Registration year: {props.registerYear}</p>
        <p calssName="card-text text-secondary">Transmission: {props.transmission}</p>
        <p calssName="card-text text-secondary light-dark " style={{ color: "grey" }}>
          Negotiable
        </p>
      </div>
    </div>
  )
}

export default CardUI
