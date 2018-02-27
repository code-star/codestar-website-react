import React, { Component } from 'react';
import './App.css';
import logo from './img/logo.svg';
import Reboot from 'material-ui/Reboot';
import Button from 'material-ui/Button';

class App extends Component {
  render() {
    return (
      <section
        style={{
          backgroundColor: '#1158a0',
        }}
      >
        <div
          className="container d-flex justify-content-center flex-column"
          style={{
            minHeight: '100vh',
          }}
        >
          <Reboot />
          <div className="row">
            <div className="col col-md-6 offset-md-3 text-center">
              <div className="row">
                <div className="col col-md-6 offset-md-3">
                  <img src={logo} alt="Logo" />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam provident assumenda, fugiat, tempora dicta velit quo
                unde odio distinctio facere eos corrupti necessitatibus ducimus
                ab reprehenderit adipisci eveniet eius cupiditate!
              </p>
              <Button variant="raised" color="primary">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
