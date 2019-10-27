import React, { Component } from 'react';
import { DialogTitle, DialogContent, IconButton, Slide, Dialog, Button, Grid, TextField, Container, FormControlLabel, Checkbox } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class LoginDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    handleChange = event => {
        this.setState({ isChecked: event.target.checked });
    }
    render() {
        const { open, onClose } = this.props;
        const { isChecked } = this.state;
        return (
            <React.Fragment>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    onClose={onClose}
                >
                    <div style={styles.titleContainer}>
                        <IconButton aria-label="close" style={styles.closeButton} onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <DialogContent>
                        <Container>
                            <Grid container>
                                <h2>Shoes store</h2>
                            </Grid>
                            <Grid container direction="column" alignItems="center">
                                <Grid item sm={12}>
                                    <TextField
                                        id="outlined-email-input"
                                        label="Email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        margin="dense"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        name="password"
                                        margin="dense"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container direction="column">
                                <Grid>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={isChecked}
                                                onChange={this.handleChange}
                                                value="checked"
                                                color="primary"
                                            />
                                        }
                                        label="ให้ฉันอยู่ในระบบต่อไป"
                                    />
                                </Grid>
                                <Grid item>
                                    <p>ลืมรหัสผ่านใช่ไหม</p>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Button style={styles.login}>
                                    Login
                                </Button>
                            </Grid>
                        </Container>
                    </DialogContent>
                </Dialog>
            </React.Fragment>
        );
    }
}

const styles = {
    titleContainer:{
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