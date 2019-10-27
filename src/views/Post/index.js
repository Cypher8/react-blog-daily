import React, { Component } from 'react';
import { Grid, Typography, Container } from "@material-ui/core";
import PostService from '../../services/postServie';
class Post extends Component {
    state = {
        post: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            this.setState({ id }, this.getPost);

        } else {
            this.props.history.goBack();
        }
    }

    getPost = () => {
        const { id } = this.state;
        const post = PostService.getPostById(id);
        this.setState({ post });
    }

    render() {
        const { post } = this.state;
        if (!post) {
            return null;
        }
        return (
            <Container maxWidth="md">
                <Grid style={styles.root}>
                    <Grid>
                        <Typography component="h2" variant="h5">
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {post.description}
                        </Typography>
                    </Grid>
                    <Grid>
                        <img
                            style={styles.image}
                            src="https://source.unsplash.com/user/erondu"
                            alt="background"
                        />
                    </Grid>
                    
                </Grid>
            </Container>
        );
    }
}

const styles = {
    root: {
        marginTop: 20
    },
    image: {
        width: '100%',
        height: 300,
        objectFit: 'cover'
    }
}

export default Post;