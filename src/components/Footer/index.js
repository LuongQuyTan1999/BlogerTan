import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import styles from "./styles";
const Footer = props => {
    const { classes } = props;
    return (
        <div className={classes.footer}>
            <div className={classes.footerContent}>
                <Typography
                    className={classes.text}
                    variant="overline"
                    display="block"
                    gutterBottom
                >
                    CREATIVE TIM
                </Typography>
                <Typography
                    className={classes.text}
                    variant="overline"
                    display="block"
                    gutterBottom
                >
                    ABOUT US
                </Typography>
                <Typography
                    className={classes.text}
                    variant="overline"
                    display="block"
                    gutterBottom
                >
                    BLOG
                </Typography>
                <Typography
                    className={classes.text}
                    variant="overline"
                    display="block"
                    gutterBottom
                >
                    LICENESE
                </Typography>
            </div>
        </div>
    );
};
export default withStyles(styles)(Footer);
