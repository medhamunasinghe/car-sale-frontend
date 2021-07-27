import React, { Component } from "react"
import CardUI from "./Card/CardUI"

import carExample from "../images/carExample.jpeg"
import carExample2 from "../images/brown-car01.png"

class OurVehicles extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <CardUI imgsrc={carExample} />
          </div>
          <div className="col-md-4">
            <CardUI imgsrc={carExample2} />
          </div>
          <div className="col-md-4">
            <CardUI imgsrc={carExample} />
          </div>
        </div>
      </div>
    )
  }
}

export default OurVehicles
