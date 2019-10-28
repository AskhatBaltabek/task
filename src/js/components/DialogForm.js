import React, { Component } from "react";
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ru';
moment.updateLocale('en', {
    week: {
        dow: 1,
    },
})

const ConnectedForm = styled.form`
    
`
const SInput = styled.input`
    width: 100%;
    margin-bottom: 10px;
`
const STextarea = styled.textarea`
    max-width: 100%
    min-width: 100%;
    min-height: 200px;
`

class DialogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
        }
    }

    handleChange = (event)=> {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        
    }

    render() {
        const state = this.state;
        return (
            <ConnectedForm onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title:</label>
                <SInput type="text" id="title" name="title" onChange={this.handleChange} value={state.title} />
                <label htmlFor="description">Description:</label>
                <STextarea name="description" id="description" onChange={this.handleChange} defaultValue={state.description}></STextarea>
            </ConnectedForm>
        )
    }
}

export default DialogForm;