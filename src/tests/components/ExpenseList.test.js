import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/pages/ExpenseList';
import expenses from '../fixtures/expenses';

test('Should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
}) 

test('Should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
}) 