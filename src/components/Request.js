import React from 'react';
import { Box } from '@mui/system';
import { Typography, Button, styled } from '@mui/material';

import FonRequest from '../assets/fon_request.jpg';

const BoxRequest = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '25%',
    bottom: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  })

  const RequestHeader = styled(Typography)({
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    letterSpacing: 'normal',
    fontSize: 25,
  })

  const RequestContent = styled(Typography)({
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 18,
    letterSpacing: 'normal',
    margin: '0 0 2.5rem 0',
    textAlign: 'center',
  })

  const ButtonRequest = styled(Button)({
    background: 'none',
    fontFamily: 'Libre Franklin',
    letterSpacing: '0.1em',
    color: '#0f2b36',
    border: '2px solid #0f2b36',
    transition: '0.5s',
  
  
    "&:hover": {
      background: 'white',
    }
  })

const Request = () => {
  return (
    <div style={{ position: 'relative', margin: '0', padding: '0', boxSizing: 'content-box' }}>
        <img src={FonRequest} alt='Request' style={{ display: 'block' }} width='100%' />
        <BoxRequest>
          <RequestHeader> Request Free Estimate! </RequestHeader>
          <div style={{ background: 'black', height: '3px', margin: '1rem 0', width: '5%' }} />
          <RequestContent> Press the button, and we will contact you soon to clear the details! </RequestContent>
          <ButtonRequest size='large' variant="outlined"> Send a request </ButtonRequest>
        </BoxRequest>
      </div>
  )
}

export default Request