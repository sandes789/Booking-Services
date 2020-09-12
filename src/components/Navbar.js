import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Vespa from '../img/Vespa.svg'
import { NavLink } from 'react-router-dom';
import ButtonAnimi from './ButtonAnimi';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginLeft: "5rem",
        position: "relative"
    },
    p0: {
        padding: 0
    },
    themeBg: {
        background: "#0B0B0B"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
const Navbar = () => {
    const classes = useStyles();
    return (
        <div className="navbar">
            <AppBar className={classes.themeBg} position="static">
                <Container maxWidth="lg">
                    <Toolbar className={classes.p0}>
                        <img className="app-logo dasd" src={Vespa} alt="logo" />
                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton> */}
                        <div className={classes.root}>
                            <NavLink className="navItem" to='/home'>Home</NavLink>
                            <NavLink className="navItem" to='/about'>About Us</NavLink>
                            <NavLink className="navItem" to='/news'>News</NavLink>
                            <NavLink className="navItem" to='/contact-us'>Contact Us</NavLink>
                            <div className="marker"></div>
                        </div>
                        <Button color="inherit">Login</Button>
                        <ButtonAnimi name="Register" />
                        {/* <Button className="btn btn-yellow">
                            <span className="name-descripeion">Register</span>
                            <div className="btn-bg"></div>
                        </Button> */}
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Navbar
