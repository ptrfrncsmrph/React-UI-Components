import React, { createContext, Component } from "react"
import CardContainer from "./components/CardComponents/CardContainer"
import "./App.css"
import HeaderContainer from "./components/HeaderComponents/HeaderContainer"
import Footer from "./components/FooterComponents/Footer"

export const TweetStats = createContext()

class App extends Component {
  state = {
    likes: 0,
    retweets: 0
  }
  increment(key) {
    this.setState(({ [key]: k }) => ({
      [key]: k + 1
    }))
  }
  render() {
    return (
      <TweetStats.Provider
        value={{ ...this.state, increment: this.increment.bind(this) }}
      >
        <div className="container">
          <HeaderContainer />
          <CardContainer />
          <Footer />
        </div>
      </TweetStats.Provider>
    )
  }
}

export default App
