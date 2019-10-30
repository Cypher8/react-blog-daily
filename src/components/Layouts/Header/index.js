import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import { login, logout } from '../../../stores/user/actions';
import { clear } from '../../../stores/alert/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Toolbar, Button, IconButton, } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import LoginDialog from '../../LoginDialog';
import ProfileMenu from './ProfileMenu';

class Header extends Component {
    state = {
        isOpen: false,
        errorVisible: false,
    }
    componentDidUpdate(nextProps) {
        if (nextProps.user !== this.props.user) {
            this.handleCloseDialog();
        }

        if (nextProps.alert !== this.props.alert) {
            this.showAlert();
        }
    }
    navigateTo = (route) => {
        this.props.history.push(route);
    }
    handleOpenDialog = () => {
        this.setState({ isOpen: true });
    }
    handleCloseDialog = () => {
        this.setState({ isOpen: false });
    }
    handleSubmit = (data) => {
        this.props.login(data);
    }
    showAlert = () => {
        this.setState({ errorVisible: true });
    }
    hiddenAlert = () => {
        this.props.clear();
        this.setState({ errorVisible: false });
    }
    render() {
        const { classes, alert } = this.props;
        const { isOpen, errorVisible } = this.state;
        return (
            <React.Fragment>
                <Toolbar className={classes.toolbar}>
                    <Button
                        size="small"
                        onClick={() => this.navigateTo('/')}>
                        Daily Blog
                    </Button>
                    <div className={classes.toolbarTitle} />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    {/* Profile menu */}
                    <ProfileMenu onLogin={this.handleOpenDialog}/>
                    {/* End profile menu */}
                </Toolbar>
                <LoginDialog
                    open={isOpen}
                    onSubmit={this.handleSubmit}
                    onClose={this.handleCloseDialog}
                    errorVisible={errorVisible}
                    alert={alert}
                    OnDismiss={this.hiddenAlert} />
            </React.Fragment>
        );
    }
}

const styles = theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    button: {
        backgroundColor: '#fff',
        '&:hover': {
            border: '1px solid #eee',
            backgroundColor: '#1b1a20',
            color: '#fff'
        }
    }
});

const mapStateToProps = state => ({
    user: state.user.data,
    alert: state.alert
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        login,
        logout,
        clear
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(Header)));