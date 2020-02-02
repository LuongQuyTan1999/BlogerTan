const styles = () => ({
    top: {
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#DDD",
        backgroundImage: `url(
                    ${require("../../commons/Images/profile-bg.baf6b40a.jpg")}
                )`,
        overFlow: "hidden",
        position: "relative",
        maxHeight: "1000px",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center center"
    },
    topContent: {
        minHeight: "360px"
    }
});
export default styles;
