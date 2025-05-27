import {useState} from "react";
import {submitAPI} from "../utils/api.js";

export default function BookingForm({availableTimes, dispatch}) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!date) newErrors.date = "Please select a date.";
        if (!time) newErrors.time = "Please select a time.";
        if (!guests || guests < 1 || guests > 10) newErrors.guests = "Please enter between 1 and 10 guests.";
        if (!occasion) newErrors.occasion = "Please select an occasion.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    async function onSubmit(event) {
        event.preventDefault();
        if (validateForm()) {
            setIsSubmitted(true);
            try{
                const form = {date,time,guests,occasion};
                const response = submitAPI(form);
                if (response) {
                    setSuccessMessage("Reservation made successfully!");
                    setDate('');
                    setTime('');
                    setGuests(1);
                    setOccasion('Birthday');
                    dispatch(new Date());
                    setTimeout(() => {
                        setSuccessMessage("");
                        setIsSubmitted(false);
                        setErrors({});

                    }, 2000);

                } else {
                    setErrors(["Error submitting form."]);
                }
                setIsSubmitted(false);
            }
            catch (error) {
                setErrors(["Error submitting form. Error "+error]);
            }
        }
        else {
            setIsSubmitted(false);
        }
    }


    async function onChangeDate(event) {
        const date = event.target.value;
        setDate(date);
        dispatch({action: 'update', date: date});
        setTime('');
    }

    return (
        <section className="booking-form">
            <form style={{display:"grid", maxWidth:"200px", gap:"20px"}} onSubmit={(event)=>{onSubmit(event)} }>
                <label htmlFor="res-date" className="booking-form-label">Choose Date</label>
                <input className="booking-form-date" type="date" id="res-date" name="res-date" required value={date} onChange={(event)=>onChangeDate(event)}  />
                <label htmlFor="res-time" className="booking-form-label">Choose Time</label>
                <select className="booking-form-input" id="res-time" name="res-time" required onChange={(event)=>setTime(event.target.value)} value={time}>
                    {availableTimes?.map((time, index) => {
                        return <option key={index} value={time}>{time}</option>
                    })}
                </select>
                <label className="booking-form-label" htmlFor="guests">Number of Guests</label>
                <input className="booking-form-date" type="number" placeholder={1} min={1} max={10} name="guests" id="guests" onChange={(event)=>setGuests(event.target.value)} value={guests}/>
                <label className="booking-form-label" htmlFor="occasion">Occasion</label>
                <select className="booking-form-input" id="occasion" name="occasion" required onChange={(event)=>setOccasion(event.target.value)} value={occasion}>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Other">Other</option>
                </select>
                <input type="submit" value="Make your reservation" className="submit-button" disabled={isSubmitted}/>
                {successMessage && <div className="success-message" role="status">{successMessage}</div>}
                {errors.time && <div className="error-message" role="alert">{errors.time}</div>}
            </form>
        </section>

    )
}