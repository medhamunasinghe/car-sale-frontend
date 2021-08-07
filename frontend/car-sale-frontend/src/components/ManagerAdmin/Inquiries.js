import React, { useMemo, useState, useEffect } from "react"
import axios from "axios"

import Table from "../Table"
import SidebarManager from "../Sidebar/SidebarManager"

function Inquiries() {
	// data state to store the TV Maze API data. Its initial value is an empty array
	const [data, setData] = useState([])

	const columns = useMemo(() => [
		{
			Header: "Id",
			accessor: "id"
		},
		{
			Header: "Inquirer email",
			accessor: "inquirerEmail"
		},
		{
			Header: "Inquirer name",
			accessor: "inquirerName"
		},
		{
			Header: "Inquirer title",
			accessor: "inquirerTitle"
		},
		{
			Header: "Inquirer body",
			accessor: "inquiryBody"
		}
	])

	// Using useEffect to call the API once mounted and set the data
	useEffect(() => {
		axios
			.get("http://localhost:8080/inquiries")
			.then(response => response.data)
			.then(data => {
				setData(data)
			})
			.catch(function (ex) {
				console.log("Response parsing failed. Error:", ex)
			})
	}, [])

	return (
		<div className="panels row">
			<div className="panel-info col col-md-2">
				<SidebarManager />
			</div>
			<div className="panel-positions col-md-9">
				<Table columns={columns} data={data} />
			</div>
		</div>
	)
}

export default Inquiries
