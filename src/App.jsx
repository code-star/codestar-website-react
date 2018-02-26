import React, { Component } from 'react';
import './App.css';
import logo from './img/logo.svg';

import Reboot from 'material-ui/Reboot';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const styles = {
  backgroundColor: '#1158a0',
};

const containerStyles = {
  minHeight: '100vh',
  margin: 0, // Grid container adds -8px margin
};

class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Reboot />
        <Grid
          container
          justify="center"
          alignItems="center"
          style={containerStyles}
        >
          <Grid item xs={12} md={6} className="text-center">
            <img
              src={logo}
              alt="Logo"
              style={{
                width: '256px',
              }}
            />
            <p>
              The digital world offers endless possibilities. The challenges are
              often complex. We develop state-of-the-art software that’s simple
              to use. Agile and productive, using the latest techniques. We
              program with our hearts and with our minds, for organisations
              looking to take the next step.
            </p>
            <p>
              We are the #1 partner for Full Stack Scala and Big Data solutions
              in the Netherlands. We are Codestar.
            </p>
            <Button variant="raised" color="primary">
              Contact
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
