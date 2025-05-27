import restaurant from "../assets/icons_assets/restaurant.jpg";
import {HashLink} from "react-router-hash-link";
import {Grid} from "@mui/material";

export default function Footer() {
    return (
        <footer className="footer">
        <Grid container spacing={1} style={{ backgroundColor: '#f0f0f0', display:"flex", borderRadius:"inherit"}} direction={'row'} size={12} >
            <Grid item size={{xs:12, sm:3, md:3, lg:3,  xl:3}} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={restaurant} alt="restaurant" width="90%" />
            </Grid>
            <Grid item size={{xs:12, sm:3, md:3, lg:3,  xl:3}} style={{  justifyContent: 'center', alignItems: 'center' }}>
                <>
                    <h4>
                        Little
                        <br />
                        Lemon
                    </h4>
                    <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column' ,  alignItems: 'center', textAlign: 'center'}  }>
                        <li style={{ marginBottom: '10px' , fontSize:'12px'}}>
                            {" "}
                            <HashLink to="/">Home</HashLink>{" "}
                        </li>
                        <li style={{ marginBottom: '10px' , fontSize:'12px'}}>
                            {" "}
                            <HashLink to="/#">About</HashLink>{" "}
                        </li>
                        <li style={{ marginBottom: '10px' , fontSize:'12px'}}>
                            {" "}
                            <HashLink to="/booking">Bookings</HashLink>{" "}
                        </li>
                        <li style={{ marginBottom: '10px' , fontSize:'12px'}}>
                            {" "}
                            <HashLink to="/#">Contact</HashLink>{" "}
                        </li>
                        <li style={{ marginBottom: '10px' , fontSize:'12px'}}>
                            {" "}
                            <HashLink to="/#">Services</HashLink>{" "}
                        </li>
                    </ul>
                </>
            </Grid>
            <Grid item size={{xs:12, sm:3, md:3, lg:3,  xl:3}} justifyContent={'left'}>
                <h4>Contact:</h4>
                <p style={{ marginBottom: '10px' , fontSize:'12px'}}>Address: <br/>123 Main St,<br/> City, Country</p>
                <p style={{ marginBottom: '10px' , fontSize:'12px'}}>Phone: <br/>(123) 456-7890</p>
            </Grid>
            <Grid item size={{xs:12, sm:3, md:3, lg:3,  xl:3}} style={{  justifyContent: 'center', alignItems: 'center' }}>
                <h4>Follow Us:</h4>
                <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column' }}>
                    <li style={{ marginBottom: '10px' , fontSize:'12px'}}>
                        {" "}
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>{" "}
                    </li >
                    <li style={{ marginBottom: '10px' , fontSize:'12px'}}>
                        {" "}
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>{" "}
                    </li>
                    <li style={{ marginBottom: '10px' , fontSize:'12px'}}>
                        {" "}
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>{" "}
                    </li>
                </ul>
            </Grid>

        </Grid>
        </footer>
    );
}

