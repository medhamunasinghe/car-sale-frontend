import React, { Component } from "react"
import CardUI from "./Card/CardUI"
import axios from "axios"
import images from "./images"

class OurVehicles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicles: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/vehicles")
      .then(response => response.data)
      .then(data => {
        this.setState({ vehicles: data })
        console.log(this.state.data)
      })
      .catch(function (ex) {
        console.log("Response parsing failed. Error:", ex)
      })
  }

  renderChildren(context) {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          {this.state.vehicles.map(vehicles =>
            images.map(image => {
              if (image.id === vehicles.id) {
                return <div className="col-md-4">
                  <CardUI  imgsrc={image.src} vehicleNumber={vehicles.vehicleNumber} model={vehicles.model} mileage={vehicles.mileAge} registerYear={vehicles.yearOfRegister} transmission={vehicles.transmission} />
                  {console.log(vehicles.model)}
                </div>
              }
            })
          )}
        </div>
      </div>
    )
  }
  render() {
    return this.renderChildren()
  }
}

export default OurVehicles
