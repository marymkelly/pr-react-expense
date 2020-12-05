import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import  ExpenseListItem  from '../../components/pages/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('Should render ExpenseListItem with correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
}) 