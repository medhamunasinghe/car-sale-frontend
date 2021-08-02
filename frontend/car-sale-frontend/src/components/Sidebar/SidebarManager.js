import React from "react"
import { useHistory, withRouter } from "react-router-dom"
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from "cdbreact"
import { NavLink } from "react-router-dom"
import logo from "../../images/logo.jpeg"

import Inquiries from "../ManagerAdmin/Inquiries"
import ManageVehicles from "../ManageVehiclesAll/ManageVehicles"
import ManageTransactions from "../ManageTransactionsAll/ManageTransactions"
import ManageReports from "../ManageReportsAll/ManageReports"

const SidebarManager = () => {
	const history = useHistory()

	const handleLogout = () => {
		localStorage.removeItem("user-info")
		history.push("/login")
	}

	return (
		<div style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}>
			<CDBSidebar textColor="#fff" backgroundColor="#333">
				<CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
					<a href="/" className="text-decoration-none" style={{ color: "inherit" }}>
						<img src={logo} style={{ height: "50px", fontWeight: "100px" }} alt="logo"></img>
					</a>
				</CDBSidebarHeader>

				<CDBSidebarContent className="sidebar-content">
					<CDBSidebarMenu>
						<NavLink exact to="/manage-vehicles-all/manage-vehicles" activeClassName="activeClicked">
							<CDBSidebarMenuItem path={ManageVehicles} icon="columns">
								Manage Vehicles
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/tables" activeClassName="activeClicked">
							<CDBSidebarMenuItem icon="table">Manage Staff</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/manage-transactions-all/manage-transactions" activeClassName="activeClicked">
							<CDBSidebarMenuItem path={ManageTransactions} icon="user">
								Transactions
							</CDBSidebarMenuItem>
						</NavLink>
						<NavLink exact to="/manage-reports-all/manage-reports" activeClassName="activeClicked">
							<CDBSidebarMenuItem path={ManageReports} icon="chart-line">
								Report
							</CDBSidebarMenuItem>
						</NavLink>

						<NavLink exact to="/manager-admin/inquiries" activeClassName="activeClicked">
							<CDBSidebarMenuItem path={Inquiries} icon="exclamation-circle">
								Inquiries
							</CDBSidebarMenuItem>
						</NavLink>
					</CDBSidebarMenu>
				</CDBSidebarContent>

				<CDBSidebarFooter style={{ textAlign: "center" }}>
					<div
						style={{
							padding: "20px 5px"
						}}
					>
						<input type="button" className="btn btn-lg btn-block" style={{ color: "#fff" }} value="Sign Out" onClick={handleLogout} />
					</div>
				</CDBSidebarFooter>
			</CDBSidebar>
		</div>
	)
}

export default withRouter(SidebarManager)
