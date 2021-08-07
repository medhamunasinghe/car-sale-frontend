import React from "react"
import SidebarManager from "../Sidebar/SidebarManager"
import Report from "./Report"

const ManageReports = () => {
	return (
		<div className="panels row">
			<div className="panel-info col col-md-2">
				<SidebarManager />
			</div>
			<div className="panel-positions col-md-9">
				<Report />
			</div>
		</div>
	)
}

export default ManageReports
