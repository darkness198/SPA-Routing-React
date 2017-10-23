import React, { Component } from 'react';
import { addMovie } from '../Actions';
import { connect } from 'react-redux';
import { ListGroupItem, Grid, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AddMovie extends Component{
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        <Grid>
          <Col md={4}></Col>
          <Col md={4}>
            <ListGroupItem>Info</ListGroupItem>
          </Col>
          <Col md={4}></Col>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      movies: state.movies
  };
};

export default connect(mapStateToProps, { addMovie })(AddMovie);