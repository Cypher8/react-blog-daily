import React from 'react';
import { Avatar } from '@material-ui/core';
const Button = ({ user, anchorRef, onToggle }) => {
    return (
        <div style={styles.container} onClick={onToggle} ref={anchorRef}>
            {
                user.avatar ?
                    <img src={user.avatar} style={styles.avatar} alt={`${user.firstName} ${user.lastName}`}/>
                    :
                    <Avatar style={styles.title}>{user.firstName[0]}</Avatar>
            }
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        cursor: 'pointer'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    title: {
        color: '#fff',
        backgroundColor: '#1b1a20'
    }
}

export default Button;