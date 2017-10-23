import React, { Component } from 'react';
import { getMovie } from '../Actions';
import { connect } from 'react-redux';
import { ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Movie extends Component{
  constructor() {
    super();
    //this.match = match;
    this.state = {
      didMount: false
    };
  }
  componentDidMount() {
    this.state.didMount = true;
    this.props.getMovie(this.props.match.params.id.toString());
    
  }
  showData = () => {
    if(this.state.didMount) {
      return(
        <div>
          <ListGroupItem><Link to='/movies'>Home</Link></ListGroupItem>
          <ListGroupItem>Title: {this.props.movie.title}</ListGroupItem>
          <ListGroupItem>Director: {this.props.movie.director}</ListGroupItem>
          <ListGroupItem>Metascore: {this.props.movie.metascore}</ListGroupItem>
          <ListGroupItem>Stars: {this.props.movie.stars.map((star) => {
            return star + ' ';
          })}</ListGroupItem>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {this.showData()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      movie: state.movie
  };
};

export default connect(mapStateToProps, { getMovie })(Movie);
