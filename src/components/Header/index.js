import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import {
    Grid,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import DrawerComponent from "../../components/Drawer";
const Header = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.rootContent}>
                <Toolbar className={classes.toolbar}>
                    <Typography
                        variant="button"
                        display="block"
                        gutterBottom
                        className={classes.title}
                    >
                        Blog By Quy Tan
                    </Typography>
                    <IconButton
                        edge="start"
                        className={classes.menuDraw}
                        color="inherit"
                        aria-label="menu"
                    >
                        <DrawerComponent />
                    </IconButton>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <a
                            href="https://www.instagram.com/luongquytan/"
                            target="_blank"
                            className={classes.link}
                        >
                            <TwitterIcon />
                        </a>
                    </IconButton>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <a
                            href="https://www.instagram.com/luongquytan/"
                            target="_blank"
                            className={classes.link}
                        >
                            <InstagramIcon />
                        </a>
                    </IconButton>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <a
                            href="https://www.facebook.com/profile.php?id=100007401436748"
                            target="_blank"
                            className={classes.link}
                        >
                            <FacebookIcon />
                        </a>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default withStyles(styles)(Header);
