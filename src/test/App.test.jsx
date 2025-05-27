// src/test/App.test.jsx
import App from '../App';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

describe('App', () => {
    it('renders Navigation, Main, and Footer components', () => {
        render(
            <HashRouter>
                <App />
            </HashRouter>
        );

        // Adjust the text below to match what is rendered by your components
        expect(screen.getByText("Little Lemon")).toBeDefined();
        expect(screen.getAllByText("Home")[0]).toBeDefined();
        expect(screen.getByText("Bookings")).toBeDefined();
        expect(screen.getByText("Follow Us:")).toBeDefined();
    });
});