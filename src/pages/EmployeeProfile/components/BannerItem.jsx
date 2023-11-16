//import
import { Avatar, Paper, Stack } from "@mui/material";
import "./style.css"

import Image from '../media/plant-banner.jpg'

export default function BannerItem() {

    const styles = {
        paperContainer: {
            backgroundImage: `url(${Image})`
        }
    }

    return (
        <div className="banner">
            <Paper style={styles.paperContainer} className="banner-paper">
                <Stack direction="row">
                    <Avatar alt="Avatar" sx={{ width: 100, height: 100, marginLeft: '80%', marginTop:'0.5%'}}/>
                </Stack>
            </Paper>
        </div>
    );
}