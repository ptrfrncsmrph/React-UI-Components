import React from "react"
import "./Card.css"
import CardBanner from "./CardBanner"
import CardContent from "./CardContent"

export default () => (
  <div className="card-container">
    <section>
      <CardBanner src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" />
      <CardContent />
    </section>
  </div>
)
