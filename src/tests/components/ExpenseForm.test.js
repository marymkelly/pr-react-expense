import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/pages/ExpenseForm';
import expenses from '../fixtures/expenses'

test('should render ExpenseForm corectly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should render ExpenseForm corectly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should render error for invalid input', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should set description on input change', () => {
    const value = 'New Description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value);
    // expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should set new note on textarea change', () => {
    const value = 'New Note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe(value);
    // expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should set amount if valid input', () => {
    const value = '23.20';
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe(value);
    // expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should not set amount if invalid input', () => {
    const value = '12.1224';
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe('');
    // expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    onSubmitSpy('Joanne', 'Ridgefield')
    expect(onSubmitSpy).toHaveBeenCalledWith('Joanne', 'Ridgefield');
})