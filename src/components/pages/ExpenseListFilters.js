import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters.js';


export class ExpenseListFilters extends React.Component {
    state = {
        focusedCalendar: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (focusedCalendar) => {
        this.setState(() => ({ focusedCalendar }))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
      };

    onSortChange = (e) => {
        if (e.target.value === 'date') {
          this.props.sortByDate();
        } else if (e.target.value === 'amount') {
          this.props.sortByAmount();
        }
    };

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}

                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange} 
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    startDateId={`${this.props.filters.startDate}`}
                    endDate={this.props.filters.endDate}
                    endDateId={`${this.props.filters.startDate}`}
                    onDatesChange={this.onDatesChange}   
                    focusedInput={this.state.focusedCalendar}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={()=>(false)}
                />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);