import BookingPage from "../../pages/Booking.jsx";
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HashRouter } from 'react-router-dom';

describe('BookingPage', () => {
    it('renders BookingForm component', () => {
        render(
            <HashRouter>
                <BookingPage />
            </HashRouter>
        );

        // Adjust the text below to match what is rendered by your BookingForm component
        expect(screen.getByText("Booking Page")).toBeDefined();
        expect(screen.getByText("Choose Time")).toBeDefined(); // Assuming BookingForm has this text
    });
});