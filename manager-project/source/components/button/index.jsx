import React from 'react';


import './style.scss';


export default class Button extends React.Component {

    constructor({ children, waitingText = 'Loading...', onClick, disabled = false }) {
        super()

        this.state = {
            disabled    : disabled,
            innerText   : children,
            waitingText : waitingText,
            isWaiting   : false,
            onClick     : onClick,
        }

    }
    
    onClick(event) {
        this.setState({ isWaiting : true });

        if (typeof this.state.onClick === 'function') {
            this.state.onClick(event)
        }
    }

    render() {
        return (
            <button onClick={ this.onClick.bind(this) } className="btn btn-primary mx-2 my-5" type="button" disabled={this.state.disabled} data-toggle="tooltip" data-placement="right" title={this.state.innerText}>
                <span className={ `spinner-border spinner-border-sm mr-2 ${this.state.isWaiting ? '' : 'd-none'}` } role="status" aria-hidden="true"></span>
                { this.state.isWaiting ? this.state.waitingText : this.state.innerText }
            </button>
        );
    }
}