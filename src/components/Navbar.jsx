import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Toolbar, Typography, CssBaseline, Stack, styled, Link, IconButton, SwipeableDrawer, List, ListItem } from '@mui/material';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';

import Companylogo from '../assets/companylogo.png';

const navigationLinks = [
  { id: 1, name: 'About us', href: '#about' },
  { id: 2, name: 'Our Services', href: '#services' },
  { id: 3, name: 'Showcase', href: '#showCase' },
  { id: 4, name: 'Testimonials', href: '#testimonials' },
  { id: 5, name: 'Contacts', href: '#contactUs' },
]

const Name = styled(Typography)({
  fontFamily: 'Libre Franklin',
  fontSize: 25,
  color: 'white',
})

const NameSm = styled(Typography)(({ theme }) => ({
  fontFamily: 'Libre Franklin',
  fontSize: 25,
  color: 'white',

  [theme.breakpoints.down(1024)]: {
    display: 'none'
  },

  [theme.breakpoints.down("sm")]: {
    display: 'flex',
    fontSize: 20
  }
}))

const TypographyLink = styled(Typography)({
  fontSize: 16,
  fontFamily: 'Libre Franklin',
  color: 'white',
  border: '1px solid transparent',
  padding: '1px 15px',
  borderRadius: '30px',
  transition: '.8s',

  "&:hover": {
    background: 'white',
    color: '#173642',
    border: '1px solid #e4e6b1',
  }
})

const TypographyMenu = styled(Typography)({
  fontSize: 18,
  fontFamily: 'Libre Franklin',
  padding: '2px 15px',
  color: 'white',
  border: '1px solid transparent',
  borderRadius: '30px',
  transition: '.8s',

  "&:hover": {
    background: 'white',
    color: '#173642',
    border: '1px solid #e4e6b1',

  }
})

const Logo = styled("img")({
  width: '75px',
  height: '60px',
  margin: '0px 5px',
  display: 'block'
})

const StackLogo = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  flexDirection: 'row',
  alignItems: 'center'
}))

const StackLink = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  marginRight: '1rem',

  [theme.breakpoints.down(1024)]: {
    display: 'none'
  }
}))

const BoxClose = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '1rem 1rem 0 1rem',

  [theme.breakpoints.down("sm")]: {
    padding: '1.5rem 1rem 1.5rem 1.5rem'
  }
}))

const Hamburger = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up(1024)]: {
    display: 'none'
  }
}))

const Close = styled(IconButton)(({theme}) => ({
  color: 'white',
  fontSize: 25,
  border: '1px solid transparent',
  transition: '.8s',

  "&:hover": {
    background: 'white',
    color: '#173642',
    border: '1px solid #e4e6b1',

  },

  [theme.breakpoints.down("sm")]: {
    marginLeft: '0.5rem',
    marginRight: 0
  }
}))

const LinkMeo = styled(Link)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: 'none'
  }
}))

export const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" style={{ background: '#355f6f' }}>
        <CssBaseline />
        <Toolbar>

          <StackLogo>
            <Logo src={Companylogo} alt='Company Logo' />
            <LinkMeo href="#" color="inherit" underline="none">
              <Name> MEO Company </Name>
            </LinkMeo>
          </StackLogo>

          <StackLink>
            {navigationLinks.map((item) => (
              <Link key={item.id} color="inherit" underline="none" href={item.href} >
                <TypographyLink> {item.name} </TypographyLink>
              </Link>
            ))}
          </StackLink>

          <Hamburger onClick={() => setOpen(true)}> <GiHamburgerMenu style={{ color: 'white' }} /> </Hamburger>

          <SwipeableDrawer
            PaperProps={{
              sx: {
                backgroundColor: "#355f6f",
                color: "white",
                width: { xs: '40%', sm: '30%' }
              }
            }}
            anchor="right"
            disableDiscovery={true}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
          >
            <BoxClose>
              <NameSm> MEO Company </NameSm>
              <Close onClick={() => setOpen(false)}> <CgClose /> </Close>
            </BoxClose>

            <List>
              {navigationLinks.map((item) => (
                <ListItem key={item.id} style={{ display: 'flex', alignItem: 'center', flexDirection: 'column', marginBottom: '1rem' }}>
                  <Link color="inherit" underline="none" href={item.href} > <TypographyMenu> {item.name} </TypographyMenu> </Link>
                </ListItem>
              ))}
            </List>
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>

    </>
  )
}
