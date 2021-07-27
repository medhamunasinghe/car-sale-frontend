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
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
