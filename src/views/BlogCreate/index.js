import React, { Component } from 'react';
import { Grid, Typography, Container, TextField, Button } from "@material-ui/core";
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import './style.css';
import blogService from '../../services/blog.servie';
import BlogPreview from '../BlogPreview';

class BlogCreate extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        title: '',
        errors: {
            title: { isErr: false, message: '' },
            description: { isErr: false, message: '' }
        },
        open: false
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    }

    uploadImageCallBack = async (file) => {
        const res = blogService.uploadImage();
        return { data: { link: res } };
    }

    setErrorState = (property, state, message) => {
        this.setState((prev) => ({
            errors: { ...prev.errors, [property]: { isErr: state, message: message } }
        }));
    }

    isValidFiled = () => {
        const { title } = this.state;
        if (!title.trim()) {
            this.setErrorState('title', true, 'Title is required.');
            return false;
        } else {
            this.setErrorState('title', false, '');
        }
        return true;
    }


    handleSubmit = () => {
        if (this.isValidFiled()) {
            const { title, editorState } = this.state;
            const htmlMeta = draftToHtml(convertToRaw(editorState.getCurrentContent()));
            const data = { title, htmlMeta };
            const res = blogService.createNewBlog(data);
            if(res.message === 'success'){
                this.props.history.push('/');
            }
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleToggle = () => {
        this.setState((prev) => ({
            open: !prev.open
        }));
    }


    render() {
        const { editorState, errors, open, title } = this.state;
        const preview = { title, editorState };
        return (
            <Container maxWidth="md">
                <Grid container spacing={3} style={styles.root}>
                    <Grid item>
                        <Typography variant="h6">
                            Create a new blog
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="title"
                            label="Titile"
                            style={{ margin: 8 }}
                            placeholder="Please your enter title blog"
                            helperText={errors.title.message}
                            error={errors.title.isErr}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Editor
                            editorState={editorState}
                            wrapperClassName="custom-wrapper"
                            editorClassName="custom-editor"
                            toolbar={{
                                inline: { inDropdown: true },
                                list: { inDropdown: true },
                                textAlign: { inDropdown: true },
                                link: { inDropdown: true },
                                history: { inDropdown: true },
                                image: {
                                    uploadCallback: this.uploadImageCallBack,
                                    previewImage: true
                                }
                            }}
                            onEditorStateChange={this.onEditorStateChange}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        direction="row"
                        alignItems="flex-end"
                        justify="flex-end"
                        spacing={1}>
                        <Grid item>
                            <Button variant="contained" onClick={this.handleToggle} disabled={!title.trim()}>
                                Preview blog
                            </Button>
                            <BlogPreview open={open} post={preview} onClose={this.handleToggle} />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                                Create blog
                            </Button>
                        </Grid>
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

export default BlogCreate;