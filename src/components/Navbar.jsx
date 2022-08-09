import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography, CssBaseline, Stack, styled, Link } from '@mui/material';
import Companylogo from '../assets/companylogo.png';


const TypographyBar = styled (Typography) ({

  fontFamily: 'Libre Franklin',
  fontWeight: 'bold',
  fontSize: 25,
  color: 'white',
  
})

const TypographyLink = styled(Typography)({
  fontSize: 16,
  fontFamily: 'Libre Franklin',
  fontWeight: 600,
  color: 'white',
  letterSpacing: '.08em',
  marginRight: 20,
  borderRadius: '30px',
  transition: '.6s',

  "&:hover": {
    background: 'white',
    color: '#173642',
    border: '1px solid #e4e6b1',
    fontSize: 18,
    padding: '0 15px'
  }
})


export const Navbar = () => {
  return (
    <>
      <AppBar style={{ background: '#355f6f', position: 'static' }}>
        <CssBaseline />
        <Toolbar disableGutters>
          <Stack sx={{ flexGrow: 1, display: 'inline-flex', flexDirection: 'row', alignItems: 'center' }} >
            <img src={Companylogo} alt='Company Logo' style={{ width: '100px', height: '80px', margin: '0px 20px' }} />
            <TypographyBar>
              MEO Company
            </TypographyBar>
          </Stack>
          <Stack marginRight={10} sx={{ display: 'flex', position: 'relative', flexDirection: 'row', }}>
            <Link style={{textDecoration: 'none'}} href="#about" > <TypographyLink> About us </TypographyLink> </Link>
            <Link style={{textDecoration: 'none'}} href="#services"  > <TypographyLink> Our Services </TypographyLink> </Link>
            <Link style={{textDecoration: 'none'}} href="#showCase" > <TypographyLink> Showcase </TypographyLink> </Link>
            <Link style={{textDecoration: 'none'}} href="#testimonials"> <TypographyLink> Testimonials </TypographyLink> </Link>
            <Link style={{textDecoration: 'none'}} href="#contactUs"> <TypographyLink> Contacts </TypographyLink> </Link>
          </Stack>
        </Toolbar>
      </AppBar>

    </>
  )
}