import React from "react"
import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Header from "./Header"
import Footer from "./Footer"
import Hero from "./Hero"
import Services from "./Services"
import About from "./About"
import Contact from "./Contact"
import OurVehicles from "./OurVehicles"
import Login from "./Login"
import Dashboard from "./Dashboard"
import Inquiries from "./ManagerAdmin/Inquiries"
import ManageVehicles from "./ManageVehiclesAll/ManageVehicles"
import AddVehicles from "./ManageVehiclesAll/AddVehicle"
import Vehicle from "./ManageVehiclesAll/Vehicle"
import VehicleList from "./ManageVehiclesAll/VehicleList"
import ManageTransactions from "./ManageTransactionsAll/ManageTransactions"
import TransactionList from "./ManageTransactionsAll/TransactionList"
import AddTransaction from "./ManageTransactionsAll/AddTransaction"
import Transaction from "./ManageTransactionsAll/Transaction"
import ManageReports from "./ManageReportsAll/ManageReports"
import Report from "./ManageReportsAll/Report"

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact>
					<Hero />
					<Services />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/our-vehicles">
					<OurVehicles />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
				<Route path="/manager-admin/inquiries">
					<Inquiries />
				</Route>
				<Route path="/manage-vehicles-all/manage-vehicles">
					<ManageVehicles />
				</Route>
				<Route path="/manage-vehicles-all/add-vehicles">
					<AddVehicles />
				</Route>
				<Route path="/manage-vehicles-all/vehicle-list">
					<VehicleList />
				</Route>
				<Route path="/manage-vehicles-all/vehicle">
					<Vehicle />
				</Route>
				<Route path="/manage-transactions-all/manage-transactions">
					<ManageTransactions />
				</Route>
				<Route path="/manage-transactions-all/transaction-list">
					<TransactionList />
				</Route>
				<Route path="/manage-transactions-all/add-transaction">
					<AddTransaction />
				</Route>
				<Route path="/manage-transactions-all/transaction">
					<Transaction />
				</Route>
				<Route path="/manage-reports-all/manage-reports">
					<ManageReports />
				</Route>
				<Route path="/manage-reports-all/report">
					<Report />
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	)
}

export default App
