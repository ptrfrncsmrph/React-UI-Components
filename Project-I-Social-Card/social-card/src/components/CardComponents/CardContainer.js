import React from "react"
import "./Card.css"
import CardBanner from "./CardBanner"
import CardContent from "./CardContent"

export default () => (
  <a href="https://www.reactjs.org" className="card-container">
    <CardBanner src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" />
    <CardContent />
  </a>
)
