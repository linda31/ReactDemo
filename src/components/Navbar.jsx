import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },

    menuItem: {
        display: "flex",
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },

    menuButton: {
        display: "none",
        [theme.breakpoints.down("xs")]: {
            display: "flex",
        },
    },

    link: {
        textDecoration: "none",
        color: "#ffffff",
    },
}));

export default function MenuAppBar() {
    const classes = useStyles();

    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Typography variant='h6' className={classes.title}>
                    React Demo
                </Typography>
                <Link to='/home' className={classes.link}>
                    <Button className={classes.menuItem} color='inherit'>
                        Home
                    </Button>
                </Link>

                <Link to='/notes' className={classes.link}>
                    <Button className={classes.menuItem} color='inherit'>
                        Notes
                    </Button>
                </Link>

                <Link to='/create-notes' className={classes.link}>
                    <Button className={classes.menuItem} color='inherit'>
                        Create Notes
                    </Button>
                </Link>

                <div>
                    <Link to='/user' className={classes.link}>
                        <IconButton color='inherit'>
                            <AccountCircle />
                        </IconButton>
                    </Link>
                </div>

                <IconButton className={classes.menuButton} color='inherit'>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
