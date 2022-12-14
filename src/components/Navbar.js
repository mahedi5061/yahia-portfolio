import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import Footer from "./Footer";
import './Navbar.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import personalPicture from "../images/personalPic.jpg";

import {

  ListItem,
  ListItemIcon,

  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  AppBar,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Nav, Navbar } from "react-bootstrap";


// CSS STYLES

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  mainContainer: {
    background: "#233",
   
  },
  personalPicture: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Experience",
    listPath: "/experience",
  },
  {
    listIcon: <Apps />,
    listText: "Achievement",
    listPath: "/achievement",
  },
  {
    listIcon: <ContactMail />,
    listText: "Blog",
    listPath: "/blog",
  },
  {
    listIcon: <ContactMail />,
    listText: "About Me",
    listPath: "/about",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts",
  },
];

const PersonalNavbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.personalPicture} src={personalPicture} alt="Sadekuzzaman" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>

      <div className={classes.mainContainer}>
        <div className="row">
          <div className="col-10 mx-auto">
          <Navbar  expand="lg">
              <Navbar.Brand href="#home"><Link to="/" style={{ color: "tan", textDecoration: "none" }} onClick={toggleSlider("right", true)} className="yahia">
                <span className="yahia-s">Yahia's</span> <span className="yahia-s-portfolio">Portfolio</span>
              </Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Link to="/" style={{ color: "tan", textDecoration: "none", }} className="navbar-container">
                      Home
              </Link>
                    <Link to="/experience" style={{ color: "tan", textDecoration: "none", }} className="navbar-container">
                      Experience
              </Link>
                    <Link to="/achievement" style={{ color: "tan", textDecoration: "none" }} className="navbar-container">
                      Achievement
              </Link>
                    <Link to="/blog" style={{ color: "tan", textDecoration: "none" }} className="navbar-container">
                      Blog
              </Link>
                    <Link to="/about" style={{ color: "tan", textDecoration: "none" }} className="navbar-container">
                      About
              </Link>
                    <Link to="/contacts" style={{ color: "tan", textDecoration: "none" }} className="navbar-container">
                      Contacts
              </Link>

                </Nav>

              </Navbar.Collapse>
            </Navbar>


            <MobilRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </MobilRightMenuSlider>
          </div>
        </div>
      </div>


    </>
  );
};

Navbar.propTypes = {
  state: PropTypes.object,
};

export default PersonalNavbar;
