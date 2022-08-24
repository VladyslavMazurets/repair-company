import React from 'react';
import { Box } from '@mui/system';
import { Typography, Button, styled } from '@mui/material';

import FonRequest from '../assets/fon_request.jpg';

const BoxBg = styled(Box)({
  background: 'url(' + FonRequest + ')',
  backgroundPosition: 'center',
  backgroundRepeat: 'repeat',
  backgroundSize: 'cover',
  height: '420px',

  display: 'flex',
  justifyContent: 'center'
})

const BoxMain = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  padding: '2rem',
  width: '75%',

  [theme.breakpoints.down("md")]: {
    width: '90%'
  },

  [theme.breakpoints.down("sm")]: {
    width: '100%'
  }
}))

const BoxRequest = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  flexDirection: 'column',
  right: '10%',

  [theme.breakpoints.down("md")]: {
    right: '15%'
  },

  [theme.breakpoints.down(660)]: {
    right: '10%'
  },

  [theme.breakpoints.down('sm')]: {
    right: 0
  },
}))

const RequestHeader = styled(Typography)(({ theme }) => ({
  fontFamily: 'Libre Franklin',
  fontSize: 25,

  [theme.breakpoints.down(500)]: {
    fontSize: '16px'
  },
}))

const RequestContent = styled(Typography)(({ theme }) => ({
  fontFamily: 'Libre Franklin',
  fontSize: 18,
  margin: '0.5rem 0 2.5rem 0',

  [theme.breakpoints.down(500)]: {
    fontSize: '10px'
  },
}))

const ButtonRequest = styled(Button)(({ theme }) => ({
  background: '#64ccf5',
  fontFamily: 'Libre Franklin',
  letterSpacing: '0.1em',
  color: 'white',
  border: '1px solid inherit',
  transition: '0.5s',

  "&:hover": {
    border: '1px solid #0f2b36',
    background: '#1c6785',
  },

  [theme.breakpoints.down("sm")]: {
    padding: '8px',
    fontSize: '13px',
  },

  [theme.breakpoints.down(460)]: {
    padding: '5px',
    fontSize: '10px',

  }
}))

const Request = () => {
  return (
    <BoxBg>
      <BoxMain>
        <BoxRequest>
          <RequestHeader> Request Free Estimate! </RequestHeader>
          <div style={{ background: 'black', height: '3px', margin: '1rem 0', width: '5%' }} />
          <RequestContent>
            Press the button, and we will contact you soon to clear the details!
          </RequestContent>
          <ButtonRequest href='#callOrder' size='large' variant="outlined">
            Send a request
          </ButtonRequest>
        </BoxRequest>
      </BoxMain>
    </BoxBg>
  )
}

export default Request