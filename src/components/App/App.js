import React, { Component } from 'react';
import {
  Nav,
  NavItem,
  RedIndicator,
  SearchForm,
  Avatar,
  NavDropdown,
  MenuItem
} from '@isfco/evercheck-ui';
import AppBar from '../AppBar';
import ceBrokerLogo from './ce-broker-logo.svg';
import './App.css';
import { LinkContainer } from 'react-router-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar>
          <AppBar.Header>
            <AppBar.Brand target="/" className="App-brand">
              <img src={ceBrokerLogo} alt="[My APP]" className="App-logo" />
            </AppBar.Brand>
          </AppBar.Header>
          <Nav>
            <LinkContainer to="#">
              <NavItem eventKey={1}>
                My records
              </NavItem>
            </LinkContainer>
            <LinkContainer to="#">
              <NavItem eventKey={2}>
                Browse courses
              </NavItem>
            </LinkContainer>
          </Nav>
          <div className="pull-right">
            <SearchForm
              placeholder="Search for a course provider or subject"
              inputId="query"
              onSubmit={e => e.preventDefault()}
            />
            <Nav pullRight>
              <LinkContainer to="#" className="upgrade-link">
                <NavItem eventKey={1}>
                  UPGRADE NOW
                </NavItem>
              </LinkContainer>
              <LinkContainer to="#" className="nav-item-icon">
                <NavItem eventKey={2}>
                  <RedIndicator>
                    <i className="material-icons" style={{ fontSize: '26px' }}>mail</i>
                  </RedIndicator>
                </NavItem>
              </LinkContainer>
              <NavDropdown
                className="avatar-dropdown"
                eventKey={3}
                title={<Avatar title="John Doe" />}
                id="test-nav-dropdown"
                pullRight
                noCaret
              >
                <MenuItem
                  header
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: '11px',
                    paddingBottom: '10px',
                    minWidth: '217px'
                  }}
                >
                  <Avatar
                    title="John Doe"
                    size="lg"
                    style={{ display: 'inline-block', marginRight: '20px' }}
                  />
                  <div style={{ display: 'inline-block' }}>
                    <p className="username">John Doe</p>
                    <p className="subtitle">ADMIN</p>
                  </div>
                </MenuItem>
                <MenuItem divider />
                <LinkContainer to="#">
                  <MenuItem icon="settings" eventKey={3.1}>Account settings</MenuItem>
                </LinkContainer>
                <LinkContainer to="#">
                  <MenuItem icon="supervisor_account" eventKey={3.2}>Users</MenuItem>
                </LinkContainer>
                <MenuItem divider />
                <LinkContainer to="#">
                  <MenuItem icon="exit_to_app" eventKey={3.3}>Sign out</MenuItem>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </div>
        </AppBar>
      </div>
    );
  }
}

export default App;
