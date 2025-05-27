import { Grid} from "@mui/material";
import SpecialsCard from "./SpecialsCard.jsx";
import greekSalad from "../assets/icons_assets/greek salad.jpg";
import lemonDessert from "../assets/icons_assets/lemon dessert.jpg";
import bruchetta from "../assets/icons_assets/bruchetta.svg";

export default function CallToAction() {
    return (
        <div className="call-to-action">
            <container style={{  borderRadius:"inherit", padding: '20px' }}>
                <Grid container spacing={1} style={{ backgroundColor: '#f0f0f0', display:"flex", borderRadius:"inherit"}} direction={'row'} size={12} >
                    <Grid item size={{xs:12, sm:8, md:8, lg:8,  xl:8}} style={{  justifyContent: 'left', alignItems: 'center', textAlign: 'left', paddingLeft: '20px' }}>
                        <h2>Specials</h2>
                    </Grid>
                    <Grid item size={{xs:12, sm:4, md:4, lg:4,  xl:4}} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button className={"generalButton"} >
                            Online Menu
                        </button>
                    </Grid>
                </Grid>
                <Grid container spacing={1} style={{ backgroundColor: '#f0f0f0', display:"flex", borderRadius:"inherit"}} direction={'row'} size={12} >
                    <Grid item size={{xs:12, sm:4, md:4, lg:4,  xl:4}} spacing={1} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <SpecialsCard special={{image: greekSalad, title: 'Greek Salad', description: 'Greek Salad', price: 10}} />
                    </Grid>
                    <Grid item size={{xs:12, sm:4, md:4, lg:4,  xl:4}} spacing={1} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <SpecialsCard special={{image: lemonDessert, title: 'Lemon Dessert', description: 'Lemon Dessert', price: 10}} />
                    </Grid>
                    <Grid item size={{xs:12, sm:4, md:4, lg:4,  xl:4}} spacing={1} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <SpecialsCard special={{image: bruchetta, title: 'Bruchetta', description: 'Bruchetta', price: 10}} />
                    </Grid>
                </Grid>
            </container>

        </div>
    );
}