import React, { Component } from 'react';
import { render } from 'react-dom';

class Welcome extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div className="w-full bg-black text-white flex flex-col justify-center items-center">
        {/* <img className="w-full" src={bg} alt="welcome bg"/> */}
        <div>
            text
        </div>
    </div>;
    }
} 

export default Welcome;