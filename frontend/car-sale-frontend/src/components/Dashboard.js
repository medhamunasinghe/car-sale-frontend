import React from "react"
import SidebarManager from "./Sidebar/SidebarManager"
import Table from "./Table"

// import SidebarVehicle from "./Sidebar/SidebarVehicle"
// import VehicleCards from "./VehiclesCards"

export class DashboardContainer extends React.Component {
  render() {
    return (
      <div className="panels">
        <div className="panel-info">
          <SidebarManager />
          {/* <SidebarVehicle /> */}
        </div>
        <div className="panel-positions">
          <Table />
          {/* <VehiclesCards /> */}
        </div>
      </div>
    )
  }
}

export default DashboardContainer
