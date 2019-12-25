import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import ArchiveItem from './archiveItem';

import Typography from '@material-ui/core/Typography';
import { graphql, useStaticQuery} from 'gatsby';

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

export default function Archives(){

    const classes = useStyles();
    
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost {
                edges {
                node {
                    title
                    publishedDate (formatString: "MMMM YYYY")
                }
                }
            }
        }
    `)

    let archives = []
    let newArchive = {
        date: '',
        posts: []
    }
    let currentMonth = ''
    data.allContentfulBlogPost.edges.map((post)=>{
        if (!(currentMonth === post.node.publishedDate)) {
            currentMonth = post.node.publishedDate
            newArchive = {
                date: currentMonth,
                posts: []
            }
            archives.push(newArchive)
        }
        archives[archives.length-1].posts.push(post.node.title)
    })

    return(
        <div>
        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Archives
        </Typography>
        {
            archives.map((archive) => (
                <ArchiveItem key={archive} archive={archive} />
            ))
        }
        </div>
    )
}
