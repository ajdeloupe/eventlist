import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

import {EventsListWrapper} from './components.js';
import EventsForm from './eventsForm'

let events = [
    {
        id: 1,
        Title: 'Event 4',
        Description: 'Event 4 description',
        StartDate: '12/18/2018',
        EndDate: '12/18/2018',
        StartTime: '12pm',
        EndTime: '6pm'
    },
    {
        id: 2,
        Title: 'X Event 5',
        Description: 'Event 5 description',
        StartDate: '12/16/2018',
        EndDate: '12/19/2018',
        StartTime: '12pm',
        EndTime: '6pm'
    },
    {
        id: 3,
        Title: 'A Event 6',
        Description: 'Event 6 description',
        StartDate: '1/1/2019',
        EndDate: '1/1/2019',
        StartTime: '12pm',
        EndTime: ''
    }
];
function reducer(state={events,
    showEvents: false,
    sortOrder: 'id'}, action) {
        switch (action.type) {
            case 'SORT':
                return Object.assign({}, state, {sortOrder: action.sortOrder});
            case 'DELETE':
               // let modifiedEvents = [...state.events];
                let modifiedEvents = state.events.filter(o => o.id !== action.item.id);
                return Object.assign({}, state, {events: modifiedEvents});
            case 'TOGGLE':
                return Object.assign({}, state, {showEvents: !state.showEvents});
            case 'ADD':
                const maxId = Math.max.apply(Math, 
                //map all of the ids to a new array which is applied as arguments to Math.max()
                state.events.map(o => o.id));
                //increment the current max id by 1 and update the id on the event to be added.
                action.event.id = maxId + 1;    
                //update the eventsList by adding the new event.
                return Object.assign({}, state, {events: state.events.concat(action.event)});
            default:
                return state;
        }
}
let store = Redux.createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* function addEvent ( history, event) {
    //find the current max id
    
    const maxId = Math.max.apply(Math, 
                                 //map all of the ids to a new array which is applied as arguments to Math.max()
                                 events.map(o => o.id));
    //increment the current max id by 1 and update the id on the event to be added.
    event.id = maxId + 1;    
    //update the eventsList by adding the new event which will trigger a new render() to be called.
    //this.setState({eventsList: this.state.eventsList.concat([event])});
    events =  [...events, ...[event]];
    history.push('/');
    //render();
} */
/* function EventsWrapper () {
    return <EventsListWrapper />
}
const AddEventForm = withRouter(({history}) => 
     <EventsForm  />
   ); */
//render the main class and put it inside #events-app
function render() {
    ReactDOM.render(
        <BrowserRouter>
            <ReactRedux.Provider store={store}>
                <>
                    <Route exact path="/" component={EventsListWrapper} />
                    <Route path="/add" component={EventsForm} />
                </>
            </ReactRedux.Provider>
        </BrowserRouter>, document.getElementById('events-app')
        
    );
}
render();