import React from 'react';
//import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './App';

it('renders without crasing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).to.be.present();
});

it('renders correctly - snapshot', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(tree).to.matchSnapshot();
});
