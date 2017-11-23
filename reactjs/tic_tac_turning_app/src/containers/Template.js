import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

class Template extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <div>
          <header>
            <h1>TicTacTurning</h1>
          </header>
          <main>
            {this.prop.children}
          </main>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Template
