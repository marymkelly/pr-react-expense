import React from 'react';
// import toJson from 'enzyme-to-json/serializer';
import { shallow } from 'enzyme';
import  ExpenseListItem  from '../../components/pages/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('Should render ExpenseListItem with correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
}) 