import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header.js';

test('should render Header corectly', () => {
    const wrapper = shallow(<Header />)
    expect(toJSON(wrapper)).toMatchSnapshot();
})

