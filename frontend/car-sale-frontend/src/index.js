import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App"
import reportWebVitals from "./reportWebVitals"
import "font-awesome/css/font-awesome.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
)

reportWebVitals()
