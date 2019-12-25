import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(4),
      },
    }));

export default function ArchiveList({archive}){
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClick = () => {
    setOpen(!open);
    };
    return(
        <List key={archive.date}>
            <ListItem button onClick={handleClick}>
                <ListItemText primary={`${archive.date} (${archive.posts.length})`} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {archive.posts.map((post)=>{
                    return (
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary={post} />
                            </ListItem>
                        </List>
                    );
                })}
            </Collapse>
        </List>
)
}


