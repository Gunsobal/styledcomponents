import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './TimePicker.css';

class TimePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: '00',
            minutes: '00',
            period: 'AM'
        }
    }

    increment(number, high) {
        number = parseInt(number);
        number++
        if (number > high) {
            number = 0;
        }
        number = this.zeroPadding(number);
        return number;
    }

    decrement(number, high) {
        number = parseInt(number);
        number--
        if (number < 0) {
            number = high;
        }
        number = this.zeroPadding(number);
        return number;
    }

    zeroPadding(number) {
        number = number.toString();
        if (number.length === 1) {
            return '0' + number;
        }
        return number;
    }

    setHour(hour) {
        if ((this.props.format === 24 && hour < 24 && hour >= 0) || this.props.format === 12 && hour <= 12 && hour >= 0) {
            this.setState({hour})
        }
    }

    setMinutes(minutes) {
        if (minutes < 60 && minutes >= 0) {
            this.setState({minutes})
        }
    }

    setPeriod(period) {
        this.setState({period})
    }

    render() {
        const { onTimePick, format } = this.props;
        return (
            <div>
                <input type="time" />
                <div className={`${styles.visual}`}>
                    <span className={`${styles.picker}`}>
                        <button className={`${styles.change}`} onClick={() => this.setHour(this.increment(this.state.hour, this.props.format))}>
                            <i className="fas fa-angle-up"></i>
                        </button>
                        <span className={`${styles.value}`}>
                            <input type="text" value={this.state.hour} onChange={e => this.setHour(e.target.value)} className={`${styles.input}`} />
                        </span>                        
                        <button className={`${styles.change}`} onClick={() => this.setHour(this.decrement(this.state.hour, this.props.format))}>
                            <i className="fas fa-angle-down"></i>                                                            
                        </button>
                    </span>
                    <span className={`${styles.seperator}`}>
                    :
                    </span>
                    <span className={`${styles.picker}`}>
                        <button className={`${styles.change}`} onClick={() => this.setMinutes(this.increment(this.state.minutes, 59))}>
                            <i className="fas fa-angle-up" ></i>                       
                        </button>
                        <span className={`${styles.value}`}>
                            <input type="text" value={this.state.minutes} onChange={e => this.setMinutes(e.target.value)} className={`${styles.input}`} />
                        </span>
                        <button className={`${styles.change}`} onClick={() => this.setMinutes(this.decrement(this.state.minutes, 59))}>
                            <i className="fas fa-angle-down"></i>                                                        
                        </button>
                    </span>
                    { this.props.format === 12 ?
                    <Fragment>
                        <span className={`${styles.seperator}`}>
                        {':'}
                        </span>
                        <span className={`${styles.picker}`}>
                            <button className={`${styles.change}`} onClick={() => this.setPeriod(this.state.period === 'AM' ? 'PM' : 'AM' )}>
                                <i className="fas fa-angle-up"></i>                            
                            </button>
                            <span className={`${styles.value}`}>
                                <input type="text" value={this.state.period} onChange={e => this.setPeriod(e.target.value)} className={`${styles.input}`} />
                            </span>
                            <button className={`${styles.change}`} onClick={() => this.setPeriod(this.state.period === 'AM' ? 'PM' : 'AM' )}>
                                <i className="fas fa-angle-down"></i>                                
                            </button>
                        </span>
                    </Fragment>
                    : null}
                </div>
            </div>
        );
    }
}

TimePicker.propTypes = {
    onTimePick: PropTypes.func.isRequired,
    format: PropTypes.oneOf([12, 24])
};

TimePicker.defaultProps = {
    format: 24
};

export default TimePicker;