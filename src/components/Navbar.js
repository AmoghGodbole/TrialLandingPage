import React, { Component } from 'react';
import "./Navbar.css";

export default class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            query: ""
        }
    }

    handleChange  = (evt) =>{
        this.setState({
            [evt.target.name]: evt.target.value 
        });
    }

    handleSubmit = (evt) =>{
        // This does nothing right now, but this is how you handle forms in react
        evt.preventDefault();
        this.setState({
            query: ""
        });
    }

    render() {
        return (
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="btn navbar-brand" href="#">BrandName</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="btn nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn nav-link" href="#">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn nav-link" href="#">Contact</a>
                            </li>
                        </ul>

                        <form className="d-flex ml-auto" onSubmit={this.handleSubmit}>
                            <input 
                                className="form-control-lg mr-3 mt-1 shadow-lg" 
                                type="search" 
                                placeholder="Search"
                                name="query" 
                                onChange={this.handleChange} 
                                value={this.state.query}
                            />
                            <button className="btn" type="submit"><i class="fas fa-search"></i></button>
                        </form>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
