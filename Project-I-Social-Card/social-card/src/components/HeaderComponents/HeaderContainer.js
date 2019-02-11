import React from "react"
import ImageThumbnail from "./ImageThumbnail"

import "./Header.css"
import HeaderTitle from "./HeaderTitle"
import HeaderContent from "./HeaderContent"

export default () => (
  <header>
    <ImageThumbnail src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" />
    <HeaderTitle />
    <HeaderContent>
      Let's learn React by ... Project 1 is all about implementing a Social Card
      in ReactJS. On Project 2 you'll be implementing a Calculator. We've given
      you the file structure and have gone ahead and added all the files you'll
      need to be set up for success for each project.
    </HeaderContent>
  </header>
)
