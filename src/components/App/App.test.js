import React from 'react';
//import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

chai.use(chaiEnzyme());

it('renders without crasing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).to.be.present();
});
