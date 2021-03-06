import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Details from './Details'
import Country from '.countries.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="root">
          <div>
            <nav className="navbar navbar-dark bg-primary mb-3">
              <div className="container">
                <a className="navbar-brand" href="/">WikiCountries</a>
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <div className="col-5" >
                  <div className="list-group">
                    <a className="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a>
                    <a className="list-group-item list-group-item-action" href="/AFG">🇦🇫 Afghanistan</a>
                    <a className="list-group-item list-group-item-action" href="/AGO">🇦🇴 Angola</a>
                    <a className="list-group-item list-group-item-action" href="/AIA">🇦🇮 Anguilla</a>
                    <a className="list-group-item list-group-item-action" href="/ALA">🇦🇽 Åland Islands</a>
                    <a className="list-group-item list-group-item-action" href="/ALB">🇦🇱 Albania</a>
                    <a className="list-group-item list-group-item-action" href="/AND">🇦🇩 Andorra</a>
                    <a className="list-group-item list-group-item-action" href="/ARE">🇦🇪 United Arab Emirates</a>
                    <a className="list-group-item list-group-item-action" href="/ARG">🇦🇷 Argentina</a>
                    <a className="list-group-item list-group-item-action" href="/ARM">🇦🇲 Armenia</a>
                    <a className="list-group-item list-group-item-action" href="/ASM">🇦🇸 American Samoa</a>
                    <a className="list-group-item list-group-item-action" href="/ATA">🇦🇶 Antarctica</a>
                    <a className="list-group-item list-group-item-action" href="/FLK">🇫🇰 Falkland Islands</a>
                    <a className="list-group-item list-group-item-action" href="/FRA">🇫🇷 France</a>
                    <a className="list-group-item list-group-item-action" href="/ZWE">🇿🇼 Zimbabwe</a>
                  </div>
                </div>
                <div className="col-7">
                  <h1>France</h1>
                  <table className="table">

                  {}
                    <Details />
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
