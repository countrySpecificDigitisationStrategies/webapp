import React from 'react';
import '../styles/login.css';
import { TextField } from '@material-ui/core';
import { AppBar, Toolbar, IconButton, Typography, Fab, MenuList, MenuItem } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Login() {
    let passwordRef = '';
    let userNameRef = '';

    const handleSubmit = event => {
        event.preventDefault();
        if (passwordRef.value == undefined || passwordRef.value === '') {
            alert('To login you need to input your password');
        } else {
            alert('Your have logged in as : ' + userNameRef.value);
            console.log('Given password is: ' + passwordRef.value);
        }
    };

    return (
        <div className="loginPage">
            <div className="navBar">
                <AppBar position="fixed" style={{ background: '#F2994A' }}>
                    <Toolbar>
                        <IconButton edge="start" className="MenuIconButton" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className="navBarText">
                            Enter Your Account
                        </Typography>
                        <IconButton
                            edge="start"
                            className="SearchiconButton"
                            style={{ left: '80%' }}
                            color="inherit"
                            aria-label="menu"
                        >
                            <SearchIcon />
                        </IconButton>
                        <IconButton
                            edge="start"
                            className="FavoriteIconIconButton"
                            style={{ left: '74%' }}
                            color="inherit"
                            aria-label="menu"
                        >
                            <FavoriteIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </div>

            <div className="loginForm">
                <form>
                    <TextField
                        inputRef={input => (userNameRef = input)}
                        id="username"
                        className="username"
                        label="Username"
                        margin="normal"
                    />

                    <br />

                    <TextField
                        inputRef={input => (passwordRef = input)}
                        id="password"
                        className="password"
                        label="Password"
                        margin="normal"
                        type="password"
                    />
                    <br />

                    <Fab
                        type="submit"
                        variant="extended"
                        size="large"
                        style={{
                            borderRadius: 35,
                            backgroundColor: '#F2994A',
                            padding: '0 36px',
                            marginTop: '10%',
                            marginLeft: '17%',
                        }}
                        onClick={handleSubmit}
                    >
                        LOGIN
                    </Fab>
                </form>
            </div>
        </div>
    );
}
