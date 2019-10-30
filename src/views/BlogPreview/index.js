import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Grid, Typography, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
const BlogPreview = ({ open, post, onClose }) => {
    const htmlMeta = draftToHtml(convertToRaw(post.editorState.getCurrentContent()));
    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                scroll='body'
                aria-labelledby="scroll-dialog-title"
                fullWidth
                maxWidth="md"
            >
                <DialogTitle id="scroll-dialog-title" style={styles.titleContainer}>
                    <IconButton aria-label="close" style={styles.closeButton} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Typography component="h2" variant="h5">
                                    {post.title}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img
                                    style={styles.image}
                                    src="https://source.unsplash.com/user/erondu"
                                    alt="background"
                                />
                            </Grid>
                            <Grid item>
                                <div dangerouslySetInnerHTML={{ __html: htmlMeta }} />
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}


const styles = {
    titleContainer: {
        height: 30
    },
    closeButton: {
        position: 'absolute',
        right: 7,
        top: 7,
    },
    image: {
        width: '100%',
        height: 300,
        objectFit: 'cover'
    },
}
export default BlogPreview;