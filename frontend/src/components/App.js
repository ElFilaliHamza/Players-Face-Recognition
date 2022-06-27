import React, { Component } from 'react';
import { render } from 'react-dom';
// import Welcome from './Welcome';
// import CreateForm from './CreateForm'
import Form from './Form';

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div className='myContainer'>
            <Form />
            
        </div>;
    }
} 

const appDiv = document.getElementById('appdiv')
render(<App /> , appDiv);


