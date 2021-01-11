import React, { Component } from 'react';
import "./Content.css";

export default class Content extends Component {
    render() {
        return (
            <div>
                
                <div className="row justify-content-center mt-5">
                    <div className="col-5 text-center">
                        <h3 className="display-4">Some Landing Page Name</h3>
                        <h1 className="bold">WELCOME TO BLAH BLAH</h1>
                    </div>
                </div>
                <div className="container text-center">
                    <hr />
                    <button className="btn btn-outline-dark btn-lg">Learn More</button>
                </div>
            </div>
        )
    }
}
