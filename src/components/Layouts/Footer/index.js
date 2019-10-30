import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Container, Typography, Link } from '@material-ui/core';

const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: 'auto',
        padding: theme.spacing(6, 0),
    },
});

class Footer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <footer className={classes.footer}>
                <Container maxWidth="lg">
                    <Typography variant="h6" align="center" gutterBottom>
                        It's your story
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Write something that will tell your story.
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center">
                        {'Copyright © '}
                        <Link color="inherit" href="https://material-ui.com/">
                            Your Website
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Container>
            </footer>
        );
    }
}

export default withStyles(styles)(Footer);