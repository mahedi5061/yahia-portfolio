import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import personalPicture from "../images/personalPic.jpg";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
 
 
//  CSS STYLES
const useStyles = makeStyles(theme => ({
  personalPicture: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    margin: theme.spacing(1)
  },
  
  
  title: {
    color: "tomato"
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem"
  },
  // typedContainer: {
  //   position: "absolute",
  //   top:"50%",
  //   left:"50%",
  //   transform: "translate(-50%, -50%)",
  //   width: "100vw",
  //   textAlign: "center",
  //   zIndex:1
  // }
}));

const Header = () => {
  const classes = useStyles();
  return (
  
     <>
     <Box>
    
    <Grid container justify="center" className="header-navbar">
      <Avatar className={classes.personalPicture} src={personalPicture} alt="Sadekuzzaman Yahia" />
    </Grid>
    <div className="header-navbar-text">
    <Typography className={classes.title} variant="h4">
      <Typed strings={["Sadekuzzaman Yahia"]} typeSpeed={40} />
    </Typography>
    <br />
    <Typography className={classes.subtitle} variant="h5">
      <Typed
        strings={["Web Design", "Web Development", "MERN Stack"]}
        typeSpeed={40}
        backSpeed={60}
        loop
      />
    </Typography>
    </div>
  </Box>
  </>
  );
};

export default Header;
