import React from 'react';
import PropTypes from 'prop-types';
import styles from './DatePicker.css';

const initialState = {
    date: new Date(),
    month: new Date()
}

class DatePicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidUpdate(prevProps, prevState) {
        this.props.onDatePick(this.state.date.toLocaleDateString(this.props.locale))
    }

    daysInMonth(year, month) {
        let date = new Date(year, month, 1);
        let days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        };
        return days;
    }

    changeMonth(month) {
        this.setState({
            month
        })
    }

    render() {
        const dateOptions = { weekday: 'long', month: '2-digit', day: 'numeric', year: 'numeric' };
        const { month, date } = this.state;
        const year = date.getFullYear();
        const dateStr = date.toLocaleDateString(this.props.locale, dateOptions);
        const days = this.daysInMonth(month.getFullYear(), month.getMonth());
        let padding = [];
        for (let i = 0; i < days[0].getDay() - 1 || 0; i++) {
            padding.push(<button className={`${styles.day}`} key={i}></button>)
        }

        return (
            <div className={`${styles.datepicker}`}>
                <div className={`${styles.header}`}>
                    <span className={`${styles.date}`}>{dateStr}</span>
                </div>
                <div className={`${styles.month}`}>
                    <span className={styles.control} onClick={() => this.setState({ month: new Date(month.getFullYear(), month.getMonth() - 1) })}>
                            &lt;
                    </span>
                    <span>{month.toLocaleString('en-EN', { month: 'long', year: 'numeric' })}</span>
                    <span className={styles.control} onClick={() => this.setState({ month: new Date(month.getFullYear(), month.getMonth() + 1)})}>&gt;</span>
                </div>
                <div className={`${styles.body}`}>
                    <span className={`${styles.day}`}>M</span>
                    <span className={`${styles.day}`}>T</span>
                    <span className={`${styles.day}`}>W</span>
                    <span className={`${styles.day}`}>T</span>
                    <span className={`${styles.day}`}>F</span>
                    <span className={`${styles.day}`}>S</span>
                    <span className={`${styles.day}`}>S</span>
                    {padding}
                    {days.map(day => (
                        <button 
                            className={`${styles.day} ${date.toDateString() === day.toDateString() ? styles.selected : null}`} 
                            key={day}
                            onClick={() => this.setState({date: day})}>
                            {day.getDate()}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

DatePicker.propTypes = {
    onDatePick: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
};

DatePicker.defaultProps = {
    locale: "is-IS",
};

export default DatePicker;