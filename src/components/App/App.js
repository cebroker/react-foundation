import React, { Component } from 'react';
import { Nav, NavItem, RedIndicator } from '@isfco/evercheck-ui';
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
          </Nav> */}
          <Nav pullRight>
            <NavItem className="nav-item-icon">
              <RedIndicator>
                <i className="material-icons">mail</i>
              </RedIndicator>
            </NavItem>

            {/* <NavDropdown className="avatar-dropdown" eventKey={3} title={<Avatar title='Jorge Sanes' style={{ paddingTop: '2px'}} />} id="test-nav-dropdown" pullRight noCaret>
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown> */}
          </Nav>
        </AppBar>
      </div>
    );
  }
}

export default App;
