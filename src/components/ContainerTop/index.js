import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
const ContainerTop = props => {
    const { classes } = props;
    // const [itemTranslate, setItemTranslate] = useState(0);
    // let style = { transform: 'translateY(0px)'};
    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);
    // const handleScroll = event => {
    //     let scrollTop = event.srcElement.body.scrollTop;
    //     let itemTranslateA = Math.max(0, scrollTop + 1 * 60);
    //     setItemTranslate(itemTranslateA);
    // };
    return (
        <div className={classes.top} >
            <div className={classes.topContent}></div>
        </div>
    );
};
export default withStyles(styles)(ContainerTop);
