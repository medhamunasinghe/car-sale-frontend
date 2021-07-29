import React from "react"
import { useHistory, withRouter } from "react-router-dom"
import SidebarManager from "./Sidebar/SidebarManager"
import Table from "./Table"

const DashboardContainer = props => {
	const history = useHistory()

	// handle click event of logout button
	function handleLogout() {
		localStorage.removeItem("user-info")
		history.push("/login")
	}

	return (
		<div className="panels">
			<div className="panel-info">
				<SidebarManager />
			</div>
			<div className="panel-positions">
				<br />
				<br />
				<Table />
				<input type="button" onClick={handleLogout} value="Logout" />
			</div>
		</div>
	)
}

export default withRouter(DashboardContainer)
