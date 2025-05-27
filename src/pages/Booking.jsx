import BookingForm from "../components/BookingForm.jsx";
import {useReducer} from "react";
import {fetchAPI} from '../utils/api.js';


export default  function BookingPage() {
    function initializeTimes(){
        return fetchAPI(new Date());
    }

    function updateTimes(state,action) {
        if (action.action === 'update') {
            return fetchAPI(new Date(action.date));
        }
        else{
            return state;
        }
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());


    return (
        <div>
            <h1>Booking Page </h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </div>
    );
}