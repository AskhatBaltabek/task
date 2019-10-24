import React, { Component } from "react";
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ru';
moment.updateLocale('en', {
    week: {
        dow: 1,
    },
})

const Panel = styled.div`
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    height: 70px;
`
const PanelTitle = styled.h1`
    margin: 0 10px;
    font-size: 50px;
    color: #fff;
`

class CalendarPanel extends Component {
    render() {
        return (
            <Panel>
                <PanelTitle>{this.props.data}</PanelTitle>
            </Panel>
        )
    }
}

export default CalendarPanel;