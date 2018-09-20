import React from 'react';
import '../App.css';
import logo from '../logo.svg';

class Header extends React.Component{
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Movies</h1>
                </header>
            </div>
        );
    }
}

export default Header;