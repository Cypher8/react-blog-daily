import React, { Component } from 'react';
import { Grid, Typography, Container } from "@material-ui/core";
import blogService from '../../services/blog.servie';
import ToolMenus from './ToolMenu';
import { Can } from '../../components';
import { connect } from 'react-redux';
class BlogPost extends Component {
    state = {
        id: this.props.match.params.id || '',
        post: null
    }
    componentDidMount() {
        this.getPost();
    }

    getPost = () => {
        const { id } = this.state;
        const post = blogService.getPostById(id);
        this.setState({ post });
    }

    handleEdit = () => {
        this.props.history.push(`/blog-edit/${this.state.id}`)
    }

    handleDelete = () => {
        const res = blogService.deleteBlog(this.state.id);
        if(res.message === 'success'){
            this.props.history.push('/');
        }
    }

    render() {
        const { post } = this.state;
        const { user } = this.props;
        if (!post) {
            return null;
        }
        return (
            <Container maxWidth="md">
                <Grid container style={styles.root} spacing={2}>
                    <Grid container direction="row">
                        <Grid item md={11} xs={10}>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                                Post by {post.user.firstName}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                                On {post.createAt}
                            </Typography>
                        </Grid>
                        <Grid item md={1} xs={2}>
                            <Can
                                role={user.role}
                                perform="post:edit"
                                data={{
                                    userId: user.id,
                                    postOwnerId: post.user.id
                                }}
                                yes={() => (
                                    <ToolMenus onEdit={this.handleEdit} onDelete={this.handleDelete} />
                                )}
                                no={() => null}
                            />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <img
                            style={styles.image}
                            src="https://source.unsplash.com/user/erondu"
                            alt="background"
                        />
                    </Grid>
                    <Grid item>
                        <div dangerouslySetInnerHTML={{ __html: post.htmlMeta }} />
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

const mapStateToProps = state => ({
    user: state.user.data
})

export default connect(mapStateToProps, {})(BlogPost);