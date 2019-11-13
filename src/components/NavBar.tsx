import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = () => {
    return makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));
};

export default function ButtonAppBar(): JSX.Element {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        Digitisation Strategies
                    </Typography>

                    <Button color="inherit">Login</Button>
                    <Button color="secondary" variant="outlined">
                        Sign Up
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
