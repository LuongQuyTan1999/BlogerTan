const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "rgba(0,0,0,0.3) !important",
        position: "fixed",
        width: "100%",
        zIndex: "99"
    },
    rootContent: {
        color: "#555555",
        backgroundColor: "#FFFFFF",
        borderRadius: "2px"
    },
    toolbar: {
        [theme.breakpoints.up("lg")]: {
            width: "1140px",
            margin: "0 auto"
        },
        [theme.breakpoints.up("md")]: {
            width: "960px",
            margin: "0 auto"
        }
    },
    menuButton: {
        margin: "0 10px",
        padding: "0px",
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
    menuDraw: {
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    title: {
        flexGrow: 1
    },
    link: {
        color: "#555555",
        padding: "12px"
    }
});
export default styles;
