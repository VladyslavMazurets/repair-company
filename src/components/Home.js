import React from 'react'
import { Box, styled, Typography, Button } from '@mui/material';

import HomeImg from '../../src/assets/homeremont.jpg';

const BoxWeDo = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-120%, -50%)',
    marginRight: '450px',

    color: 'white',
})

const BoxButton = styled(Box)({
    display: 'flex',
    direction: 'row',
    marginTop: '45px'
})

const TypographyWeDo = styled(Typography)({
    fontFamily: 'Libre Franklin, sans-serif',
    fontWeight: 700,
    letterSpacing: '.03em',
    fontSize: 70,
    color: '#1c6785',
    textShadow: '5px 1px 2px black, 0 0 1em white, 0 0 0.2em white',

    textAlign: 'left'
})

const TypographyWeDoItem = styled(Typography)({
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    letterSpacing: '.03em',
    fontSize: 22,
    color: '#1c6785',
    textShadow: '1px 1px 10px white, 0 0 1em white, 0 0 0.3em white',

    textAlign: 'left'

})

const ButtonServ = styled(Button)({
    marginRight: '1.5rem', 
    background: '#0f2b36', 
    fontFamily: 'Bold', 
    letterSpacing: '0.2em',
    transition: '0.5s',

    "&:hover": {
        background: '#1c6785',
    }
})

const ButtonCont = styled(Button)({
    background: 'none', 
    fontFamily: 'Libre Franklin', 
    letterSpacing: '0.2em',
    fontWeight: 900,
    color: '#0f2b36',
    border: '2px solid #0f2b36',
    transition: '0.5s',

    "&:hover": {
        background: 'white',
    }
})

function Home() {
    return (
        <Box sx={{ position: 'relative', textAlign: 'center', }}>
            <Box>
                <img src={HomeImg} alt='home img'  width='100%' height='auto' style={{ display: 'block' }}/>
            </Box>
            <BoxWeDo fixed>
                <TypographyWeDo> We Shall <br /> Do Good <br /> Work </TypographyWeDo>
                <div style={{background: '#508192', height: '3px', margin: '1rem 0', width: '100px' }}/>
                <TypographyWeDoItem> Professional installing, uninstalling and reconstruction 
                    of your apartment! </TypographyWeDoItem>
                <BoxButton>
                    <ButtonServ size='large' variant="contained"> Our Services </ButtonServ>
                    <ButtonCont variant="outlined"> Contact Us </ButtonCont>
                </BoxButton>
            </BoxWeDo>
        </Box>
    )
}

export default Home