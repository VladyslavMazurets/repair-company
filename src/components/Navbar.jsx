import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Toolbar, Typography, CssBaseline, Stack, styled, Link, IconButton, SwipeableDrawer, List, ListItem } from '@mui/material';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import { BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs';

import Companylogo from '../assets/companylogo.png';

const navigationLinks = [
  { id: 1, name: 'About us', href: '#about' },
  { id: 2, name: 'Our Services', href: '#services' },
  { id: 3, name: 'Showcase', href: '#showCase' },
  { id: 4, name: 'Testimonials', href: '#testimonials' },
  { id: 5, name: 'Contacts', href: '#contactUs' },
]


const StackLogo = styled(Stack)({
  flexGrow: 1,
  flexDirection: 'row',
  alignItems: 'center'
})

const StackLink = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  marginRight: '1rem',

  [theme.breakpoints.down(1024)]: {
    display: 'none'
  }
}))

const BoxMenu = styled(Box)({
  height: '100%',
  padding: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'space-around'
})

const BoxClose = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  margin: '0 1rem',

  [theme.breakpoints.down(600)]: {
    margin: '0 0.5rem',
    justifyContent: 'space-between'

  }
}))

const BoxIcon = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem'
});

const BoxNumber = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
})

const SocialIcon = styled(IconButton)(({theme}) => ({
  color: 'white',
  fontSize: 30,
  transition: '0.35s',

  "&:hover": {
    color: '#173642',
    background: 'white'
  },

  [theme.breakpoints.down(400)]: {
    fontSize: 20
  }
}))

const Hamburger = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up(1024)]: {
    display: 'none'
  }
}))

const Close = styled(IconButton)(({ theme }) => ({
  color: 'white',
  fontSize: 25,
  border: '1px solid transparent',
  transition: '.8s',

  "&:hover": {
    background: 'white',
    color: '#173642',
    border: '1px solid #e4e6b1',

  },

  [theme.breakpoints.down(600)]: {
    marginLeft: '0.5rem',
    marginRight: 0
  },

  [theme.breakpoints.down(500)]: {
    fontSize: 20
  }
}))

const ItemList = styled(ListItem)({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1rem'
})

const LinkMeo = styled(Link)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: 'none'
  }
}))

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

  [theme.breakpoints.down(600)]: {
    display: 'flex',
    fontSize: 20
  },

  [theme.breakpoints.down(400)]: {
    fontSize: 18
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

const TypographyMenu = styled(Typography)(({theme}) => ({
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
  },

  [theme.breakpoints.down(400)]: {
    fontSize: 15
  },
}))

const TypoNumber = styled(Typography)(({theme}) => ({
  fontFamily: 'Libre Franklin',
  fontSize: 16,

  [theme.breakpoints.down(400)]: {
    fontSize: 12
  }
}))

const Logo = styled("img")({
  width: '75px',
  height: '60px',
  margin: '0px 5px',
  display: 'block'
})

export const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" style={{ background: '#355f6f' }}>
        <CssBaseline />
        <Toolbar>

          <StackLogo>
            <Link href="#">
              <Logo src={Companylogo} alt='Company Logo' />
            </Link>
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
                width: { xs: '100%', sm: '50%', md: '30%' }
              }
            }}
            anchor="right"
            disableDiscovery={true}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
          >
            <BoxMenu>

              <BoxClose>
                <NameSm> MEO Company </NameSm>
                <Close onClick={() => setOpen(false)}> <CgClose /> </Close>
              </BoxClose>

              <List>
                {navigationLinks.map((item) => (
                  <ItemList key={item.id}>
                    <Link color="inherit" underline="none" onClick={() => setOpen(false)} href={item.href}>
                      <TypographyMenu> {item.name} </TypographyMenu>
                    </Link>
                  </ItemList>
                ))}
              </List>

              <BoxNumber>
                <Link href='tel:+380978975064' color="inherit" underline="hover">
                  <TypoNumber> Tel: +380 97 897 50 64 </TypoNumber>
                </Link>
                <Link href='mailto:ogidj88@gmail.com' color="inherit" underline="hover">
                  <TypoNumber> Gmail: ogidj88@gmail.com </TypoNumber>
                </Link>
              </BoxNumber>

              <BoxIcon>
                <SocialIcon aria-label='facebook.com' onClick={() => window.open('https://www.facebook.com/profile.php?id=100001731765715')}>
                  <BsFacebook />
                </SocialIcon >
                <SocialIcon aria-label='instagram.com' onClick={() => window.open('https://www.instagram.com/evgenmazurets/')}>
                  <BsInstagram />
                </SocialIcon >
                <SocialIcon aria-label='telegram.org' onClick={() => window.open('https://web.telegram.org/k/#555445824')}>
                  <BsTelegram />
                </SocialIcon >

              </BoxIcon>

            </BoxMenu>
          </SwipeableDrawer>

        </Toolbar>
      </AppBar>

    </>
  )
}
