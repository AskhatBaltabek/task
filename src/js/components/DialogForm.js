import React, { Component } from "react";
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ru';
moment.updateLocale('en', {
    week: {
        dow: 1,
    },
})

class DialogForm extends Component {

    render() {
        return (
            <input type='text' />
        )
    }
}

export default DialogForm;