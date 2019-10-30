import React from 'react';
import { Popper, Paper, Grow, ClickAwayListener } from '@material-ui/core';
const Menu = (props) => {
    const { open, anchorRef, children, onClose } = props;
    return (
        <Popper open={open} anchorEl={anchorRef.current} transition disablePortal style={{zIndex: 99999}}>
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                    <Paper id="menu-list-grow">
                        <ClickAwayListener onClickAway={onClose}>
                            <div>
                                {children}
                            </div>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    );
}

export default Menu;