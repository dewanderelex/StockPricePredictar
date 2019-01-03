import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props);

        this.state = {
            url : 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + this.props.symbol + 
            '&interval=5min&outputsize=full&apikey=G4PTCOL5F6R1SMMK',
            data: null
        }
    }

    dataFlow = (url) => {
        return fetch (url)
            .then(response => response.json())
            .then(response => JSON.stringify(response))
            .catch(error => console.log(error.message))
    }

    componentDidMount(){
        this.setState({data: this.dataFlow(this.state.url)})
        console.log(this.dataFlow(this.state.url))
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Form;