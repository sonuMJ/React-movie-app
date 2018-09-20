import React from 'react';
import logo from '../logo.svg';
import Loader from './Loader';
import Header from './Header';
import TvIcon from '../img/tv.svg';

class Singleseries extends React.Component{

    state = {
        show : null
    }
    
    componentDidMount(){

        const { id } = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then(res => res.json())
        .then(data => this.setState({ show : data}))
    }
    
    render(){
        return(
            <div>
                <Header />
               { 
                    this.state.show === null && <Loader />
               }
               {
                   this.state.show !== null 
                   &&
                   <div className="container">
                       <h1>{this.state.show.name}</h1>
                       {
                           this.state.show.image !== null && <img src={this.state.show.image.medium} />
                       }
                       {
                           this.state.show.image === null && <img alt="not found"  />
                       }
                       
                       <h4><i>Genres : {this.state.show.genres.toString()}</i></h4>
                       <h4><i>{this.state.show.language}</i></h4>
                       <a target="_blank" href={this.state.show.officialSite}><img src={TvIcon} width="50"/></a>
                       <div><p dangerouslySetInnerHTML={{__html: this.state.show.summary}}></p></div>
                   </div> 
                   
               }
               {
                   console.log(this.state.show)
               }
            </div>
        );
    }
    
}

export default Singleseries;