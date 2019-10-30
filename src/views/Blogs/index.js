import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, Link } from '@material-ui/core';
import MainFeaturedPost from './MainFeaturedPost';
import MainContent from './MainContent';
import blogService from '../../services/blog.servie';

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

class Blogs extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    const posts = blogService.getAllPosts();
    this.setState({ posts });
  }

  handleClickPost = (post) => {
    this.props.history.push(`/post/${post.id}`)
  }

  render() {
    const { classes } = this.props;
    const { posts } = this.state;
    return (
      <main>
        {/* Main featured post */}
        <MainFeaturedPost />
        {/* End main featured post */}
        <Grid container spacing={5} className={classes.mainGrid}>
          {/* Main content */}
          <Grid item xs={12} md={9}>
            <MainContent posts={posts} onClick={this.handleClickPost} />
          </Grid>
          {/* End main content */}
          {/* Sidebar */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
              Archives
              </Typography>
            {archives.map(archive => (
              <Link display="block" variant="body1" href="#" key={archive}>
                {archive}
              </Link>
            ))}
          </Grid>
          {/* End sidebar */}
        </Grid>
      </main>
    );
  }
}

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

export default withStyles(styles)(Blogs);