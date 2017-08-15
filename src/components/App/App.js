import React, { Component } from 'react';
import { Nav, NavItem, RedIndicator, SearchForm, Avatar } from '@isfco/evercheck-ui';
import AppBar from '../AppBar';
import ceBrokerLogo from './ce-broker-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar>
          <AppBar.Header>
            <AppBar.Brand target="/" className="App-brand">
              <img src={ceBrokerLogo} alt="[My APP]" className="App-logo"/>
            </AppBar.Brand>
          </AppBar.Header>
          {/* <Nav>
            <li role="presentation" className="active">
              <NavLink to={this.rootLink}>Requirements</NavLink>
            </li>
          </Nav> */}
          <Nav>
            <NavItem eventKey={1} href="#">My records</NavItem>
            <NavItem eventKey={2} href="#">Browse courses</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" className="upgrade-link">UPGRADE NOW</NavItem>
            <NavItem eventKey={2} className="nav-item-icon">
              <RedIndicator>
                <i className="material-icons">mail</i>
              </RedIndicator>
            </NavItem>
            <NavItem eventKey={3} className="avatar">
              <Avatar title="JD" />
            </NavItem>
            {/* <NavDropdown className="avatar-dropdown" eventKey={3} title={<Avatar title='Jorge Sanes' style={{ paddingTop: '2px'}} />} id="test-nav-dropdown" pullRight noCaret>
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown> */}
          </Nav>
          <SearchForm className="pull-right" placeholder="Search for a course provider or subject" inputId='query' onSubmit={e => e.preventDefault() } />
        </AppBar>
      </div>
    );
  }
}

export default App;
