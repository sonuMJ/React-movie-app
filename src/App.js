import React, { Component } from 'react';
import logo from './logo.svg';
import goldenstar from './img/golden_star.svg';
import './App.css';
import Movielist from './components/Movielist';
import Loader from './components/Loader';
import { Link } from 'react-router-dom';
import Header from './components/Header';

class App extends Component {
  state ={
    series:[],
    seriesName:'',
    isFetching:false,
    fullseries:[]
  }

  onSeriesInputChange(e){
    this.setState({seriesName: e.target.value , isFetching:true });
    e.preventDefault();

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
    .then(res => res.json())
    .then(data => this.setState({ series:data ,isFetching : false}))
  }

  componentDidMount(){
    fetch(`http://api.tvmaze.com/shows`)
    .then(res => res.json())
    .then(data => {this.setState({ fullseries : data })})
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="searchbar">
            <input type="text" value={this.state.seriesName} className="form-control" placeholder="Search movie" onChange={ this.onSeriesInputChange.bind(this) }/>
          </div>
        </div>
        <div className="movielist_error">
              {
                this.state.series.length === 0 && this.state.seriesName.trim() === ''
                &&
                <h3>Please enter series name </h3>
              }
              {
                this.state.series.length === 0 && this.state.seriesName.trim() !== ''
                &&
                <h3>No movie found!</h3>
              }
              {
                this.state.isFetching && <Loader />
              }
              {
                !this.state.isFetching && <Movielist data={ this.state.series }/>
              }
        </div>
        <div className="list_movies">
          {/* movies http://api.tvmaze.com/shows */}
          
          <div className="container-fluid">
            
          {
            Object.keys(this.state.fullseries).map(key => (
              <MovieList movies={ this.state.fullseries[key] } key={this.state.fullseries[key].id}/>
            )
            )
          }
          </div>
        </div>
      </div>
    );
  }
}

const MovieList = (movies) =>{
  return(
    <div className="col-lg-2 movielist_temp">
    <img src={movies.movies.image.medium} width="150" alt="not found"/>
    <h3 title={movies.movies.name}>
    {/* {movies.movies.name} */}
      {
        movies.movies.name.length < 20 ? `${movies.movies.name}` : `${movies.movies.name.substring(0,20)}...`
      }
    </h3>
    <h4><img src={goldenstar} width="50"/>Rating : {movies.movies.rating.average}</h4>
    <Link to={`/series/${movies.movies.id}`}  className="movie_view_btn"><button className="btn btn-success btn-block" >View</button></Link>
  </div>
  );
}

function viewmovie(){

}

export default App;
