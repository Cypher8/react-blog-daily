import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import { amber, green } from '@material-ui/core/colors';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

const styles = theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
});

class Alert extends Component {

    componentWillUnmount(){
        if(this.dismissTimeoutId) clearTimeout(this.dismissTimeoutId)
    }
    render() {
        const { classes, className, message, onClose, OnDismiss, variant, visible, ...other } = this.props;
        const Icon = variantIcon[variant];
        if (!visible) {
            return null;
        }
        this.dismissTimeoutId = setTimeout(OnDismiss, 5000)
        return (
            <SnackbarContent
                className={clsx(classes[variant], className)}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar" className={classes.message}>
                        <Icon className={clsx(classes.icon, classes.iconVariant)} />
                        {message}
                    </span>
                }
                // action={[
                //     <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                //         <CloseIcon className={classes.icon} />
                //     </IconButton>,
                // ]}
                {...other}
            />
        );
    }
}

Alert.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};


export default withStyles(styles)(Alert);