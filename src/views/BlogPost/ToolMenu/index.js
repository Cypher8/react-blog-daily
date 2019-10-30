import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const ToolMenus = ({ onEdit, onDelete }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClickListItem = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (callback) => {
        if(!!callback){
            callback()
        }
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <IconButton onClick={handleClickListItem}>
                <EditIcon />
            </IconButton>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => handleMenuItemClick(onEdit)}
                >
                    Edit
                </MenuItem>
                <MenuItem
                    onClick={() => handleMenuItemClick(onDelete)}
                >
                    Delete
                </MenuItem>
            </Menu>
        </div>
    );
}

export default ToolMenus;