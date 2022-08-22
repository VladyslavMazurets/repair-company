import React from 'react';
import { Box, styled } from '@mui/system';
import { Typography, Button, Stack } from '@mui/material';

import ImgAbout from '../assets/about_img.jpg';
import ImgAbout2 from '../assets/about_img2.jpg';

const BoxMain = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  padding: '9rem 0 10rem 0',
  width: '75%',

  [theme.breakpoints.down(1500)]: {
    width: '85%',
  },

  [theme.breakpoints.down("lg")]: {
    width: '90%',
  },

  [theme.breakpoints.down(1000)]: {
    padding: '5rem 0 6rem 0',

  },

}))

const BoxItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  right: '5%',
  width: '100%',

  [theme.breakpoints.down("lg")]: {
    top: '50px',
    right: '2%'
  },

  [theme.breakpoints.down(1000)]: {
    top: '100px',
    right: '2%'
  },

  [theme.breakpoints.down(900)]: {
    display: 'none'
  }
}));

const BoxContent = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
})

const BoxButton = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: '45px'
})

const BoxImg = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '90%',
  top: '65%',

  [theme.breakpoints.down("lg")]: {
    left: '85%',
    top: '45%',
  },

  [theme.breakpoints.down(1000)]: {
    left: '85%',
    top: '35%',
  },
}))

const ButtonCase = styled(Button)(({ theme }) => ({
  marginRight: '1.5rem',
  background: '#2f759e',
  fontFamily: 'Libre Franklin',
  letterSpacing: '0.05em',
  transition: '0.5s',

  "&:hover": {
    background: '#1c6785',
  },

  [theme.breakpoints.down(1000)]: {
    fontSize: '10px',
    marginRight: '.5rem',
    padding: '10px'
  },

  [theme.breakpoints.down(360)]: {

  },
}))

const ButtonCont = styled(Button)(({ theme }) => ({
  background: 'none',
  fontFamily: 'Libre Franklin',
  letterSpacing: '0.05em',
  color: '#0f2b36',
  border: '1px solid #0f2b36',
  transition: '0.5s',

  "&:hover": {
    background: 'white',
  },

  [theme.breakpoints.down(1000)]: {
    fontSize: '10px',
    padding: '10px'
  },
}))

const Header = styled(Typography)(({ theme }) => ({
  fontFamily: 'Libre Franklin',
  fontSize: 54,
  color: 'black',
  marginTop: '2rem',

  [theme.breakpoints.down("lg")]: {
    fontSize: 40,
    margin: 0
  },

  [theme.breakpoints.down(1000)]: {
    fontSize: 26,
  },
}))

const HeaderContent = styled(Typography)(({ theme }) => ({
  fontFamily: 'Libre Franklin',
  fontSize: 20,
  color: 'black',

  margin: '0.3rem 0 2.5rem 0',

  [theme.breakpoints.down("lg")]: {
    fontSize: 17,
  },

  [theme.breakpoints.down(1000)]: {
    fontSize: 14,
  },
}))

const Content = styled(Typography)(({ theme }) => ({
  fontFamily: 'Libre Franklin',
  fontSize: 17,

  [theme.breakpoints.down("lg")]: {
    fontSize: 14,
  },

  [theme.breakpoints.down(1000)]: {
    fontSize: 10,
  },
}))

const Img1 = styled("img")(({ theme }) => ({
  display: 'block',
  width: '140%',
  height: '100%',

  [theme.breakpoints.down("lg")]: {
    width: '120%',
    height: '70%',
  },

  [theme.breakpoints.down(1000)]: {
    width: '120%',
    height: '50%',
  }
}))

const Img2 = styled("img")(({ theme }) => ({
  display: 'block',
  width: '340px',
  height: '250px',
  border: '0.5rem solid #96bed6',

  [theme.breakpoints.down("lg")]: {
    width: '250px',
    height: '180px'
  },

  [theme.breakpoints.down(1000)]: {
    width: '210px',
    height: '150px',
  }
}))

export const About = () => {

  return (
    <Box id='about' style={{ background: '#96bed6' }}>

      <BoxMain>
        <Stack
          direction="row"
          spacing={{ sm: 0, md: 25, lg: 40, xl: 40 }}
        >

          <BoxItem>
            <Img1 src={ImgAbout} alt='About Img' />
            <BoxImg>
              <Img2 src={ImgAbout2} alt='About Img2' />
            </BoxImg>
          </BoxItem>

          <BoxContent>
            <Header> About MEO Company </Header>
            <div style={{ background: 'white', height: '3px', margin: '1rem 0', width: '30%' }} />
            <HeaderContent>
              We are professionals of apartment repair. Do you need our services? Contact us!
            </HeaderContent>

            <Content>
              MEO company is a company that has been installing and renovating apartments in Kyiv & Kyiv region for 10 years. <br />
              <br />Our staff includes about 50 people with excellent skills and extensive experience. We can develop a project, advise on suitable material, install new apartment renovation or repair the old one. We also redo the work of other crews and perform construction design supervision. Your apartment renovation is in good hands!
            </Content>
            <BoxButton>
              <ButtonCase href="#showCase" size='large' variant="contained"> Showcase </ButtonCase>
              <ButtonCont href="#contactUs" variant="outlined"> Contact Us </ButtonCont>
            </BoxButton>
          </BoxContent>

        </Stack>
      </BoxMain>

    </Box>
  )
}

export default About