import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/pages/Login.js';

test('should render Login corectly', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper).toMatchSnapshot();
})

test('should call startLogin', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<Login startLogin={startLogin} />)
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
})
