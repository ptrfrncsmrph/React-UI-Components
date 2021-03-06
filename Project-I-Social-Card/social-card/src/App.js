import React, { Fragment } from "react"
import CardContainer from "./components/CardComponents/CardContainer"
import "./App.css"
import HeaderContainer from "./components/HeaderComponents/HeaderContainer"
import Footer from "./components/FooterComponents/Footer"

const App = () => (
  <div className="container">
    <HeaderContainer />
    <CardContainer />
    <Footer />
  </div>
)

export default App
