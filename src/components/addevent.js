import React, { Component } from 'react';
import {Label,Input} from 'reactstrap';
/*  HELPERS FOR THE OPTIONS BELOW  */
let days = [];
( () => {
  for (var i = 1; i < 32; i++){
    days.push(i);
  }
})();
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
let minutes = ['00', '15', '30', '45'];
/*  END HELPER  */

/*  START COMPONENT  */
class AddEvent extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      month: 'January',
      day: '1',
      year: '2019',
      hour: '12',
      minute: '00',
      ampm: 'AM',
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt){
    evt.preventDefault();
    const {month, day, year, hour, minute, ampm, name} = this.state;
    const date = new Date(year + ' ' + month + ' ' + day );
    const time=hour + ':' + minute + ' ' + ampm
    this.props.closeForm(name, time,date);
  }


  handleChange(evt){
    evt.preventDefault();
    this.setState({[evt.target.name]: evt.target.value});
  }

  render() {
    const {month, day, year, hour, minute, ampm, name,time,date} = this.state;
    
    
    return (
      <div className="add-form">
        <form onSubmit={this.handleSubmit}>

          <div className="form-row">
            <div className="col-sm-4">
                            <div className="form-group">
                                    <Label for="exampleInputEmail3">Event name:</Label>
                                    </div>
                                    </div>

                                    <div className="col-sm-4">
                            <div className="form-group">
                            <Input typclassNamee="email" className="form-control form-control-sm mr-1 " type="text" name="name" id="exampleInputEmail3" placeholder="Event name" onChange={this.handleChange} />
                                    </div>
                                    </div>
                            </div>
<br></br>
           
            <div class="row">
              <div className="col-sm-1">
                <div className="form-group">
                <label className="flex-row" >
              Date:</label>
                </div>
              </div>

    <div className="col-sm-3">
        <div className="form-group">
            <select className="browser-default " className="form-control" value={this.state.month} onChange={this.handleChange} name="month" >
                  {months.map((month, idx) => (
                    <option key={idx} value={month}>{month}</option>)) }
                </select>
        </div>
    </div>
    <div className="col-sm-4">
        <div className="form-group">
        <select className="browser-default" className="form-control" value={this.state.day} onChange={this.handleChange} name="day">
                  {days.map((day, idx) => (
                    <option key={idx} value={day}>{day}</option>
                  ))}
                </select>
        </div>
    </div>
    <div className="col-sm-4">
        <div className="form-group">
        <input type="text" name="year" className="form-control" value={this.state.year} onChange={this.handleChange} />
        </div>
    </div>

    <div className="col-sm-1">
        <div className="form-group">
        <label className="flex-row" >
            Time:</label>
        </div>
    </div>


    <div className="col-sm-3">
        <div className="form-group">
        <select className="browser-default form-control" value={this.state.hour} onChange={this.handleChange} name="hour" >
                  {hours.map((hour, idx) => (
                    <option key={idx} value={hour}>{hour}</option>
                  ))}
                </select>
        </div>
    </div>

    <div className="col-sm-3">
        <div className="form-group">
        <select className="browser-default form-control" value={this.state.minute} onChange={this.handleChange} name="minute" >
                  {minutes.map((minute, idx) => (
                    <option key={idx} value={minute}>{minute}</option>
                  ))}
                </select>
        </div>
    </div>

    <div className="col-sm-3">
        <div className="form-group">
        <select className="browser-default form-control" value={this.state.ampm} onChange={this.handleChange} name="ampm">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                </select>
        </div>
    </div>

</div>

        
          <input className="btn btn-primary" type="submit" name="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddEvent;

