import React, { Component } from "react";
import styled from 'styled-components'
import CalendarDayComponent from "./CalendarDay";
import CalendarPanel from "./CalendarPanel";
import DialogComponent from "./Dialog";
import moment from 'moment';
import 'moment/locale/ru';
moment.updateLocale('en', {
    week: {
      dow: 1,
    },
})

// import { connect } from "react-redux";
// import { addArticle } from "../actions/index";
const CalendarWrap = styled.div`
`
const CalendarBody = styled.table`
  width: 100%;
  border-spacing: unset;
`
const WeekWrap = styled.td`
    height: 50px;
    text-align: center;
    font-weight: bold;
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    color: #fff;
    
    :last-child{
        border-right: unset
    }
`

class CalendarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weekDays: moment.weekdaysShort(true),
            currentDate: moment(),
            choosenDate: moment(),
            daySlots: [],
            dialogOpen: false,
        };

        this.dialogToggle = this.dialogToggle.bind(this);
        this.chooseDate = this.chooseDate.bind(this);
    }

    componentDidMount() {
        this.updateDaySlots();
    }

    updateDaySlots() {
        let daySlots = [];
        let rows = [];
        let cells = [];
        let firstDay = this.state.currentDate.startOf('month').format('d');
        let lastDay = this.state.currentDate.endOf('month').format('d');
        let daysInMonth = this.state.currentDate.daysInMonth();

        for(let i=0; i<firstDay-1;i++) {
            daySlots.push(<CalendarDayComponent methods={{dialogToggle: this.dialogToggle, chooseDate: this.chooseDate}} key={i-1} />);
        }

        for(let i=1; i<=daysInMonth; i++) {
            daySlots.push(<CalendarDayComponent methods={{dialogToggle: this.dialogToggle, chooseDate: this.chooseDate}} key={i} data={{date:i, currentDate:this.state.currentDate}}/>);
        }

        for(let i=0; i<7-lastDay; i++) {
            daySlots.push(<CalendarDayComponent methods={{dialogToggle: this.dialogToggle, chooseDate: this.chooseDate}} key={i}/>);
        }

        daySlots.forEach((v, index) => {
            if(index%7 !== 0)
                cells.push(v);
            else {
                rows.push(cells);
                cells = [];
                cells.push(v);
            }
        
            if(index === daySlots.length - 1) rows.push(cells);
        });
        
        daySlots = rows.map((v,i) => {
            return <tr key={i}>{v}</tr>;
        });
        
        this.setState({
            daySlots: daySlots
        });
    }

    chooseDate(d) {
        if(!d) d = null;

        this.setState({
            choosenDate: d
        });
    }

    dialogToggle(b) {
        if(typeof b === 'undefined') b = false;

        this.setState({
            dialogOpen: b
        });
    }
    
    render() {
        const data = this.state;
        
        return (
            <CalendarWrap>
                <CalendarPanel
                    data={this.state.currentDate.format('MMMM')}
                />
                <CalendarBody>
                    <tbody>
                        <tr key={1}>
                            {this.state.weekDays.map((name, index) => {
                                return <WeekWrap key={index}>{name}</WeekWrap>
                            })}
                        </tr>
                        {this.state.daySlots}
                    </tbody>
                </CalendarBody>
                <DialogComponent methods={{dialogToggle: this.dialogToggle}} data={data}/>
            </CalendarWrap>
        )
    }
}

export default CalendarComponent;