import React from 'react';
import { shallow } from 'enzyme';
import  App from './App';

const App = shallow(<App />);

it('renders correctly', () => {
    expect(app).toMatchSnapshot();
});