import React from "react"
import "./Footer.css"

import heart from "../../assets/heart-regular.svg"
import comment from "../../assets/comment-regular.svg"
import retweet from "../../assets/retweet-solid.svg"
import envelope from "../../assets/envelope-regular.svg"

export default () => (
  <footer>
    <div>
      <img src={comment} />
      <img src={retweet} />
      <img src={heart} />
      <img src={envelope} />
    </div>
  </footer>
)
