import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
export class EventsBox extends React.Component {
    constructor(props) {
        //super() runs the function of the same name (here constructor()) inside the "parent" class (here React.Component)
        super(props);
        //let events = this.props.events;
    }
    //set default options.  can be set outside the constructor in which case you don't need to use "this.". Use setState to change these to trigger a new render
   
    
    state = {
           // showEvents: false,
            //sortOrder: 'id',
            //eventsList: this.props.events
    };
    //before rendering, fetch events from API
    componentWillMount(){
       // this._fetchEvents();
    }
    render () {
        let {events, sortOrder, showEvents} = this.props;

        //don't call setState inside any functions called inside render() because they are already rendering.
        //returns an ordered array of <EventsItem>s
        const eventlist = this._getEvents(events,sortOrder);
        //by default events are not displayed so eventNodes and eventSort are empty
        let eventNodes;
        let eventSort;
        //returns the text for the Event count to be displayed, based on the length of the array of <EventsItem>s
        const eventCount = this._getEventsCount(eventlist.length);
        //default button text
        let buttonText = 'Show Events';
        //if events should be displayed..
        if (showEvents) {
            //change button text
            buttonText = 'Hide Events';
            //display the sort dropdown.  include onChange attribute and ref attribute to access current value.
            eventSort = <div><label htmlFor="events-order-select">Order By:</label>
                <select id="events-order-select" onChange={this._handleChange.bind(this)} ref={select => this._sort = select}><option value="id">ID</option><option value="date">Date (soonest first)</option>
            <option value="title">Title</option></select></div>
            //show events by assigning them to the previously empty eventNodes variable.
            eventNodes = <ul className="event-list">
                {eventlist}
            </ul>;
        }
        //<EventsForm addEvent={this._addEvent.bind(this)} />
        //we have all the values, ready to render view. dont need a ref on the button because we are just toggling a boolean
        return( <div className="events">
               <h1>Event List</h1>
               <h2>{eventCount}</h2>
               
               <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
               {eventSort}   
               {eventNodes}
               <p><Link to="/add">Add event</Link></p>
                
            </div> );
    }
    //after rendering, set interval to check for updates from API
    componentDidMount(){
       // this._timer = setInterval(() => this._fetchEvents(), 5000);
    }
    //before removing, clear any timers that are running
    componentWillUnmount() {
        // clearInterval(this._timer);
    }
    //functions starting with _ indicate custom functions - functions without _ at the start are functions built in to react.
    _getEvents(eventlist, sortBy){
        
        //sort the events first.    
        this._sortEvents(eventlist, sortBy);
        //map runs a function against each item in a provided array and returns a new array
        return eventlist.map(event => {
            return(<EventsItem event={event}  key={event.id} onDelete={this._deleteEvent.bind(this)} />);
        });
    }
    //AJAX to fetch events from API using jquery
    /*_fetchEvents() {
        jQuery.ajax({
            method: 'GET',
            url: '/api/events',
            success: (events) => {
                this.setState({events})
            }
        });
    }*/
    
    _deleteEvent(event){
        //create new array from current eventsList
        //const  events = [...this.state.eventsList];
        //find where the event to be deleted is in the new array
        //const eventIndex = events.indexOf(event);
        //splice the new array, removing the event to be deleted
       // events.splice(eventIndex, 1);
        //update eventsList to trigger a new render()
        //this.setState({eventsList: events})
        console.log(event);
        this.props.onDelete(event);
       
    }
    //handle updates to the sort dropdown 
    _handleChange(){
        //get the new sort value
        let sortBy = this._sort.value;
        //trigger a new render by setting sortOrder 
        this.props.onSort(sortBy);
        //this.setState({
            //sortOrder: sortBy 
        //});
    }
    //handle clicks on the hide/show events button
    _handleClick() {
        //trigger a new render by toggling showEvents to the value that is the opposite of the current value. 
        //this.setState({
           // showEvents: !this.state.showEvents
        //});
        this.props.onToggle();
    }
    //update text for events count for different scenarios
    _getEventsCount(eventCount) {
        if (eventCount === 0) {
            return 'no events at this time';
        } else if (eventCount === 1) {
            return '1 event';
        } else {
            //uses template literal
            return `${eventCount} events`;
        }
    }
    //sort the eventList array by either date, title or id.
    _sortEvents (eventlist, sortby) {
        
        eventlist.sort(function (a, b) {
            if(sortby === 'date') {
                a = new Date(a.StartDate);
                b = new Date(b.StartDate);
            } else if (sortby === 'title'){
                a = a.Title.toLowerCase();
                b = b.Title.toLowerCase();
            } else {
                a = a.id;
                b = b.id;
            }
            return a<b ? -1 : a>b ? 1 : 0;
        });
    }
    
}


export class EventsItem extends React.Component {
    render () {
        return( 
               //props refers to the dynamic properties set when using this class in a loop/map IE: <EventsItem event="{event}">
               <li><h3>{this.props.event.Title}</h3><p>{this.props.event.Description}<br />{this._getEventsDatetime(this.props.event)}</p><a href="#" onClick={this._handleDelete.bind(this)}>Delete Event</a></li>
               );
    }
    //set up date time string
    _getEventsDatetime (event) {
        
        //old way for destructuring event object into variables with the same names as property names.
        //let StartDate = event.StartDate;
        //let EndDate = event.EndDate;
        //let StartTime = event.StartTime;
        //let EndTime = event.EndTime;
        
        //destructure event object into individual variables with the same names as property names.
        let {StartDate, EndDate, StartTime, EndTime} = event;
        let onedayevent;
        StartDate === EndDate || !EndDate ? onedayevent = true : onedayevent = false;
        let dateString = StartDate;
        //using template literals to create string
        if (!onedayevent) {
            dateString += ` - ${EndDate}`;  
        }
        if (StartTime) {
            dateString += ` ${StartTime}`;
        }
        if (EndTime) {
             dateString += ` - ${EndTime}`;
        }
        return dateString; 
    }
    _handleDelete(e){
        e.preventDefault();
        if (confirm('Are you sure?')){
            //call the onDelete property set when using this class in a loop/map IE - allows us to call a function that is defined in another class.
            this.props.onDelete(this.props.event);
        }
    }
}
function mapStateToProps(state){
    return{
        showEvents: state.showEvents,
        sortOrder: state.sortOrder,
        events: state.events
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onSort: (sortOrder) => {
            dispatch({type: 'SORT', sortOrder});
        },
        onDelete: (item) => {
            dispatch({type: 'DELETE', item});
        },
        onToggle: () => {
            dispatch({type: 'TOGGLE'});
        }
    }
}
export const EventsListWrapper = connect(mapStateToProps, mapDispatchToProps)(function({showEvents, sortOrder, events, onSort, onDelete, onToggle}){
    return <EventsBox events={events} showEvents={showEvents} sortOrder={sortOrder} onSort={onSort} onDelete={onDelete} onToggle={onToggle} />
})   


