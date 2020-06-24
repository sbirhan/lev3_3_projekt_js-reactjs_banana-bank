import React, { Component } from 'react';


class Konto extends Component{

    constructor(props) {
        super(props);

        this.state = {betrag: 0, kontostand: 0};
        this.betragChange = this.betragChange.bind(this);
        this.kontostandChange = this.kontostandChange.bind(this);
    }    

    kontostandChange(event) {
        this.setState({kontostand: event.target.value});
    }

    betragChange(event) {
        this.setState({betrag: event.target.value});
        console.log(this.state.betrag)
    }

    onAuszahlenClick = () => {
        this.setState({kontostand: parseInt(this.state.kontostand) - parseInt(this.state.betrag)});
        this.setState({betrag: 0});
    }

    onEinzahlenClick = () => {
        this.setState({kontostand: parseInt(this.state.kontostand) + parseInt(this.state.betrag)});
        this.setState({betrag: 0});
    }

    render() {
        return (
            <div className ="card">
                <h4 className = "card-header">Dein Girokonto</h4>
                <div className = "card-body">
                    <div className = "form-group">
                        <label htmlFor = "balance">Kontostand</label>
                        <input type="number" name="balance" value={this.state.kontostand} onChange={this.kontostandChange} id = "balance" className = "form-control" readOnly></input>
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "tranactionSum">Betrag</label>
                        <input type="number" name="transactionSum" value={this.state.betrag} onChange={this.betragChange} id = "transactionSum" className = "form-control"></input>
                    </div>
                    <button onClick={this.onAuszahlenClick} className = "btn btn-danger btn-block">Auszahlen</button>
                    <button onClick = {this.onEinzahlenClick} className = "btn btn-success btn-block">Einzahlen</button>
                </div>
            </div>
        );
    }

}

export default Konto;