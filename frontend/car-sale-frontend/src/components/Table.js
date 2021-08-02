import React from "react"
import { useTable } from "react-table"

export default function Table({ columns, data }) {
	// Use the useTable Hook to send the columns and data to build the table
	const {
		getTableProps, // table props from react-table
		getTableBodyProps, // table body props from react-table
		headerGroups,
		rows, // rows for the table based on the data passed
		prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
	} = useTable({
		columns,
		data
	})

	/*
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
	return (
		<div className="list row">
			<div className="col-md-12 list">
				<table {...getTableProps()} className="dtable table-striped table-bordered">
					<thead>
						{headerGroups.map(headerGroup => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map(column => (
									<th className="table-headings" {...column.getHeaderProps()}>
										{column.render("Header")}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()} className="table-body">
						{rows.map((row, i) => {
							prepareRow(row)
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map(cell => {
										return (
											<td className="table-data" {...cell.getCellProps()}>
												{cell.render("Cell")}
												{console.log(cell)}
											</td>
										)
									})}
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}
