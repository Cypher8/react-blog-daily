import React, { Component, createRef } from 'react';
import { Grid, Divider, List, ListItem, ListItemText, Button as ButtonMat } from '@material-ui/core';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../../../stores/user/actions';
import Button from './Button';
import Menu from './Menu';

class ProfileMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
        this.anchorRef = createRef(null);
        this.prevOpen = null;
    }

    UNSAFE_componentWillMount() {
        this.handleUseEffect();
    }

    handleUseEffect = () => {
        const { open } = this.state;
        this.prevOpen = createRef(open);
        if (this.prevOpen.current === true && open === false) {
            this.anchorRef.current.focus();
        }
        this.prevOpen.current = open;
    }

    setOpen = (state) => {
        this.setState({ open: state }, this.handleUseEffect);
    }

    navigateTo = (route) => {
        this.props.history.push(route);
        this.setOpen(false);
    }

    handleToggle = () => {
        this.setOpen(!this.state.open);
    }

    handleLogout = () => {
        this.props.logout();
        this.setOpen(false);
    }

    handleSelectMenu = (op) => {
        this.setOpen(false);
    }

    handleClose = (event) => {
        if (this.anchorRef.current && this.anchorRef.current.contains(event.target)) {
            return;
        }
        this.setOpen(false);
    }

    render() {
        const { user, onLogin } = this.props;
        const { open } = this.state;
        return (
            <div>
                {
                    user.authenticated ?
                        <div>
                            <Button user={user} onToggle={this.handleToggle} anchorRef={this.anchorRef} />
                            <Menu
                                open={open}
                                anchorRef={this.anchorRef}
                                onClose={this.handleClose}
                            >
                                <div style={{ padding: 15 }}>
                                    <Grid container>
                                        <Grid item>
                                            <p>{user.firstName} {user.lastName}</p>
                                        </Grid>
                                    </Grid>
                                </div>
                                <Divider />
                                <List component="nav" aria-label="secondary mailbox folders">
                                    <ListItem button onClick={() => this.navigateTo('/blog-create')}>
                                        <ListItemText primary="New blog" />
                                    </ListItem>
                                    {/* <ListItem button onClick={() => this.navigateTo('/blogs')}>
                                        <ListItemText primary="My blogs" />
                                    </ListItem> */}
                                    <ListItem button onClick={() => this.navigateTo('/')}>
                                        <ListItemText primary="Profile" />
                                    </ListItem>
                                    {/* <ListItem button onClick={this.handleSelectMenu}>
                                        <ListItemText primary="Setting" />
                                    </ListItem> */}
                                    <ListItem button onClick={this.handleLogout}>
                                        <ListItemText primary="Logout" />
                                    </ListItem>
                                </List>
                            </Menu>
                        </div>
                        :
                        <ButtonMat
                            style={styles.button}
                            variant="outlined"
                            size="small"
                            onClick={onLogin}>
                            Login
                        </ButtonMat>
                }
            </div>
        );
    }
}

const styles = {
    button: {
        backgroundColor: '#fff',
        '&:hover': {
            border: '1px solid #eee',
            backgroundColor: '#1b1a20',
            color: '#fff'
        }
    }
};

const mapStateToProps = state => ({
    user: state.user.data
})

export default connect(mapStateToProps, { logout })(withRouter(ProfileMenu));