const styles = theme => ({
    body: {
        margin: "-60px 30px 0px",
        padding: "0px 15px",
        zIndex: 3,
        position: "relative",
        background: "#FFFFFF",
        boxShadow:
            " 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        borderRadius: "6px"
    },
    bodyContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    bodyIformation: {
        textAlign: "center"
    },
    job: {
        margin: "20px"
    },
    avatar: {
        width: "150px",
        height: "150px",
        margin: "0 auto",
        transform: "translate3d(0, -50%, 0)",
        borderRadius: "50%"
    },
    name: {
        marginTop: "-60px"
    },
    icon: {
        color: "#999999",
        margin: "0px 10px"
    },
    bodyDescription: {
        textAlign: "justify",
        marginTop: "20px",
        color: "#999999",
        [theme.breakpoints.up("md")]: {
            margin: "0 auto",
            marginTop: "15px",
            maxWidth: "66%"
        }
    },
    ButtonImage: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "25px",
        marginBottom: "20px"
    },
    button: {
        width: "100%",
        maxWidth: "100px",
        margin: "5px",
        padding: "20px",
        backgroundColor: "rgba(0,0,0,0)",
        color: "#555555",
        boxShadow: "none",
        "&:hover": {
            color: "#FFFFFF",
            boxShadow:
                "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
        }
    },
    contentImage: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.up("md")]: {
            maxWidth: "66%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "row"
        }
    },
    Image: {
        width: "100%"
    },
    ImageContainers: {
        width: "100%",
        padding: "10px",
        [theme.breakpoints.up("md")]: {
            width: "33%"
        }
    },
    ImageItem: {
        backgroundImage: `url('https://demos.creative-tim.com/material-kit-react/static/media/studio-2.76e2987e.jpg')`,
        width: "100%",
        height: "100%",
        minHeight: "360px",
        borderRadius: "6px !important",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        marginBottom: "2em"
        // [theme.breakpoints.up("md")]: {
        //     maxWidth: "33%",
        //     margin: "0 auto"
        // }
    }
});
export default styles;
