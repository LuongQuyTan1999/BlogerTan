import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { Avatar, Typography, Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import CameraIcon from "@material-ui/icons/Camera";
const ContainerBody = props => {
    const { classes } = props;
    return (
        <div className={classes.body}>
            <div className={classes.bodyContent}>
                {/* Infomation */}
                <div className={classes.bodyIformation}>
                    <div className={classes.bodyAvatar}>
                        <Avatar
                            alt="Lương Quý Tân"
                            src={require("../../commons/Images/DSC_0204.JPG")}
                            className={classes.avatar}
                        />
                        <div className={classes.name}>
                            <Typography variant="h4" gutterBottom>
                                Lương Quý Tân
                            </Typography>
                            <Typography
                                variant="button"
                                display="block"
                                className={classes.job}
                                gutterBottom
                            >
                                Developer ReactJs
                            </Typography>
                            <div className={classes.twinfb}>
                                <span className={classes.icon}>
                                    <a>
                                        <TwitterIcon />
                                    </a>
                                </span>
                                <span className={classes.icon}>
                                    <a>
                                        <InstagramIcon />
                                    </a>
                                </span>
                                <span className={classes.icon}>
                                    <a>
                                        <FacebookIcon />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Description */}
                <div className={classes.bodyDescription}>
                    <Typography variant="body2" gutterBottom>
                        Tôi là Lương Quý Tân, tôi đến từ Gia Lai có đam mê lập
                        trình trừ nhỏ,Tôi là Lương Quý Tân, tôi đến từ Gia Lai
                        có đam mê lập trình trừ nhỏ,Tôi là Lương Quý Tân, tôi
                        đến từ Gia Lai có đam mê lập trình trừ nhỏ,Tôi là Lương
                        Quý Tân, tôi đến từ Gia Lai có đam mê lập trình trừ nhỏ
                        adipisicing elit. Quos blanditiis tenetur unde suscipit,
                        quam beatae rerum inventore consectetur, neque
                        doloribus, cupiditate numquam dignissimos laborum fugiat
                        deleniti? Eum quasi quidem quibusdam.
                    </Typography>
                </div>
                {/* Description Image */}
                <div className={classes.Image}>
                    <div className={classes.ButtonImage}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            <span>
                                <CameraIcon />
                                <p style={{ margin: "0px" }}>STUDIO</p>
                            </span>
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            <span>
                                <ColorLensIcon />
                                <p style={{ margin: "0px" }}>WORK</p>
                            </span>
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            <span>
                                <FavoriteIcon />
                                <p style={{ margin: "0px" }}>FAVORITE</p>
                            </span>
                        </Button>
                    </div>

                    <div className={classes.contentImage}>
                        <div className={classes.ImageContainers}>
                            <div className={classes.ImageItem}></div>
                            <div className={classes.ImageItem}></div>
                        </div>
                        <div className={classes.ImageContainers}>
                            <div className={classes.ImageItem}></div>
                            <div className={classes.ImageItem}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default withStyles(styles)(ContainerBody);
