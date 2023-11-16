//imports
import { PropTypes } from "prop-types";
import "./style.css"
import { List, ListItem, ListItemText } from "@mui/material";

function renderList(list){
    return list.map(el => {
        return (
            <ListItem key={el.uid}>
                <ListItemText primary={el.prmry} secondary={el.scndry} key={el.uid} className="list-item-text"/>
            </ListItem>
        )
    })
}

export default function OverviewItem({title, list}) {
    return (
        <div className="component">
            <h2>{title}</h2>

            <List sx={{ width: '100%' }}>
                    {renderList(list)}
            </List>
        </div>
    )
}

OverviewItem.propTypes = {
    title: PropTypes.string
  };