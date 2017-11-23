import React, {Component} from 'react'

class Template extends Component {
  render() {
    return(
      <div>
        <header>
          <h1>TicTacTurning</h1>
        </header>
        <main>
          {this.prop.children}
        </main>
      </div>
    )
  }
}

export default Template
