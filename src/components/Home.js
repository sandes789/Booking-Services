import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ButtonAnimi from './ButtonAnimi';
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import chooseVespa from '../img/chooseVespa.png'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Divider } from '@material-ui/core';
import MultiCarousel from './MultiCarousel';

const useStyles = makeStyles((theme) => ({
    margin:{
        marginTop:40
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));


const Home = () => {
    const classes = useStyles();
    return (
        <div className={classNames("home", classes.root)}>
            <section className="banner">
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center" spacing={3}>
                    <Grid item container >
                        <Grid item xs={12} sm={6} className="left-content">
                            <div>
                                <Typography variant="h3" className="banner-header" component="h2" gutterBottom>
                                    Booking <span>Service</span>
                                </Typography>
                                <div className="banner-para">
                                    <h3>Platform for all</h3>
                                    <p>You can w book your servicing online on your favorite servicing center at your desired time.</p>
                                </div>
                                <ButtonAnimi name="Book Now" />
                            </div>
                        </Grid>
                        <Grid className="banner-img" item xs={12} sm={6}>
                        </Grid>
                    </Grid>
                </Grid>
            </section>

            <section className="why-vespa">
                <Container>
                    <div className="header-title">
                        <h1>Why choose<span> Vespa?</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Sapiente consectetur adipisicing.</p>
                    </div>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <img component="img" src={chooseVespa} alt="img" />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Typography variant="h3" m={5}>
                                There Are So Many Benifits
                            </Typography>
                            <List m={5}>
                                <ListItem button>
                                    <ListItemIcon>
                                        <CheckCircleIcon color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText>Donec ipsum molestias nulla veniam praesentium nulla diamlorem! Labore lacinia.</ListItemText>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <CheckCircleIcon color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText>Donec ipsum molestias nulla veniam praesentium nulla diamlorem! Labore lacinia.</ListItemText>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <CheckCircleIcon color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText>Donec ipsum molestias nulla veniam praesentium nulla diamlorem! Labore lacinia.</ListItemText>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <CheckCircleIcon color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText>Donec ipsum molestias nulla veniam praesentium nulla diamlorem! Labore lacinia.</ListItemText>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <CheckCircleIcon color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText>Donec ipsum molestias nulla veniam praesentium nulla diamlorem! Labore lacinia.</ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="our-services">
                <Container>
                    <div className="header-title">
                        <h1>Our <span>Services</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente.</p>
                    </div>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Box className="services-item"
                                boxShadow={3}
                                bgcolor="background.paper"
                                m={1}
                                p={3}

                            >
                                <Typography variant="h5" component="h5">
                                    <b>Request for <br /> booking</b>
                                </Typography>
                                <Typography variant="body2">
                                    Dictumst dignissimos occaes hic culpa ipsum nulla, aliquet fugiat odio illo ac tempora
                                </Typography>
                                <Typography variant="body2">
                                    Dictumst dignissimos
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box className="services-item"
                                boxShadow={3}
                                bgcolor="background.paper"
                                m={1}
                                p={3}

                            >
                                <Typography variant="h5" component="h5">
                                    <b>Get Servicing <br /> Time</b>
                                </Typography>
                                <Typography variant="body2">
                                    Dictumst dignissimos occaecati, accusamus hic culpa ipsum nulla, aliquet fugiat odio
                                </Typography>
                                <Typography variant="body2">
                                    Dictumst dignissimos occaecati
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box className="services-item"
                                boxShadow={3}
                                bgcolor="background.paper"
                                m={1}
                                p={3}

                            >
                                <Typography variant="h5" component="h5">
                                    <b>Arrive for <br /> Servicing</b>
                                </Typography>
                                <Typography variant="body2">
                                    Dictumst dignissimos occaecati, iquet fugiat odio illo ac tempora distinctio! Fugiat autem
                                </Typography>
                                <Typography variant="body2">
                                    Dictumst dignissimos occaecati
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="modal-range">
                <Container>
                    <div className="header-title">
                        <h1>Our <span>Model Ranges</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente.</p>
                    </div>
                    <MultiCarousel/>
                </Container>
            </section>
        </div>
    )
}

export default Home
