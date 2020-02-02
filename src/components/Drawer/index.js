import React, { useState } from "react";
import {
    withStyles,
    Button,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import styles from "./styles";

function DrawerComponent(props) {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });
    const { classes } = props;

    const toggleDrawer = (side, open) => event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [side]: open });
    };
    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <ListItem className={classes.mmmm}>
                    <TwitterIcon />
                </ListItem>
                <Divider />
                <ListItem className={classes.mmmm}>
                    <FacebookIcon />
                </ListItem>
                <Divider />
                <ListItem className={classes.mmmm}>
                    <InstagramIcon />
                </ListItem>
                <Divider />
            </List>
        </div>
    );
    return (
        <div>
            <Button onClick={toggleDrawer("right", true)}>
                <MenuIcon />
            </Button>
            <Drawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer("right", false)}
            >
                {sideList("right")}
            </Drawer>
        </div>
    );
}

export default withStyles(styles)(DrawerComponent);
