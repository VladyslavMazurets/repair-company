import React from 'react';
import { Box, styled } from '@mui/system';
import { Typography, Button, Stack } from '@mui/material';

import ImgAbout from '../assets/about_img.jpg';
import ImgAbout2 from '../assets/about_img2.jpg';

const BoxItem = styled(Box)({
  width: '100%'
});

const BoxMain = styled(Box)({
  margin: '0 auto',
  padding: '12rem 0 12rem 0',
  width: '75%',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
})

const BoxButton = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: '45px'
})

const BoxImg = styled(Box)({
  position: 'absolute',
  left: '90%',
  top: '65%',
})

const ButtonCase = styled(Button)({
  marginRight: '1.5rem',
  background: '#2f759e',
  fontFamily: 'Libre Franklin',
  letterSpacing: '0.05em',
  transition: '0.5s',

  "&:hover": {
    background: '#1c6785',
  }
})

const ButtonCont = styled(Button)({
  background: 'none',
  fontFamily: 'Libre Franklin',
  letterSpacing: '0.05em',
  color: '#0f2b36',
  border: '2px solid #0f2b36',
  transition: '0.5s',

  "&:hover": {
    background: 'white',
  }
})

const Header = styled(Typography)({
  fontFamily: 'Libre Franklin',
  fontSize: 54,
  color: 'black',

  marginTop: '2rem'
})

const HeaderContent = styled(Typography)({
  fontFamily: 'Libre Franklin',
  fontSize: 20,
  color: 'black',

  margin: '0.3rem 0 1.5rem 0'
})

const Content = styled(Typography)({
  fontFamily: 'Libre Franklin',
  fontSize: 17,
  marginTop: '1rem'
})

const Img = styled("img")({
  display: 'block',
  objectFit: 'fill',
  border: '0.5rem solid #96bed6'
})

export const About = () => {
  return (
    <Box id='about' style={{ background: '#96bed6' }}>
      
      <BoxMain>
        <Stack direction="row"
          spacing={30}>

          <BoxItem style={{ position: 'relative', right: '5%'}}>
            <Img src={ImgAbout} alt='About Img' width='140%' height='100%' />
            <BoxImg>
              <Img src={ImgAbout2} alt='About Img2' width={340} height={250} />
            </BoxImg>
          </BoxItem>

          <BoxItem>
            <Box>
              <Box>
                <Header> About MEO Company </Header>
                <div style={{ background: 'white', height: '3px', margin: '1rem 0', width: '30%' }} />
                <HeaderContent> We are professionals of apartment repair. Do you need our services? Contact us! </HeaderContent>

                <Content>
                  MEO company is a company that has been installing and renovating apartments in Kyiv & Kyiv region for 10 years. <br />
                  <br />Our staff includes about 50 people with excellent skills and extensive experience. We can develop a project, advise on suitable material, install new apartment renovation or repair the old one. We also redo the work of other crews and perform construction design supervision. Your apartment renovation is in good hands!
                </Content>
              </Box>
              <BoxButton>
                <ButtonCase href="#showCase" size='large' variant="contained"> Showcase </ButtonCase>
                <ButtonCont href="#contactUs" variant="outlined"> Contact Us </ButtonCont>
              </BoxButton>
            </Box>
          </BoxItem>

        </Stack>
      </BoxMain>

    </Box>
  )
}

export default About