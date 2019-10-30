import React, { Component } from 'react';
import { DialogContent, IconButton, Slide, Dialog, Button, Grid, TextField, Container, Typography, Link } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import Alert from '../Alert';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class LoginDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = property => event => {
        this.setState({ [property]: event.target.value });
    }
    handleSubmit = () => {
        const { email, password } = this.state;
        if (email.trim() && password.trim())
            this.props.onSubmit({ email, password })
    }
    propsTextField = (type) => ({
        id: `outlined-${type}-input`,
        label: type,
        type: type,
        name: type,
        margin: "dense",
        variant: "outlined",
    })

    render() {
        const { open, onClose, errorVisible, alert, OnDismiss } = this.props;
        const girdColCenter = {
            container: true,
            direction: "column",
            justify: "center",
            alignItems: "center",
        }
        return (
            <React.Fragment>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    onClose={onClose}
                    fullWidth
                >
                    <div style={styles.titleContainer}>
                        <IconButton aria-label="close" style={styles.closeButton} onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <DialogContent>
                        <Container>
                            <Grid
                                {...girdColCenter}
                                spacing={2}>
                                <Grid
                                    {...girdColCenter}
                                    item
                                    md={8}>
                                    <Typography variant="h6">
                                        Welcome to Daily Blog
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
                                        Login to get personalized story recommendations, follow authors and topics you love, and interact with stories.
                                    </Typography>
                                </Grid>
                                <Grid
                                    {...girdColCenter}
                                    item
                                    md={8}
                                >
                                    <Grid item>
                                        <TextField
                                            {...this.propsTextField('email')}
                                            autoComplete='email'
                                            onChange={this.handleChange('email')}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            {...this.propsTextField('password')}
                                            onChange={this.handleChange('password')}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid
                                    {...girdColCenter}
                                    item
                                    md={10}>
                                    <Alert
                                        visible={errorVisible}
                                        variant={alert.type}
                                        message={alert.message}
                                        OnDismiss={OnDismiss} />
                                </Grid>
                                <Grid item md={8}>
                                    <Link
                                        color="inherit"
                                        component="button"
                                        variant="body2"
                                    >
                                        ลืมรหัสผ่านใช่ไหม
                                    </Link>
                                </Grid>
                                <Grid item md={8} container>
                                    <Button
                                        style={styles.login}
                                        fullWidth
                                        onClick={this.handleSubmit}>
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </DialogContent>
                </Dialog>
            </React.Fragment>
        );
    }
}

const styles = {
    titleContainer: {
        height: 50
    },
    closeButton: {
        position: 'absolute',
        right: 7,
        top: 7,
    },
    login: {
        backgroundColor: '#1b1a20',
        color: '#fff',
        width: '100%'
    }
}

export default LoginDialog;