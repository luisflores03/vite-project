import HomePage from "../../pages/Home.jsx";
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HashRouter } from 'react-router-dom';

describe('HomePage', () => {
    it('renders Home Page component', () => {
        render(
            <HashRouter>
                <HomePage />
            </HashRouter>
        );

        expect(screen.getByText("Little Lemon")).toBeDefined(); // Assuming HomePage has this text
        expect(screen.getByText("Online Menu")).toBeDefined(); // Assuming HomePage has this text
    });
});