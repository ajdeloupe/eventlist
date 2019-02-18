import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class EventsForm extends React.Component {
    render () {
        
        return( 
            <div>
            <h1>Add Event</h1>
            <form className="events-form" onSubmit={this._handleSubmit.bind(this)}>
                <label htmlFor="new-event-title">Title:</label>
                <input type="text" id="new-event-title" ref={input => this._title = input} /><br />
                <label htmlFor="new-event-desc">Description:</label>
                <input type="text" id="new-event-desc" ref={input => this._description = input} /><br />
                <label htmlFor="new-event-start">Start Date:</label>
                <input type="text" id="new-event-start" ref={input => this._startDate = input} /><br />
                <label htmlFor="new-event-end">End Date:</label>
                <input type="text" id="new-event-end" ref={input => this._endDate = input} /><br />
                <label htmlFor="new-event-start-time">Start Time:</label>
                <input type="text" id="new-event-start-time" ref={input => this._startTime = input} /><br />
                <label htmlFor="new-event-end-time">End Time:</label>
                <input type="text" id="new-event-end-time" ref={input => this._endTime = input} /><br />
                <button type="submit" id="add-event">Add Event</button>
            </form>
            </div>
        );
    }
    _handleSubmit(e) {
        e.preventDefault();
        let Title = this._title.value;
        let Description = this._description.value;
        let StartDate = this._startDate.value;
        let EndDate = this._endDate.value;
        let StartTime = this._startTime.value;
        let EndTime = this._endTime.value;
        const event = {
            id: 0,
            Title,
            Description,
            StartDate,
            EndDate,
            StartTime,
            EndTime
        }
        //accesses the _addEvent function defined in another class, possible because it was passed as a property of "addEvent" to this class.
        this.props.onAddEvent(event);
    }
    
}
function mapStateToProps(state) {
    return {}
}
function mapDispatchToProps(dispatch, props) {
    return {
        onAddEvent: (event) => {
            dispatch({type: 'ADD', event});
            props.history.push('/');
        }
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(EventsForm));