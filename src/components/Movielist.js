import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';


const SeriesListItem = ({series}) => (
    <li key={series.show.id}>
        <Link to={`/series/${series.show.id}`} >{series.show.name} </Link>
    </li>
)


class Movielist extends React.Component{

    render(){
        return(
            <div>
                <ul className="movielist">
                    {this.props.data.map(series => (

                            <SeriesListItem series={series} key={series.show.id}/>
                        
                    ))}
                </ul>
            </div>
        );
    }
}

export default Movielist;