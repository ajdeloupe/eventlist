(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _components = require("./components.js");

//render the main class and put it inside #events-app
ReactDOM.render(React.createElement(_components.EventsBox, null), document.getElementById('events-app'));

},{"./components.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventsForm = exports.EventsItem = exports.EventsBox = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EventsBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EventsBox, _React$Component);

  function EventsBox() {
    var _this;

    _classCallCheck(this, EventsBox);

    //super() runs the function of the same name (here constructor()) inside the "parent" class (here React.Component)
    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventsBox).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showEvents: false,
      sortOrder: 'id',
      eventsList: [{
        id: 1,
        Title: 'Event 4',
        Description: 'Event 4 description',
        StartDate: '12/18/2018',
        EndDate: '12/18/2018',
        StartTime: '12pm',
        EndTime: '6pm'
      }, {
        id: 2,
        Title: 'X Event 5',
        Description: 'Event 5 description',
        StartDate: '12/16/2018',
        EndDate: '12/19/2018',
        StartTime: '12pm',
        EndTime: '6pm'
      }, {
        id: 3,
        Title: 'A Event 6',
        Description: 'Event 6 description',
        StartDate: '1/1/2019',
        EndDate: '1/1/2019',
        StartTime: '12pm',
        EndTime: ''
      }]
    });

    return _this;
  } //set default options.  can be set outside the constructor in which case you don't need to use "this.". Use setState to change these to trigger a new render


  _createClass(EventsBox, [{
    key: "componentWillMount",
    //before rendering, fetch events from API
    value: function componentWillMount() {// this._fetchEvents();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      //don't call setState inside any functions called inside render() because they are already rendering.
      //returns an ordered array of <EventsItem>s
      var events = this._getEvents(this.state.sortOrder); //by default events are not displayed so eventNodes and eventSort are empty


      var eventNodes;
      var eventSort; //returns the text for the Event count to be displayed, based on the length of the array of <EventsItem>s

      var eventCount = this._getEventsCount(events.length); //default button text


      var buttonText = 'Show Events'; //if events should be displayed..

      if (this.state.showEvents) {
        //change button text
        buttonText = 'Hide Events'; //display the sort dropdown.  include onChange attribute and ref attribute to access current value.

        eventSort = React.createElement("div", null, React.createElement("label", {
          htmlFor: "events-order-select"
        }, "Order By:"), React.createElement("select", {
          id: "events-order-select",
          onChange: this._handleChange.bind(this),
          ref: function ref(select) {
            return _this2._sort = select;
          }
        }, React.createElement("option", {
          value: "id"
        }, "ID"), React.createElement("option", {
          value: "date"
        }, "Date (soonest first)"), React.createElement("option", {
          value: "title"
        }, "Title"))); //show events by assigning them to the previously empty eventNodes variable.

        eventNodes = React.createElement("ul", {
          className: "event-list"
        }, events);
      } //we have all the values, ready to render view. dont need a ref on the button because we are just toggling a boolean


      return React.createElement("div", {
        className: "events"
      }, React.createElement("h1", null, "Event List"), React.createElement("h2", null, eventCount), React.createElement("button", {
        onClick: this._handleClick.bind(this)
      }, buttonText), eventSort, eventNodes, React.createElement(EventsForm, {
        addEvent: this._addEvent.bind(this)
      }));
    } //after rendering, set interval to check for updates from API

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {} // this._timer = setInterval(() => this._fetchEvents(), 5000);
    //before removing, clear any timers that are running

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {} // clearInterval(this._timer);
    //functions starting with _ indicate custom functions - functions without _ at the start are functions built in to react.

  }, {
    key: "_getEvents",
    value: function _getEvents(sortBy) {
      var _this3 = this;

      //sort the events first.    
      this._sortEvents(sortBy); //map runs a function against each item in a provided array and returns a new array


      return this.state.eventsList.map(function (event) {
        return React.createElement(EventsItem, {
          event: event,
          key: event.id,
          onDelete: _this3._deleteEvent.bind(_this3)
        });
      });
    } //AJAX to fetch events from API using jquery

    /*_fetchEvents() {
        jQuery.ajax({
            method: 'GET',
            url: '/api/events',
            success: (events) => {
                this.setState({events})
            }
        });
    }*/

  }, {
    key: "_addEvent",
    value: function _addEvent(event) {
      //find the current max id
      var maxId = Math.max.apply(Math, //map all of the ids to a new array which is applied as arguments to Math.max()
      this.state.eventsList.map(function (o) {
        return o.id;
      })); //increment the current max id by 1 and update the id on the event to be added.

      event.id = maxId + 1; //update the eventsList by adding the new event which will trigger a new render() to be called.
      //this.setState({eventsList: this.state.eventsList.concat([event])});

      this.setState({
        eventsList: [].concat(_toConsumableArray(this.state.eventsList), [event])
      });
    }
  }, {
    key: "_deleteEvent",
    value: function _deleteEvent(event) {
      //create new array from current eventsList
      var events = _toConsumableArray(this.state.eventsList); //find where the event to be deleted is in the new array


      var eventIndex = events.indexOf(event); //splice the new array, removing the event to be deleted

      events.splice(eventIndex, 1); //update eventsList to trigger a new render()

      this.setState({
        eventsList: events
      });
    } //handle updates to the sort dropdown 

  }, {
    key: "_handleChange",
    value: function _handleChange() {
      //get the new sort value
      var sortBy = this._sort.value; //trigger a new render by setting sortOrder 

      this.setState({
        sortOrder: sortBy
      });
    } //handle clicks on the hide/show events button

  }, {
    key: "_handleClick",
    value: function _handleClick() {
      //trigger a new render by toggling showEvents to the value that is the opposite of the current value. 
      this.setState({
        showEvents: !this.state.showEvents
      });
    } //update text for events count for different scenarios

  }, {
    key: "_getEventsCount",
    value: function _getEventsCount(eventCount) {
      if (eventCount === 0) {
        return 'no events at this time';
      } else if (eventCount === 1) {
        return '1 event';
      } else {
        //uses template literal
        return "".concat(eventCount, " events");
      }
    } //sort the eventList array by either date, title or id.

  }, {
    key: "_sortEvents",
    value: function _sortEvents(sortby) {
      this.state.eventsList.sort(function (a, b) {
        if (sortby === 'date') {
          a = new Date(a.StartDate);
          b = new Date(b.StartDate);
        } else if (sortby === 'title') {
          a = a.Title.toLowerCase();
          b = b.Title.toLowerCase();
        } else {
          a = a.id;
          b = b.id;
        }

        return a < b ? -1 : a > b ? 1 : 0;
      });
    }
  }]);

  return EventsBox;
}(React.Component);

exports.EventsBox = EventsBox;

var EventsItem =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(EventsItem, _React$Component2);

  function EventsItem() {
    _classCallCheck(this, EventsItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(EventsItem).apply(this, arguments));
  }

  _createClass(EventsItem, [{
    key: "render",
    value: function render() {
      return (//props refers to the dynamic properties set when using this class in a loop/map IE: <EventsItem event="{event}">
        React.createElement("li", null, React.createElement("h3", null, this.props.event.Title), React.createElement("p", null, this.props.event.Description, React.createElement("br", null), this._getEventsDatetime(this.props.event)), React.createElement("a", {
          href: "#",
          onClick: this._handleDelete.bind(this)
        }, "Delete Event"))
      );
    } //set up date time string

  }, {
    key: "_getEventsDatetime",
    value: function _getEventsDatetime(event) {
      //old way for destructuring event object into variables with the same names as property names.
      //let StartDate = event.StartDate;
      //let EndDate = event.EndDate;
      //let StartTime = event.StartTime;
      //let EndTime = event.EndTime;
      //destructure event object into individual variables with the same names as property names.
      var StartDate = event.StartDate,
          EndDate = event.EndDate,
          StartTime = event.StartTime,
          EndTime = event.EndTime;
      var onedayevent;
      StartDate === EndDate || !EndDate ? onedayevent = true : onedayevent = false;
      var dateString = StartDate; //using template literals to create string

      if (!onedayevent) {
        dateString += " - ".concat(EndDate);
      }

      if (StartTime) {
        dateString += " ".concat(StartTime);
      }

      if (EndTime) {
        dateString += " - ".concat(EndTime);
      }

      return dateString;
    }
  }, {
    key: "_handleDelete",
    value: function _handleDelete(e) {
      e.preventDefault();

      if (confirm('Are you sure?')) {
        //call the onDelete property set when using this class in a loop/map IE - allows us to call a function that is defined in another class.
        this.props.onDelete(this.props.event);
      }
    }
  }]);

  return EventsItem;
}(React.Component);

exports.EventsItem = EventsItem;

var EventsForm =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(EventsForm, _React$Component3);

  function EventsForm() {
    _classCallCheck(this, EventsForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(EventsForm).apply(this, arguments));
  }

  _createClass(EventsForm, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      return (//ref allows us to access the value of the input
        React.createElement("form", {
          className: "events-form",
          onSubmit: this._handleSubmit.bind(this)
        }, React.createElement("label", {
          htmlFor: "new-event-title"
        }, "Title:"), React.createElement("input", {
          type: "text",
          id: "new-event-title",
          ref: function ref(input) {
            return _this4._title = input;
          }
        }), React.createElement("br", null), React.createElement("label", {
          htmlFor: "new-event-desc"
        }, "Description:"), React.createElement("input", {
          type: "text",
          id: "new-event-desc",
          ref: function ref(input) {
            return _this4._description = input;
          }
        }), React.createElement("br", null), React.createElement("label", {
          htmlFor: "new-event-start"
        }, "Start Date:"), React.createElement("input", {
          type: "text",
          id: "new-event-start",
          ref: function ref(input) {
            return _this4._startDate = input;
          }
        }), React.createElement("br", null), React.createElement("label", {
          htmlFor: "new-event-end"
        }, "End Date:"), React.createElement("input", {
          type: "text",
          id: "new-event-end",
          ref: function ref(input) {
            return _this4._endDate = input;
          }
        }), React.createElement("br", null), React.createElement("label", {
          htmlFor: "new-event-start-time"
        }, "Start Time:"), React.createElement("input", {
          type: "text",
          id: "new-event-start-time",
          ref: function ref(input) {
            return _this4._startTime = input;
          }
        }), React.createElement("br", null), React.createElement("label", {
          htmlFor: "new-event-end-time"
        }, "End Time:"), React.createElement("input", {
          type: "text",
          id: "new-event-end-time",
          ref: function ref(input) {
            return _this4._endTime = input;
          }
        }), React.createElement("br", null), React.createElement("button", {
          type: "submit",
          id: "add-event"
        }, "Add Event"))
      );
    }
  }, {
    key: "_handleSubmit",
    value: function _handleSubmit(e) {
      e.preventDefault();
      var Title = this._title.value;
      var Description = this._description.value;
      var StartDate = this._startDate.value;
      var EndDate = this._endDate.value;
      var StartTime = this._startTime.value;
      var EndTime = this._endTime.value;
      var event = {
        id: 0,
        Title: Title,
        Description: Description,
        StartDate: StartDate,
        EndDate: EndDate,
        StartTime: StartTime,
        EndTime: EndTime //accesses the _addEvent function defined in another class, possible because it was passed as a property of "addEvent" to this class.

      };
      this.props.addEvent(event);
    }
  }]);

  return EventsForm;
}(React.Component);

exports.EventsForm = EventsForm;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zcmMvYXBwLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBO0FBQ0EsUUFBUSxDQUFDLE1BQVQsQ0FDSSxvQkFBQyxxQkFBRCxPQURKLEVBQ21CLFFBQVEsQ0FBQyxjQUFULENBQXdCLFlBQXhCLENBRG5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0ZhLFM7Ozs7O0FBQ1QsdUJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBOztBQUZVLG9GQU1OO0FBQ0EsTUFBQSxVQUFVLEVBQUUsS0FEWjtBQUVBLE1BQUEsU0FBUyxFQUFFLElBRlg7QUFHQSxNQUFBLFVBQVUsRUFBRSxDQUNaO0FBQ0ksUUFBQSxFQUFFLEVBQUUsQ0FEUjtBQUVJLFFBQUEsS0FBSyxFQUFFLFNBRlg7QUFHSSxRQUFBLFdBQVcsRUFBRSxxQkFIakI7QUFJSSxRQUFBLFNBQVMsRUFBRSxZQUpmO0FBS0ksUUFBQSxPQUFPLEVBQUUsWUFMYjtBQU1JLFFBQUEsU0FBUyxFQUFFLE1BTmY7QUFPSSxRQUFBLE9BQU8sRUFBRTtBQVBiLE9BRFksRUFVWjtBQUNJLFFBQUEsRUFBRSxFQUFFLENBRFI7QUFFSSxRQUFBLEtBQUssRUFBRSxXQUZYO0FBR0ksUUFBQSxXQUFXLEVBQUUscUJBSGpCO0FBSUksUUFBQSxTQUFTLEVBQUUsWUFKZjtBQUtJLFFBQUEsT0FBTyxFQUFFLFlBTGI7QUFNSSxRQUFBLFNBQVMsRUFBRSxNQU5mO0FBT0ksUUFBQSxPQUFPLEVBQUU7QUFQYixPQVZZLEVBbUJaO0FBQ0ksUUFBQSxFQUFFLEVBQUUsQ0FEUjtBQUVJLFFBQUEsS0FBSyxFQUFFLFdBRlg7QUFHSSxRQUFBLFdBQVcsRUFBRSxxQkFIakI7QUFJSSxRQUFBLFNBQVMsRUFBRSxVQUpmO0FBS0ksUUFBQSxPQUFPLEVBQUUsVUFMYjtBQU1J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QXBCO0FBQUE7QUFBckQsVUFaSixFQVlzRiwrQkFadEYsRUFhSTtBQUFRLFVBQUEsSUFBSSxFQUFDLFFBQWI7QUFBc0IsVUFBQSxFQUFFLEVBQUM7QUFBekIsdUJBYko7QUFGSjtBQWtCSDs7O2tDQUNhLEMsRUFBRztBQUNiLE1BQUEsQ0FBQyxDQUFDLGNBQUY7QUFDQSxVQUFJLEtBQUssR0FBRyxLQUFLLE1BQUwsQ0FBWSxLQUF4QjtBQUNBLFVBQUksV0FBVyxHQUFHLEtBQUssWUFBTCxDQUFrQixLQUFwQztBQUNBLFVBQUksU0FBUyxHQUFHLEtBQUssVUFBTCxDQUFnQixLQUFoQztBQUNBLFVBQUksT0FBTyxHQUFHLEtBQUssUUFBTCxDQUFjLEtBQTVCO0FBQ0EsVUFBSSxTQUFTLEdBQUcsS0FBSyxVQUFMLENBQWdCLEtBQWhDO0FBQ0EsVUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFMLENBQWMsS0FBNUI7QUFDQSxVQUFNLEtBQUssR0FBRztBQUNWLFFBQUEsRUFBRSxFQUFFLENBRE07QUFFVixRQUFBLEtBQUssRUFBTCxLQUZVO0FBR1YsUUFBQSxXQUFXLEVBQVgsV0FIVTtBQUlWLFFBQUEsU0FBUyxFQUFULFNBSlU7QUFLVixRQUFBLE9BQU8sRUFBUCxPQUxVO0FBTVYsUUFBQSxTQUFTLEVBQVQsU0FOVTtBQU9WLFFBQUEsT0FBTyxFQUFQLE9BUFUsQ0FTZDs7QUFUYyxPQUFkO0FBVUEsV0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixLQUFwQjtBQUNIOzs7O0VBekMyQixLQUFLLENBQUMsUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7RXZlbnRzQm94LCBFdmVudHNJdGVtLCBFdmVudHNGb3JtfSBmcm9tICcuL2NvbXBvbmVudHMuanMnO1xyXG4vL3JlbmRlciB0aGUgbWFpbiBjbGFzcyBhbmQgcHV0IGl0IGluc2lkZSAjZXZlbnRzLWFwcFxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8RXZlbnRzQm94IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnRzLWFwcCcpXHJcbik7IiwiZXhwb3J0IGNsYXNzIEV2ZW50c0JveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL3N1cGVyKCkgcnVucyB0aGUgZnVuY3Rpb24gb2YgdGhlIHNhbWUgbmFtZSAoaGVyZSBjb25zdHJ1Y3RvcigpKSBpbnNpZGUgdGhlIFwicGFyZW50XCIgY2xhc3MgKGhlcmUgUmVhY3QuQ29tcG9uZW50KVxyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvL3NldCBkZWZhdWx0IG9wdGlvbnMuICBjYW4gYmUgc2V0IG91dHNpZGUgdGhlIGNvbnN0cnVjdG9yIGluIHdoaWNoIGNhc2UgeW91IGRvbid0IG5lZWQgdG8gdXNlIFwidGhpcy5cIi4gVXNlIHNldFN0YXRlIHRvIGNoYW5nZSB0aGVzZSB0byB0cmlnZ2VyIGEgbmV3IHJlbmRlclxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3dFdmVudHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzb3J0T3JkZXI6ICdpZCcsXHJcbiAgICAgICAgICAgIGV2ZW50c0xpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBUaXRsZTogJ0V2ZW50IDQnLFxyXG4gICAgICAgICAgICAgICAgRGVzY3JpcHRpb246ICdFdmVudCA0IGRlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIFN0YXJ0RGF0ZTogJzEyLzE4LzIwMTgnLFxyXG4gICAgICAgICAgICAgICAgRW5kRGF0ZTogJzEyLzE4LzIwMTgnLFxyXG4gICAgICAgICAgICAgICAgU3RhcnRUaW1lOiAnMTJwbScsXHJcbiAgICAgICAgICAgICAgICBFbmRUaW1lOiAnNnBtJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgICAgIFRpdGxlOiAnWCBFdmVudCA1JyxcclxuICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiAnRXZlbnQgNSBkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBTdGFydERhdGU6ICcxMi8xNi8yMDE4JyxcclxuICAgICAgICAgICAgICAgIEVuZERhdGU6ICcxMi8xOS8yMDE4JyxcclxuICAgICAgICAgICAgICAgIFN0YXJ0VGltZTogJzEycG0nLFxyXG4gICAgICAgICAgICAgICAgRW5kVGltZTogJzZwbSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgICAgICBUaXRsZTogJ0EgRXZlbnQgNicsXHJcbiAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogJ0V2ZW50IDYgZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgU3RhcnREYXRlOiAnMS8xLzIwMTknLFxyXG4gICAgICAgICAgICAgICAgRW5kRGF0ZTogJzEvMS8yMDE5JyxcclxuICAgICAgICAgICAgICAgIFN0YXJ0VGltZTogJzEycG0nLFxyXG4gICAgICAgICAgICAgICAgRW5kVGltZTogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcbiAgICAvL2JlZm9yZSByZW5kZXJpbmcsIGZldGNoIGV2ZW50cyBmcm9tIEFQSVxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCl7XHJcbiAgICAgICAvLyB0aGlzLl9mZXRjaEV2ZW50cygpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICAvL2Rvbid0IGNhbGwgc2V0U3RhdGUgaW5zaWRlIGFueSBmdW5jdGlvbnMgY2FsbGVkIGluc2lkZSByZW5kZXIoKSBiZWNhdXNlIHRoZXkgYXJlIGFscmVhZHkgcmVuZGVyaW5nLlxyXG4gICAgICAgIC8vcmV0dXJucyBhbiBvcmRlcmVkIGFycmF5IG9mIDxFdmVudHNJdGVtPnNcclxuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLl9nZXRFdmVudHModGhpcy5zdGF0ZS5zb3J0T3JkZXIpO1xyXG4gICAgICAgIC8vYnkgZGVmYXVsdCBldmVudHMgYXJlIG5vdCBkaXNwbGF5ZWQgc28gZXZlbnROb2RlcyBhbmQgZXZlbnRTb3J0IGFyZSBlbXB0eVxyXG4gICAgICAgIGxldCBldmVudE5vZGVzO1xyXG4gICAgICAgIGxldCBldmVudFNvcnQ7XHJcbiAgICAgICAgLy9yZXR1cm5zIHRoZSB0ZXh0IGZvciB0aGUgRXZlbnQgY291bnQgdG8gYmUgZGlzcGxheWVkLCBiYXNlZCBvbiB0aGUgbGVuZ3RoIG9mIHRoZSBhcnJheSBvZiA8RXZlbnRzSXRlbT5zXHJcbiAgICAgICAgY29uc3QgZXZlbnRDb3VudCA9IHRoaXMuX2dldEV2ZW50c0NvdW50KGV2ZW50cy5sZW5ndGgpO1xyXG4gICAgICAgIC8vZGVmYXVsdCBidXR0b24gdGV4dFxyXG4gICAgICAgIGxldCBidXR0b25UZXh0ID0gJ1Nob3cgRXZlbnRzJztcclxuICAgICAgICAvL2lmIGV2ZW50cyBzaG91bGQgYmUgZGlzcGxheWVkLi5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93RXZlbnRzKSB7XHJcbiAgICAgICAgICAgIC8vY2hhbmdlIGJ1dHRvbiB0ZXh0XHJcbiAgICAgICAgICAgIGJ1dHRvblRleHQgPSAnSGlkZSBFdmVudHMnO1xyXG4gICAgICAgICAgICAvL2Rpc3BsYXkgdGhlIHNvcnQgZHJvcGRvd24uICBpbmNsdWRlIG9uQ2hhbmdlIGF0dHJpYnV0ZSBhbmQgcmVmIGF0dHJpYnV0ZSB0byBhY2Nlc3MgY3VycmVudCB2YWx1ZS5cclxuICAgICAgICAgICAgZXZlbnRTb3J0ID0gPGRpdj48bGFiZWwgaHRtbEZvcj1cImV2ZW50cy1vcmRlci1zZWxlY3RcIj5PcmRlciBCeTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImV2ZW50cy1vcmRlci1zZWxlY3RcIiBvbkNoYW5nZT17dGhpcy5faGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IHJlZj17c2VsZWN0ID0+IHRoaXMuX3NvcnQgPSBzZWxlY3R9PjxvcHRpb24gdmFsdWU9XCJpZFwiPklEPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cImRhdGVcIj5EYXRlIChzb29uZXN0IGZpcnN0KTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGl0bGVcIj5UaXRsZTwvb3B0aW9uPjwvc2VsZWN0PjwvZGl2PlxyXG4gICAgICAgICAgICAvL3Nob3cgZXZlbnRzIGJ5IGFzc2lnbmluZyB0aGVtIHRvIHRoZSBwcmV2aW91c2x5IGVtcHR5IGV2ZW50Tm9kZXMgdmFyaWFibGUuXHJcbiAgICAgICAgICAgIGV2ZW50Tm9kZXMgPSA8dWwgY2xhc3NOYW1lPVwiZXZlbnQtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAge2V2ZW50c31cclxuICAgICAgICAgICAgPC91bD47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vd2UgaGF2ZSBhbGwgdGhlIHZhbHVlcywgcmVhZHkgdG8gcmVuZGVyIHZpZXcuIGRvbnQgbmVlZCBhIHJlZiBvbiB0aGUgYnV0dG9uIGJlY2F1c2Ugd2UgYXJlIGp1c3QgdG9nZ2xpbmcgYSBib29sZWFuXHJcbiAgICAgICAgcmV0dXJuKCA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50c1wiPlxyXG4gICAgICAgICAgICAgICA8aDE+RXZlbnQgTGlzdDwvaDE+XHJcbiAgICAgICAgICAgICAgIDxoMj57ZXZlbnRDb3VudH08L2gyPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9oYW5kbGVDbGljay5iaW5kKHRoaXMpfT57YnV0dG9uVGV4dH08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAge2V2ZW50U29ydH0gICBcclxuICAgICAgICAgICAgICAge2V2ZW50Tm9kZXN9XHJcbiAgICAgICAgICAgICAgICA8RXZlbnRzRm9ybSBhZGRFdmVudD17dGhpcy5fYWRkRXZlbnQuYmluZCh0aGlzKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+ICk7XHJcbiAgICB9XHJcbiAgICAvL2FmdGVyIHJlbmRlcmluZywgc2V0IGludGVydmFsIHRvIGNoZWNrIGZvciB1cGRhdGVzIGZyb20gQVBJXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgLy8gdGhpcy5fdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLl9mZXRjaEV2ZW50cygpLCA1MDAwKTtcclxuICAgIH1cclxuICAgIC8vYmVmb3JlIHJlbW92aW5nLCBjbGVhciBhbnkgdGltZXJzIHRoYXQgYXJlIHJ1bm5pbmdcclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIC8vIGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xyXG4gICAgfVxyXG4gICAgLy9mdW5jdGlvbnMgc3RhcnRpbmcgd2l0aCBfIGluZGljYXRlIGN1c3RvbSBmdW5jdGlvbnMgLSBmdW5jdGlvbnMgd2l0aG91dCBfIGF0IHRoZSBzdGFydCBhcmUgZnVuY3Rpb25zIGJ1aWx0IGluIHRvIHJlYWN0LlxyXG4gICAgX2dldEV2ZW50cyhzb3J0Qnkpe1xyXG4gICAgICAgIC8vc29ydCB0aGUgZXZlbnRzIGZpcnN0LiAgICBcclxuICAgICAgICB0aGlzLl9zb3J0RXZlbnRzKHNvcnRCeSk7XHJcbiAgICAgICAgLy9tYXAgcnVucyBhIGZ1bmN0aW9uIGFnYWluc3QgZWFjaCBpdGVtIGluIGEgcHJvdmlkZWQgYXJyYXkgYW5kIHJldHVybnMgYSBuZXcgYXJyYXlcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5ldmVudHNMaXN0Lm1hcChldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybig8RXZlbnRzSXRlbSBldmVudD17ZXZlbnR9ICBrZXk9e2V2ZW50LmlkfSBvbkRlbGV0ZT17dGhpcy5fZGVsZXRlRXZlbnQuYmluZCh0aGlzKX0gLz4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy9BSkFYIHRvIGZldGNoIGV2ZW50cyBmcm9tIEFQSSB1c2luZyBqcXVlcnlcclxuICAgIC8qX2ZldGNoRXZlbnRzKCkge1xyXG4gICAgICAgIGpRdWVyeS5hamF4KHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS9ldmVudHMnLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoZXZlbnRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtldmVudHN9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9Ki9cclxuICAgIF9hZGRFdmVudChldmVudCkge1xyXG4gICAgICAgIC8vZmluZCB0aGUgY3VycmVudCBtYXggaWRcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBtYXhJZCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXAgYWxsIG9mIHRoZSBpZHMgdG8gYSBuZXcgYXJyYXkgd2hpY2ggaXMgYXBwbGllZCBhcyBhcmd1bWVudHMgdG8gTWF0aC5tYXgoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ldmVudHNMaXN0Lm1hcChvID0+IG8uaWQpKTtcclxuICAgICAgICAvL2luY3JlbWVudCB0aGUgY3VycmVudCBtYXggaWQgYnkgMSBhbmQgdXBkYXRlIHRoZSBpZCBvbiB0aGUgZXZlbnQgdG8gYmUgYWRkZWQuXHJcbiAgICAgICAgZXZlbnQuaWQgPSBtYXhJZCArIDE7ICAgIFxyXG4gICAgICAgIC8vdXBkYXRlIHRoZSBldmVudHNMaXN0IGJ5IGFkZGluZyB0aGUgbmV3IGV2ZW50IHdoaWNoIHdpbGwgdHJpZ2dlciBhIG5ldyByZW5kZXIoKSB0byBiZSBjYWxsZWQuXHJcbiAgICAgICAgLy90aGlzLnNldFN0YXRlKHtldmVudHNMaXN0OiB0aGlzLnN0YXRlLmV2ZW50c0xpc3QuY29uY2F0KFtldmVudF0pfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXZlbnRzTGlzdDogWy4uLnRoaXMuc3RhdGUuZXZlbnRzTGlzdCwgLi4uW2V2ZW50XV19KTtcclxuICAgIH1cclxuICAgIF9kZWxldGVFdmVudChldmVudCl7XHJcbiAgICAgICAgLy9jcmVhdGUgbmV3IGFycmF5IGZyb20gY3VycmVudCBldmVudHNMaXN0XHJcbiAgICAgICAgY29uc3QgIGV2ZW50cyA9IFsuLi50aGlzLnN0YXRlLmV2ZW50c0xpc3RdO1xyXG4gICAgICAgIC8vZmluZCB3aGVyZSB0aGUgZXZlbnQgdG8gYmUgZGVsZXRlZCBpcyBpbiB0aGUgbmV3IGFycmF5XHJcbiAgICAgICAgY29uc3QgZXZlbnRJbmRleCA9IGV2ZW50cy5pbmRleE9mKGV2ZW50KTtcclxuICAgICAgICAvL3NwbGljZSB0aGUgbmV3IGFycmF5LCByZW1vdmluZyB0aGUgZXZlbnQgdG8gYmUgZGVsZXRlZFxyXG4gICAgICAgIGV2ZW50cy5zcGxpY2UoZXZlbnRJbmRleCwgMSk7XHJcbiAgICAgICAgLy91cGRhdGUgZXZlbnRzTGlzdCB0byB0cmlnZ2VyIGEgbmV3IHJlbmRlcigpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXZlbnRzTGlzdDogZXZlbnRzfSlcclxuICAgIH1cclxuICAgIC8vaGFuZGxlIHVwZGF0ZXMgdG8gdGhlIHNvcnQgZHJvcGRvd24gXHJcbiAgICBfaGFuZGxlQ2hhbmdlKCl7XHJcbiAgICAgICAgLy9nZXQgdGhlIG5ldyBzb3J0IHZhbHVlXHJcbiAgICAgICAgbGV0IHNvcnRCeSA9IHRoaXMuX3NvcnQudmFsdWU7XHJcbiAgICAgICAgLy90cmlnZ2VyIGEgbmV3IHJlbmRlciBieSBzZXR0aW5nIHNvcnRPcmRlciBcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc29ydE9yZGVyOiBzb3J0QnkgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL2hhbmRsZSBjbGlja3Mgb24gdGhlIGhpZGUvc2hvdyBldmVudHMgYnV0dG9uXHJcbiAgICBfaGFuZGxlQ2xpY2soKSB7XHJcbiAgICAgICAgLy90cmlnZ2VyIGEgbmV3IHJlbmRlciBieSB0b2dnbGluZyBzaG93RXZlbnRzIHRvIHRoZSB2YWx1ZSB0aGF0IGlzIHRoZSBvcHBvc2l0ZSBvZiB0aGUgY3VycmVudCB2YWx1ZS4gXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dFdmVudHM6ICF0aGlzLnN0YXRlLnNob3dFdmVudHNcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8vdXBkYXRlIHRleHQgZm9yIGV2ZW50cyBjb3VudCBmb3IgZGlmZmVyZW50IHNjZW5hcmlvc1xyXG4gICAgX2dldEV2ZW50c0NvdW50KGV2ZW50Q291bnQpIHtcclxuICAgICAgICBpZiAoZXZlbnRDb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ25vIGV2ZW50cyBhdCB0aGlzIHRpbWUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRDb3VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJzEgZXZlbnQnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vdXNlcyB0ZW1wbGF0ZSBsaXRlcmFsXHJcbiAgICAgICAgICAgIHJldHVybiBgJHtldmVudENvdW50fSBldmVudHNgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vc29ydCB0aGUgZXZlbnRMaXN0IGFycmF5IGJ5IGVpdGhlciBkYXRlLCB0aXRsZSBvciBpZC5cclxuICAgIF9zb3J0RXZlbnRzIChzb3J0YnkpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmV2ZW50c0xpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICBpZihzb3J0YnkgPT09ICdkYXRlJykge1xyXG4gICAgICAgICAgICAgICAgYSA9IG5ldyBEYXRlKGEuU3RhcnREYXRlKTtcclxuICAgICAgICAgICAgICAgIGIgPSBuZXcgRGF0ZShiLlN0YXJ0RGF0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc29ydGJ5ID09PSAndGl0bGUnKXtcclxuICAgICAgICAgICAgICAgIGEgPSBhLlRpdGxlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBiID0gYi5UaXRsZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYSA9IGEuaWQ7XHJcbiAgICAgICAgICAgICAgICBiID0gYi5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYTxiID8gLTEgOiBhPmIgPyAxIDogMDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50c0l0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4oIFxyXG4gICAgICAgICAgICAgICAvL3Byb3BzIHJlZmVycyB0byB0aGUgZHluYW1pYyBwcm9wZXJ0aWVzIHNldCB3aGVuIHVzaW5nIHRoaXMgY2xhc3MgaW4gYSBsb29wL21hcCBJRTogPEV2ZW50c0l0ZW0gZXZlbnQ9XCJ7ZXZlbnR9XCI+XHJcbiAgICAgICAgICAgICAgIDxsaT48aDM+e3RoaXMucHJvcHMuZXZlbnQuVGl0bGV9PC9oMz48cD57dGhpcy5wcm9wcy5ldmVudC5EZXNjcmlwdGlvbn08YnIgLz57dGhpcy5fZ2V0RXZlbnRzRGF0ZXRpbWUodGhpcy5wcm9wcy5ldmVudCl9PC9wPjxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5faGFuZGxlRGVsZXRlLmJpbmQodGhpcyl9PkRlbGV0ZSBFdmVudDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgLy9zZXQgdXAgZGF0ZSB0aW1lIHN0cmluZ1xyXG4gICAgX2dldEV2ZW50c0RhdGV0aW1lIChldmVudCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vb2xkIHdheSBmb3IgZGVzdHJ1Y3R1cmluZyBldmVudCBvYmplY3QgaW50byB2YXJpYWJsZXMgd2l0aCB0aGUgc2FtZSBuYW1lcyBhcyBwcm9wZXJ0eSBuYW1lcy5cclxuICAgICAgICAvL2xldCBTdGFydERhdGUgPSBldmVudC5TdGFydERhdGU7XHJcbiAgICAgICAgLy9sZXQgRW5kRGF0ZSA9IGV2ZW50LkVuZERhdGU7XHJcbiAgICAgICAgLy9sZXQgU3RhcnRUaW1lID0gZXZlbnQuU3RhcnRUaW1lO1xyXG4gICAgICAgIC8vbGV0IEVuZFRpbWUgPSBldmVudC5FbmRUaW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vZGVzdHJ1Y3R1cmUgZXZlbnQgb2JqZWN0IGludG8gaW5kaXZpZHVhbCB2YXJpYWJsZXMgd2l0aCB0aGUgc2FtZSBuYW1lcyBhcyBwcm9wZXJ0eSBuYW1lcy5cclxuICAgICAgICBsZXQge1N0YXJ0RGF0ZSwgRW5kRGF0ZSwgU3RhcnRUaW1lLCBFbmRUaW1lfSA9IGV2ZW50O1xyXG4gICAgICAgIGxldCBvbmVkYXlldmVudDtcclxuICAgICAgICBTdGFydERhdGUgPT09IEVuZERhdGUgfHwgIUVuZERhdGUgPyBvbmVkYXlldmVudCA9IHRydWUgOiBvbmVkYXlldmVudCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBkYXRlU3RyaW5nID0gU3RhcnREYXRlO1xyXG4gICAgICAgIC8vdXNpbmcgdGVtcGxhdGUgbGl0ZXJhbHMgdG8gY3JlYXRlIHN0cmluZ1xyXG4gICAgICAgIGlmICghb25lZGF5ZXZlbnQpIHtcclxuICAgICAgICAgICAgZGF0ZVN0cmluZyArPSBgIC0gJHtFbmREYXRlfWA7ICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFN0YXJ0VGltZSkge1xyXG4gICAgICAgICAgICBkYXRlU3RyaW5nICs9IGAgJHtTdGFydFRpbWV9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEVuZFRpbWUpIHtcclxuICAgICAgICAgICAgIGRhdGVTdHJpbmcgKz0gYCAtICR7RW5kVGltZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0ZVN0cmluZzsgXHJcbiAgICB9XHJcbiAgICBfaGFuZGxlRGVsZXRlKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlPycpKXtcclxuICAgICAgICAgICAgLy9jYWxsIHRoZSBvbkRlbGV0ZSBwcm9wZXJ0eSBzZXQgd2hlbiB1c2luZyB0aGlzIGNsYXNzIGluIGEgbG9vcC9tYXAgSUUgLSBhbGxvd3MgdXMgdG8gY2FsbCBhIGZ1bmN0aW9uIHRoYXQgaXMgZGVmaW5lZCBpbiBhbm90aGVyIGNsYXNzLlxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRGVsZXRlKHRoaXMucHJvcHMuZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gICAgXHJcbiAgICBcclxuZXhwb3J0IGNsYXNzIEV2ZW50c0Zvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4oIFxyXG4gICAgICAgICAgICAvL3JlZiBhbGxvd3MgdXMgdG8gYWNjZXNzIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXRcclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZXZlbnRzLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuZXctZXZlbnQtdGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuZXctZXZlbnQtdGl0bGVcIiByZWY9e2lucHV0ID0+IHRoaXMuX3RpdGxlID0gaW5wdXR9IC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5ldy1ldmVudC1kZXNjXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmV3LWV2ZW50LWRlc2NcIiByZWY9e2lucHV0ID0+IHRoaXMuX2Rlc2NyaXB0aW9uID0gaW5wdXR9IC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5ldy1ldmVudC1zdGFydFwiPlN0YXJ0IERhdGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmV3LWV2ZW50LXN0YXJ0XCIgcmVmPXtpbnB1dCA9PiB0aGlzLl9zdGFydERhdGUgPSBpbnB1dH0gLz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3LWV2ZW50LWVuZFwiPkVuZCBEYXRlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5ldy1ldmVudC1lbmRcIiByZWY9e2lucHV0ID0+IHRoaXMuX2VuZERhdGUgPSBpbnB1dH0gLz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3LWV2ZW50LXN0YXJ0LXRpbWVcIj5TdGFydCBUaW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5ldy1ldmVudC1zdGFydC10aW1lXCIgcmVmPXtpbnB1dCA9PiB0aGlzLl9zdGFydFRpbWUgPSBpbnB1dH0gLz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3LWV2ZW50LWVuZC10aW1lXCI+RW5kIFRpbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmV3LWV2ZW50LWVuZC10aW1lXCIgcmVmPXtpbnB1dCA9PiB0aGlzLl9lbmRUaW1lID0gaW5wdXR9IC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cImFkZC1ldmVudFwiPkFkZCBFdmVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIF9oYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgVGl0bGUgPSB0aGlzLl90aXRsZS52YWx1ZTtcclxuICAgICAgICBsZXQgRGVzY3JpcHRpb24gPSB0aGlzLl9kZXNjcmlwdGlvbi52YWx1ZTtcclxuICAgICAgICBsZXQgU3RhcnREYXRlID0gdGhpcy5fc3RhcnREYXRlLnZhbHVlO1xyXG4gICAgICAgIGxldCBFbmREYXRlID0gdGhpcy5fZW5kRGF0ZS52YWx1ZTtcclxuICAgICAgICBsZXQgU3RhcnRUaW1lID0gdGhpcy5fc3RhcnRUaW1lLnZhbHVlO1xyXG4gICAgICAgIGxldCBFbmRUaW1lID0gdGhpcy5fZW5kVGltZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBldmVudCA9IHtcclxuICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgIFRpdGxlLFxyXG4gICAgICAgICAgICBEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgU3RhcnREYXRlLFxyXG4gICAgICAgICAgICBFbmREYXRlLFxyXG4gICAgICAgICAgICBTdGFydFRpbWUsXHJcbiAgICAgICAgICAgIEVuZFRpbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9hY2Nlc3NlcyB0aGUgX2FkZEV2ZW50IGZ1bmN0aW9uIGRlZmluZWQgaW4gYW5vdGhlciBjbGFzcywgcG9zc2libGUgYmVjYXVzZSBpdCB3YXMgcGFzc2VkIGFzIGEgcHJvcGVydHkgb2YgXCJhZGRFdmVudFwiIHRvIHRoaXMgY2xhc3MuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRFdmVudChldmVudCk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuIl19
