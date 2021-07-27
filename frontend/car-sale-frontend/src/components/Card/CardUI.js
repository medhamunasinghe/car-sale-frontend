import React from "react"
import { Link } from "react-router-dom"
import "./CardStyle.css"

const CardUI = props => {
  return (
    <div className="card shadow">
      <div className="overflow">
        <img src={props.imgsrc} className="card-img-top" alt="car example"></img>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p calssName="card-text text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, dolorum asperiores voluptatibus commodi natus voluptate dolore. Eaque enim perferendis nulla!</p>
        <Link to="/" className="btn btn-outline-success">
          Go anywhere!
        </Link>
      </div>
    </div>
  )
}

export default CardUI
