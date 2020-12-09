import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/pages/Dashboard.js';

test('should render ExpenseDashboardPage corectly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(wrapper).toMatchSnapshot();
})
