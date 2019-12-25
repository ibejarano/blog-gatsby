import React from "react";
// import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BlogPreview from './blog';

import Archives from '../components/archives';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

const social = [{ title: 'GitHub', url: 'https://github.com/ibejarano' },
{ title: 'Twitter', url: 'https://twitter.com/IgnacioBejara13' },
{ title: 'Facebook', url: 'https://www.facebook.com/ignaciobejarano' },
{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/ignacio-sebasti%C3%A1n-bejarano-45287012b/' }];

export default function IndexPage() {

  const classes = useStyles();

  return (
    <Layout>
      <Head title="Home" />
      <main>
        {/* Main featured post */}
        <Paper className={classes.mainFeaturedPost}>
          {/* Increase the priority of the hero background image */}
          {
            <img
              style={{ display: 'none' }}
              src="https://source.unsplash.com/user/erondu"
              alt="background"
            />
          }
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  Title of a longer featured blog post
        </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  Multiple lines of text that form the lede, informing new readers quickly and
                  efficiently about what&apos;s most interesting in this post&apos;s contents.
        </Typography>
                <Link variant="subtitle1" href="#">
                  Continue reading…
        </Link>
              </div>
            </Grid>
          </Grid>
        </Paper>
        {/*  insertar Blog Component Aca (renombrar a preview) */}
        <Grid container spacing={5} className={classes.mainGrid}>
          {/* Main content */}
          <BlogPreview />
          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
              <Typography variant="h6" gutterBottom>
                Sobre mi
      </Typography>
              <Typography>
                Me llamo Ignacio Bejarano, ingeniero mecanico de la UBA, actualmente transicionando hacia el desarrollo Web.
                Escribo este blog porque soy apasionado por lo temas de actualidad y se me ocurren ideas constantemente sobre las que puedo escribir.
                Con estas premisas he resuelto crear un blog para expresarme de manera digital.
      </Typography>
            </Paper>

            <Archives />

            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
              Social
    </Typography>
            {social.map(network => (
              <Link display="block" variant="body1" href={network.url} key={network.title}>
                {network.title}
              </Link>
            ))}
          </Grid>
          {/* End sidebar */}
        </Grid>
      </main>
    </Layout>
  )
}