import React, {Component} from 'react';
import '../../App.css'
import PropTypes from 'prop-types';


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minuets: 0,
            seconds: 0
        }
    }
    componentWillMount() {
        this.getTimeUntill(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntill(this.props.deadline), 1000)
    }

    leadingZero(num) {
        return num < 10 ? '0' + num : num;
    }


    getTimeUntill(deadline) {
        let time = Date.parse(deadline) - Date.parse(new Date());
        let seconds = Math.floor((time/1000) % 60);
        let minuets = Math.floor((time/1000/60) % 60);
        let hours = Math.floor(time / (1000*60*60) % 24);
        let days = Math.floor(time / (1000*60*60*24));

        this.setState({days, hours, minuets, seconds})

    }

    render() {
        return (
            <div className="Clock">
                <div className="Clock-days">{this.leadingZero(this.state.days)} days</div>
                <div className="Clock-hours">{this.leadingZero(this.state.hours)} hours</div>
                <div className="Clock-minutes">{this.leadingZero(this.state.minuets)} minuets</div>
                <div className="Clock-seconds">{this.leadingZero(this.state.seconds)} seconds</div>
            </div>
        );
    }
}

Clock.propTypes = {};

export default Clock;