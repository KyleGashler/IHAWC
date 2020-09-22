import React from 'react'
// import axios from 'axios'

import './App.css'
import SocialFollow from "./SocialFollow"

class App extends React.Component {
    state = { advice: '' }

    render() {
        const { advice } = this.state ;
        return (
            <div>
            <div className="app">
            <h1>IHAWC</h1>
            <h3>Service</h3>
          </div>
          <footer>
          <SocialFollow />
          </footer>
          </div>

        );
    }
}

export default App