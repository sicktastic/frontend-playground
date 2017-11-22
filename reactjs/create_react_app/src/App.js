import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap'
import SearchForm from './components/SearchForm'
import Results from './components/Results'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron>
          <Grid>
            <h1>Hello, world!</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <SearchForm />
          </Grid>
        </Jumbotron>
        <Results />
      </div>
    );
  }
}

export default App;
