import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import './BookingConfirmation.css';

function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingId, name, email, mobile } = location.state;

  return (
    <Container className="booking-confirmation mt-5">
      <Card className="text-center">
        <Card.Header as="h2">Booking Confirmed!</Card.Header>
        <Card.Body>
          <Card.Text className="confirmation-details">
            <strong>Booking ID:</strong> {bookingId}
          </Card.Text>
          <Card.Text className="confirmation-details">
            <strong>Name:</strong> {name}
          </Card.Text>
          <Card.Text className="confirmation-details">
            <strong>Email:</strong> {email}
          </Card.Text>
          <Card.Text className="confirmation-details">
            <strong>Mobile:</strong> {mobile}
          </Card.Text>
          <Button variant="success" onClick={() => navigate('/')}>Go to Home</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default BookingConfirmation;