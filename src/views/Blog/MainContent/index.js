import React, { Component } from 'react';
import { Paper, Grid, Typography, Divider, CardActionArea, Card, CardContent, Hidden, CardMedia, } from '@material-ui/core';
import Markdown from '../MarkDown';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
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
    title: {
        paddingBottom: 20
    }
});

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { classes, posts } = this.props;
        return (
            <Grid item xs={12} md={8}>
                <Grid className={classes.title}>
                    <Typography variant="h5" gutterBottom>
                        My Dialy
                    </Typography>
                </Grid>
                {/* <Divider /> */}
                <Grid container spacing={2}>
                    {posts.map((post, index) => (
                        <Grid item key={post.title} xs={12} md={12} onClick={() => this.props.onClick(post)}>
                            <CardActionArea>
                                <Card className={classes.card} >
                                    <div className={classes.cardDetails}>
                                        <CardContent>
                                            <Typography component="h2" variant="h5">
                                                Day {index}: {post.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {post.date}
                                            </Typography>
                                            <Typography variant="subtitle1" paragraph>
                                                {post.description}
                                            </Typography>
                                            {/* <Typography variant="subtitle1" color="primary">
                                                Continue reading...
                                                </Typography> */}
                                        </CardContent>
                                    </div>
                                    <Hidden xsDown>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://source.unsplash.com/random"
                                            title="Image title"
                                        />
                                    </Hidden>
                                </Card>
                            </CardActionArea>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(MainContent);