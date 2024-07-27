import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Book Your Favourite Movie</h1>
        </header>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/book/:id" element={<BookingForm />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;