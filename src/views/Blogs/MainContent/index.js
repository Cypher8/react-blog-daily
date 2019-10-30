import React, { Component } from 'react';
import { Grid, Typography, CardActionArea, Card, CardContent, Hidden, CardMedia, } from '@material-ui/core';
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
        height: 128
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
            <Grid item xs={12}>
                <Grid className={classes.title}>
                    <Typography variant="h5" gutterBottom>
                        My Daily
                    </Typography>
                </Grid>
                {/* <Divider /> */}
                <Grid container spacing={2}>
                    {posts.map((post) => (
                        <Grid item key={post.id} xs={12} md={12} onClick={() => this.props.onClick(post)}>
                            <CardActionArea>
                                <Card className={classes.card} >
                                    <div className={classes.cardDetails}>
                                        <CardContent>
                                            <Typography component="h2" variant="h5">
                                                {post.title}
                                            </Typography>
                                            <Typography variant="subtitle2" color="textSecondary">
                                                Post by {post.user.firstName}
                                            </Typography>
                                            <Typography variant="subtitle2" color="textSecondary">
                                                On {post.createAt}
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