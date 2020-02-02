import React from "react";
// import { compose } from "redux";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import ContainerTop from "./components/ContainerTop";
import ContainerBody from "./components/ContainerBody";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App(props) {
    const { classes } = props;

    return (
        <div className={classes.App}>
            <Header />
            <ContainerTop />
            <ContainerBody />
            <Footer />
        </div>
    );
}

export default withStyles(styles)(App);
