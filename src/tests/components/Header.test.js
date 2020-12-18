import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header.js';

test('should render Header corectly', () => {
    const wrapper = shallow(<Header startLogout={() => {}} />)
    expect(wrapper).toMatchSnapshot();
})

test('should call startLogout', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />)
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
})

