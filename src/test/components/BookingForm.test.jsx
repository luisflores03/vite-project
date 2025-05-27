import BookingForm from "../../components/BookingForm.jsx";
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import { describe, it, expect,vi ,beforeEach,afterEach} from 'vitest';
import { HashRouter } from 'react-router-dom';

describe('BookingForm', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        vi.resetModules();
    });
    afterEach(()=>{
        // Cleanup after each test
        vi.clearAllMocks();
        cleanup()
    })
    it('renders BookingForm component', () => {
        const dispatchfn = vi.fn().mockReturnValue(['18:00', '19:00', '20:00']);
        render(
            <HashRouter>
                <BookingForm availableTimes={['18:00', '19:00', '20:00']} dispatch={dispatchfn} />
            </HashRouter>
        );

        expect(screen.getByText("Choose Time")).toBeDefined();
        expect(screen.getByLabelText("Choose Date")).toBeDefined();
        expect(screen.getByLabelText("Number of Guests")).toBeDefined();
        expect(screen.getByLabelText("Occasion")).toBeDefined();
        expect(screen.getByRole('button', { name: "Make your reservation", type:"submit"})).toBeDefined();
    });

    it('submits the form with correct values', () => {
        const dispatchfn = vi.fn().mockReturnValue(['18:00', '19:00', '20:00']);

        render(
            <HashRouter>
                <BookingForm availableTimes={['18:00', '19:00', '20:00']} dispatch={dispatchfn} />
            </HashRouter>
        );

        fireEvent.change(screen.getByLabelText("Choose Date"), { target: { value: '2023-10-01' } });
        fireEvent.change(screen.getByLabelText("Choose Time"), { target: { value: '19:00' } });
        fireEvent.change(screen.getByLabelText("Number of Guests"), { target: { value: '4' } });
        fireEvent.change(screen.getByLabelText("Occasion"), { target: { value: 'Birthday' } });
        fireEvent.click(screen.getByRole('button',  { name: "Make your reservation", type:"submit"}));
        expect(screen.getByText("Reservation made successfully!")).toBeDefined();
    });
});