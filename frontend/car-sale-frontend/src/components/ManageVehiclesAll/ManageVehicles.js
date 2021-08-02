import React from "react"
import SidebarManager from "../Sidebar/SidebarManager"
import VehicleList from "./VehicleList"

const ManageVehicles = () => {
	return (
		<div className="panels row">
			<div className="panel-info col col-md-2">
				<SidebarManager />
			</div>
			<div className="panel-positions col-md-9">
				<VehicleList />
			</div>
		</div>
	)
}

export default ManageVehicles
