import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      nested: {
        paddingLeft: theme.spacing(4),
      },
    }));


const archives = [
    {
        date:'March 2020',
        posts: [
            'Erase una vez...truz',
            'Maniana termina la tesis',
            'da manha'
        ]
    },
    {
        date: 'February 2020',
        posts: [ 'Alguna vez quizas sea posible',
        'maniana jamas termina'
        ]
    }    
    ];

export default function Archives(){

    const classes = useStyles();



    return(
        <div>
        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Archives
        </Typography>
        {
            archives.map((archive) => {
                const [open, setOpen] = React.useState(false);

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
            })
        }
        </div>
    )
}
