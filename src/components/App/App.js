import React, { Component } from 'react';

//import { AppBar, Nav, NavItem, AppFooter } from '@isfco/evercheck-ui';
import AppBar from '../AppBar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar>
          <AppBar.Header>
            <AppBar.Brand target="/" className="App-brand">
              <img src={logo} alt="[My APP]" className="App-logo"/>
            </AppBar.Brand>
          </AppBar.Header>
          {/* <Nav>
            <li role="presentation" className="active">
              <NavLink to={this.rootLink}>Requirements</NavLink>
            </li>
          </Nav>
          <Nav pullRight>
            <UserDropdown
              fullName={`Jondh Doe`}
              role={this.user.scope}
              signOut={logout}
            />
          </Nav> */}
        </AppBar>
      </div>
    );
  }
}

export default App;
