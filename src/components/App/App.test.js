import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders correctly - snapshot', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(tree).to.matchSnapshot();
});
