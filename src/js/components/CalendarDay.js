import React, { Component } from "react";
import styled from 'styled-components'
import moment from 'moment'
// import { connect } from "react-redux";
// import { addArticle } from "../actions/index";

const CalendarDay = styled.td`
    padding: 5px;
    height: 105px;
    border-right: 1px dashed #dadada;
    border-bottom: 1px dashed #dadada;
    text-align: center;
    cursor: pointer;
    position: relative;

    :last-child{
        border-right: unset
    }

    :hover{
        // background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
        background-color: #dadada;
        border: unset;
    }
    :hover span{
        // color: #fff;
    }
`
const CalendarDayText = styled.span`
    position: absolute;
    font-weight: 500;
    color: #29323c;
    top: 10px;
    left: 10px;
    
`

class CalendarDayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.data ? this.props.data.date : null,
            currentDate: this.props.data ? this.props.data.currentDate : moment(),
            tasks: [
                {id:1,title:'title 1',desc:'description title 1',color:'red'},
                {id:2,title:'title 2',desc:'description title 2',color:'blue'}
            ]
        }

    }
    
    componentDidMount() {

    }

    handleClick = () => {
        if(this.state.date === null) return 0;
        this.props.methods.dialogToggle(true);
        this.props.methods.chooseDate(this.state.currentDate.set('date', this.state.date));
    }

    render() {
        const state = this.state;

        return (
            <CalendarDay onClick={this.handleClick}>
                <CalendarDayText>{state.date}</CalendarDayText>
                
            </CalendarDay>
        )
    }
}

export default CalendarDayComponent;