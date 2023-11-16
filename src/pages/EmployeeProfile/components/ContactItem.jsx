//imports
import { Stack, Typography } from "@mui/material";
import "./style.css"

export default function ContactItem({contact}) {
    return (
        <div className="component">
            <h2>Contact</h2>
            <Stack direction="row"  columnGap={8} sx={{justifyContent: 'center'}} className="contact">
                <Typography variant="body1" component="a" href={'tel:'+contact.phone}>{contact.phone}</Typography>
                <Typography variant="body1" component="a" href={'mailto:'+contact.email}>{contact.email}</Typography>
                <Typography variant="body1">{contact.address}</Typography>
            </Stack>
        </div>
    );
}