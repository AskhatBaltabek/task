import React, { Component } from "react";
import styled from 'styled-components';
import moment from 'moment';
import DialogForm from './DialogForm';
import 'moment/locale/ru';
moment.updateLocale('en', {
    week: {
        dow: 1,
    },
})

const Dialog = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1500;
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    opacity: ${props => props.open ? '1' : '0'};
    transition: ease-out 0.15s;
`
const DialogWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1400;
`
const DialogBody = styled.div`
    background: #fff;
    max-width: 640px;
    min-width: 500px;
    max-height: calc(100% - 64px);
    // min-height: 200px;
    border-radius: 5px;
    box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12);
`
const DialogHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
`
const DialogTitle = styled.h2`
    flex: 1;
    padding: 10px;
    margin: 0 0;
    color: #fff;
`
const DialogContent = styled.div`
    padding: 20px;
`
const DialogFooter = styled.div`
    padding: 10px;
    display: flex;
    justify-content: flex-end;
`
const DialogButton = styled.button`
    border-radius: 2px;
    padding: 5px 7px;
    margin-left: 5px;
    outline: unset;
    cursor: pointer;
    border 1px solid #dadada;
    background: ${props => props.primary ? '#dadada' : '#fafafa'}
    text-transform: uppercase;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;

    :active {
        box-shadow: inset 2px 2px 5px -3px #585858;
        // color: #fff;
    }
`

class DialogComponent extends Component {
    // constructor(props) {
    //     super(props);
        
    // }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown, false);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyDown, false);
      }
    
    handleKeyDown = (event) => {
        if (event.keyCode === 13 /*save*/) {
            this.props.methods.dialogToggle(false);
        }
        if (event.keyCode === 27 /*cancel*/) {
            this.props.methods.dialogToggle(false);
        }
    }

    handleClick = () => {
        this.props.methods.dialogToggle(false)
    }

    render() {
        const data = this.props.data;
        return (
            <Dialog open={data.dialogOpen}>
                <DialogWrap>
                    <DialogBody>
                        <DialogHeader>
                            <DialogTitle>{data.choosenDate.format('D MMM')}</DialogTitle>
                        </DialogHeader>
                        <DialogContent>
                            <DialogForm />
                        </DialogContent>
                        <DialogFooter>
                            <DialogButton onClick={this.handleClick} primary>Save</DialogButton>
                            <DialogButton onClick={this.handleClick}>Cancel</DialogButton>
                        </DialogFooter>
                    </DialogBody>
                </DialogWrap>
            </Dialog>
        )
    }
}

export default DialogComponent;