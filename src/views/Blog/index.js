import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid, Link, Divider, Markdown } from '@material-ui/core';
import MainFeaturedPost from './MainFeaturedPost';
import MainContent from './MainContent';
import PostService from '../../services/postServie';
const styles = theme => ({
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  }
});


const archives = [
  'March 2020',
  'February 2020',
  'January 2020',
  'December 2019',
  'November 2019',
  'October 2019',
  'September 2019',
  'August 2019',
  'July 2019',
  'June 2019',
  'May 2019',
  'April 2019',
];

class Blog extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    const posts = PostService.getAllPost();
    this.setState({ posts });
  }

  handleClickPost = (post) => {
    this.props.history.push(`/post/${post.id}`)
  }

  render() {
    const {classes} = this.props;
    const { posts } = this.state;
    return (
      <main>
        {/* Main featured post */}
        {/* <MainFeaturedPost /> */}
        {/* End main featured post */}
        <Grid container spacing={5} className={classes.mainGrid}>
          {/* Main content */}
          <MainContent posts={posts} onClick={this.handleClickPost}/>
          {/* End main content */}
          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
              <Typography variant="h6" gutterBottom>
                About
                </Typography>
              <Typography>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </Typography>
            </Paper>
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
              Archives
              </Typography>
            {archives.map(archive => (
              <Link display="block" variant="body1" href="#" key={archive}>
                {archive}
              </Link>
            ))}
            {/* <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
            Social
              </Typography>
          {social.map(network => (
            <Link display="block" variant="body1" href="#" key={network}>
              {network}
            </Link>
          ))} */}
          </Grid>
          {/* End sidebar */}
        </Grid>
      </main>
    );
  }
}

export default withStyles(styles)(Blog);