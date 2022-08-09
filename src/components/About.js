import React from 'react';
import { Box, styled } from '@mui/system';
import { Typography, Button, Stack, Paper } from '@mui/material';

import ImgAbout from '../assets/about_img.jpg';
import ImgAbout2 from '../assets/about_img2.jpg';
import SubHeading from '../const/SubHeading';

const Item = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  flexDirection: 'column',
  background: 'none',
  boxShadow: 'none'
}));

const BoxButton = styled(Box)({
  display: 'flex',
  direction: 'row',
  marginTop: '45px'
})

const BoxImg = styled(Box)({
  position: 'absolute',
  left: '65%',
  top: '60%',
})

const ButtonCase = styled(Button)({
  marginRight: '1.5rem',
  background: '#2f759e',
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

const HeaderContent = styled(Typography)({
  fontFamily: 'Open Sans, sans-serif',
  fontSize: 18,
  letterSpacing: 'normal',
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

      <Stack direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={8}
        padding='7.5rem 5rem 7.5rem 5rem'>

        <Item style={{ position: 'relative' }}>
          <Img src={ImgAbout} alt='About Img' width='90%' height='100%' />
          <BoxImg>
            <Img src={ImgAbout2} alt='About Img2' width={300} height={240} />
          </BoxImg>
        </Item>

        <Item style={{ padding: '0 5rem 2rem 5rem', width: '40%' }}>

          <SubHeading title="About MEO Company" content="We are professionals of apartment repair. Do you need our services? Contact us!"/>
          
          <HeaderContent>
            MEO company is a company that has been installing and renovating apartments in Kyiv & Kyiv region for 10 years. <br />
            <br />Our staff includes about 50 people with excellent skills and extensive experience. We can develop a project, advise on suitable material, install new apartment renovation or repair the old one. We also redo the work of other crews and perform construction design supervision. Your apartment renovation is in good hands!
          </HeaderContent>

          <BoxButton>
            <ButtonCase size='large' variant="contained"> Showcase </ButtonCase>
            <ButtonCont variant="outlined"> Contact Us </ButtonCont>
          </BoxButton>

        </Item>

      </Stack>
    </Box>
  )
}

export default About