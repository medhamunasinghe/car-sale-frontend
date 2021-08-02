import React from "react"
import SidebarManager from "../Sidebar/SidebarManager"
import TransactionList from "./TransactionList"

const ManageTransactions = () => {
	return (
		<div className="panels row">
			<div className="panel-info col col-md-2">
				<SidebarManager />
			</div>
			<div className="panel-positions col-md-9">
				<TransactionList />
			</div>
		</div>
	)
}

export default ManageTransactions
