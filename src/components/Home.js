import React from 'react'
import { Box, styled, Typography, Button } from '@mui/material';

import HomeImg from '../../src/assets/homeremont.jpg';

const BoxHome = styled(Box)({
    background: 'url(' + HomeImg + ')',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',

    height: '920px'
})

const BoxMain = styled(Box)(({ theme }) => ({
    position: 'relative',
    margin: '0 auto',
    padding: '2rem',
    top: '15%',
    width: '75%',

    [theme.breakpoints.down(1300)]: {
        right: '5%'
    },

    [theme.breakpoints.down(1024)]: {
        right: '5%',
        top: '20%'
    },

    [theme.breakpoints.down("md")]: {
        width: '86%',
        right: '0%'
    },

    [theme.breakpoints.down("sm")]: {
        width: '90%',
        right: '0%'
    }
}))

const BoxWeDo = styled(Box)(({ theme }) => ({
    width: '35%',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',

    [theme.breakpoints.down(1370)]: {
        width: '50%'
    },

    [theme.breakpoints.down(990)]: {
        width: '60%'
    },

    [theme.breakpoints.down(730)]: {
        width: '80%'
    },

    [theme.breakpoints.down("sm")]: {
        width: '100%'
    },
}))

const BoxButton = styled(Box)(({theme}) => ({
    display: 'flex',
    marginTop: '40px',

    [theme.breakpoints.down(360)]: {
        display: 'flex',
        flexDirection: 'column',
        
    },
}))

const TypographyWeDo = styled(Typography)(({ theme }) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 70,
    color: 'white',
    textShadow: '5px 1px 2px black, 0 0 1em black',

    [theme.breakpoints.down(1370)]: {
        fontSize: 65
    },

    [theme.breakpoints.down(1024)]: {
        fontSize: 60,
    },

    [theme.breakpoints.down(460)]: {
        fontSize: 50,
    }
}))

const TypographyWeDoItem = styled(Typography)(({ theme }) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 22,
    color: 'white',
    textShadow: '5px 0 50px black',

    [theme.breakpoints.down(1370)]: {
        fontSize: 20
    },

    [theme.breakpoints.down(1024)]: {
        fontSize: 19,
    },

    [theme.breakpoints.down(460)]: {
        fontSize: 17,
    }
}))

const ButtonServ = styled(Button)(({ theme }) => ({
    fontFamily: 'Libre Franklin',
    marginRight: '1.5rem',
    background: '#0f2b36',
    letterSpacing: '0.1em',
    border: '2px solid #0f2b36',
    transition: '0.5s',

    "&:hover": {
        background: '#1c6785',
    },

    [theme.breakpoints.down(460)]: {
        marginRight: '5px',
        padding: '5px 10px',
        fontSize: '10px',

    },

    [theme.breakpoints.down(360)]: {
        marginRight: 0,
        marginBottom: '0.5rem',
    },
}))

const ButtonCont = styled(Button)(({ theme }) => ({
    background: 'none',
    fontFamily: 'Libre Franklin',
    letterSpacing: '0.1em',
    color: 'white',
    border: '2px solid #0f2b36',
    transition: '0.5s',

    "&:hover": {
        border: '2px solid',
        background: '#0f2b36',
    },

    [theme.breakpoints.down(460)]: {
        padding: '5px 10px',
        fontSize: '10px',

    }
}))

function Home() {
    return (
        <BoxHome>
            <BoxMain>
                <BoxWeDo>
                    <TypographyWeDo>
                        We Shall <br /> Do Good <br /> Work
                    </TypographyWeDo>

                    <div style={{ background: '#508192', height: '3px', margin: '1rem 0', width: '100px' }} />

                    <TypographyWeDoItem>
                        Professional installing, uninstalling and reconstruction
                        of your apartment!
                    </TypographyWeDoItem>

                    <BoxButton>
                        <ButtonServ href='#services' size='large' variant="contained"> Our Services </ButtonServ>
                        <ButtonCont href='#contactUs' variant="outlined"> Contact Us </ButtonCont>
                    </BoxButton>

                </BoxWeDo>
            </BoxMain>
        </BoxHome>
    )
}

export default Home