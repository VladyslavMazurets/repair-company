import React from 'react'
import { Box, styled, Typography, Button } from '@mui/material';

import HomeImg from '../../src/assets/homeremont.jpg';

const BoxMain = styled(Box)({
    background: 'url(' + HomeImg + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '977px'
})

const BoxWeDo = styled(Box)({
    position: 'relative',
    width: '30%',
    top: '23%',
    left: '15%',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column'
})

const BoxButton = styled(Box)({
    display: 'flex',
    direction: 'row',
    marginTop: '45px'
})

const TypographyWeDo = styled(Typography)({
    fontFamily: 'Popins, sans-seriff',
    fontWeight: 700,
    fontSize: 70,
    color: '#1c6785',
    textShadow: '5px 1px 2px black, 0 0 1em white, 0 0 0.2em white',

    textAlign: 'left'
})

const TypographyWeDoItem = styled(Typography)({
    fontFamily: 'Popins, sans-serif',
    fontWeight: 700,
    fontSize: 22,
    color: '#1c6785',
    textShadow: '1px 1px 10px white, 0 0 1em white, 0 0 0.3em white',

    textAlign: 'left'

})

const ButtonServ = styled(Button)({
    fontFamily: 'Popins, sans-serif',
    fontWeight: 'bold',
    marginRight: '1.5rem',
    background: '#0f2b36',
    letterSpacing: '0.15em',
    transition: '0.5s',

    "&:hover": {
        background: '#1c6785',
    }
})

const ButtonCont = styled(Button)({
    background: 'none',
    fontFamily: 'Popins, sans-serif',
    letterSpacing: '0.15em',
    fontWeight: 900,
    color: '#0f2b36',
    border: '2px solid #0f2b36',
    transition: '0.5s',

    "&:hover": {
        border: '2px solid',
        background: 'white',
    }
})

function Home() {
    return (
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
                    <ButtonServ size='large' variant="contained"> Our Services </ButtonServ>
                    <ButtonCont variant="outlined"> Contact Us </ButtonCont>
                </BoxButton>

            </BoxWeDo>
        </BoxMain>
    )
}

export default Home