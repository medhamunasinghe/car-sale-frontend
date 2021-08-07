import React from "react"
import SidebarManager from "./Sidebar/SidebarManager"
// import TableContainer from "./TableContainer"

class DashboardContainer extends React.Component {
	render() {
		return (
			<div className="panels row">
				<div className="panel-info col col-md-2">
					<SidebarManager />
				</div>
				<div className="panel-positions col-md-9"></div>
			</div>
		)
	}
}

export default DashboardContainer
