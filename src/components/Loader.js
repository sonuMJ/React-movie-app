import React, { Component } from 'react';
import imageSrc from '../img/ajax_loader.gif';
import './loader.css';

class Loader extends React.Component{
    render(){
        return(
            <div className="loader_image">
                <img src={ imageSrc } alt="loader"/>

            </div>
        )
    }
}

export default Loader;