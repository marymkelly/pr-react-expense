import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NotFoundPage from '../../components/pages/404.js';

test('should render 404 corectly', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(toJSON(wrapper)).toMatchSnapshot();
})

