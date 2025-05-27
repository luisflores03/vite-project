import MarioAndAdrian from "../assets/icons_assets/Mario and Adrian A.jpg";
import {Grid} from "@mui/material";

export default function Header() {
    return (
        <header>
            <Grid container spacing={1} style={{ backgroundColor: '#f0f0f0', display:"flex", borderRadius:"inherit"}} direction={'row'} size={12} >
                <Grid item size={{xs:12, sm:8, md:8, lg:8,  xl:8}} style={{  justifyContent: 'left', alignItems: 'center', textAlign: 'left', paddingLeft: '20px' }}>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p style={{fontSize: "12px"}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button className={"generalButton"}>Reserve a Table</button>
                </Grid>
                <Grid item size={{xs:12, sm:4, md:4, lg:4,  xl:4}} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={MarioAndAdrian} alt="restaurant" width="90%" />
                </Grid>

            </Grid>
        </header>
    );
}