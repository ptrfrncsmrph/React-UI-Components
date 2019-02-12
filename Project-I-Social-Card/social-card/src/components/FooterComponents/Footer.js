import React from "react"
import "./Footer.css"

import { TweetStats } from "../../App"

import heart from "../../assets/heart-regular.svg"
import comment from "../../assets/comment-regular.svg"
import retweet from "../../assets/retweet-solid.svg"
import envelope from "../../assets/envelope-regular.svg"

export default () => (
  <TweetStats.Consumer>
    {context => (
      <footer>
        <div className="icon comment">
          <img src={comment} />
        </div>
        <div
          className="icon retweet"
          onClick={() => context.increment("retweets")}
        >
          <img src={retweet} />
          {context.retweets}
        </div>
        <div className="icon heart" onClick={() => context.increment("likes")}>
          <img src={heart} />
          {context.likes}
        </div>
        <div className="icon envelope">
          <img src={envelope} />
        </div>
      </footer>
    )}
  </TweetStats.Consumer>
)
