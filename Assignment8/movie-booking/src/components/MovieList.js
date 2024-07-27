/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './MovieList.css';
const movies=[
    {id:1,name:'Kalki',image:'https://pbs.twimg.com/media/GDn05CVbYAAXW8m?format=jpg&name=4096x4096'},
    {id:2,name:'Mystic Falls',image:'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/01/Mystic-Falls-sign.jpg'},
    {id:2,name:'Galatic wars ',image:'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000077394/b1e94becd2ceec6fa7f2fe202d9923bb9deb10cefe00b784b2e413e0e6260110'},
    // {id:3,name:'Movie 3',image:'./images/movie3.jpg'},
    // {id:4,name:'Movie 4',image:'./images/movie4.jpg'},
    // {id:5,name:'Movie 5',image:'./images/movie5.jpg'},
    // {id:6,name:'Movie 6',image:'./images/movie6.jpg'},
    // {id:7,name:'Movie 7',image:'./images/movie7.jpg'},
]
export default function MovieList() {
  return (
    <Container className="movie-list py-5 px-5">
        <Row>
            {movies.map(movie=>(
                <Col key={movie.id} md={3} className='mb-4'>
                    <Card>
              <Card.Img variant="top" src={movie.image} />
              <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Link to={`/movie/${movie.id}`} className="btn btn-primary">View Details</Link>
              </Card.Body>
            </Card>
                </Col>
            ))}
        </Row>
    </Container>
  )
}
