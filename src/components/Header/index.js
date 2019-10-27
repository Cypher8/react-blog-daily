import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router'
import { Toolbar, Button, Typography, IconButton, } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
const styles = theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    }
});


class Header extends Component {

    handleClick = () => {
        this.props.history.push("/");
    }
    render() {
        const { classes } = this.props;
        return (
            <Toolbar className={classes.toolbar}>
                <Button
                    size="small"
                    onClick={this.handleClick}>
                    Dialy Blog
                </Button>
                <div className={classes.toolbarTitle} />
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="outlined" size="small">
                    Sign up
                </Button>
            </Toolbar>
        );
    }
}

export default withStyles(styles)(withRouter(Header));