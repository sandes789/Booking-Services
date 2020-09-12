import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { Instagram, Twitter, Reddit } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: "center",
        fontSize: 13,
        fontWeight: 300
    },

}));
const Footer = () => {
    const MenuItems = useSelector(state => state.menu.MenuItems)
    console.log(MenuItems)

    const menu =
        <ul className="footer-menu">
            {
                MenuItems.map(item => {
                    return (
                        <li>{item}</li>
                    )
                })
            }
        </ul>
    console.log(menu)


    const classes = useStyles();
    return (
        <div className={classNames("footer", classes.root)}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                <Grid item lg={3} sm={0} />
                <Grid item lg={6} sm={12}>
                    {menu}
                    <p>Vespa bike service center , Manamaiju Tarkeshwor, Kathmandu, Nepal</p>
                    <ul className="social-links">
                        <li>
                            <a href='#'> <Instagram />  </a>

                        </li>
                        <li>
                            <a href='#'> <Twitter />  </a>
                        </li>
                        <li>
                            <a href='#'> <Reddit />  </a>
                        </li>
                        <li>
                            <a href='#'> <Instagram />  </a>
                        </li>
                    </ul>
                    <p>All Right Reserved © Vespa 2020</p>
                </Grid>
                <Grid item lg={3} sm={0}/>
            </Grid>
        </div>
    )
}

export default Footer
