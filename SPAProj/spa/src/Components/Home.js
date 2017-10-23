import React, { Component } from 'react';
import { getMovies } from '../Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component{
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getMovies();
  }
  render() {
    return (
      <div>
        
        {this.props.movies.map((movie, index) => {
          return (
            <Link key={index} style={{padding: 2}} to={`/movies/${movie.id}`}> {movie.title}</Link>
          );
        })}

        {<Link to='/movies/add-movie'> Add a Movie</Link>}
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      movies: state.movies
  };
};

export default connect(mapStateToProps, { getMovies })(Home);