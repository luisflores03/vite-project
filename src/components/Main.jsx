import HomePage from '../pages/Home.jsx';
import BookingPage from '../pages/Booking.jsx';
import {Route, Routes} from 'react-router-dom';

export default function Main() {
    return (
        <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/bookings" element={<BookingPage/>} />
        </Routes>
        </main>
    );
}