import React, { Component } from 'react'
import getWeb3 from './utils/getWeb3'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      web3: null,
    }
  }

  componentWillMount() {
    getWeb3.then(results => {
      this.setState({
        web3: results.web3
      }).catch(() => {
        console.log('Error finding web3.')
      })
    })
  }

  render() {

    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
            <a href="#" className="pure-menu-heading pure-menu-link">Ethereum Account Explorer</a>
        </nav>

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              {this.state.blocks}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App
