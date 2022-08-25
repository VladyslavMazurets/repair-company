import React from 'react';
import { Box } from '@mui/system';
import { Typography, styled } from '@mui/material';


const BoxHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  opacity: '0.8',

  padding: '2rem 1rem 1rem 1rem',

  [theme.breakpoints.down(380)]: {
    padding: 0
  },
}));

const Header = styled(Typography)(({ theme }) => ({
  fontFamily: 'Libre Franklin',
  fontSize: 54,
  color: 'black',

  [theme.breakpoints.down(1024)]: {
    fontSize: 46
  },

  [theme.breakpoints.down(770)]: {
    fontSize: 38,
  },

  [theme.breakpoints.down(400)]: {
    fontSize: 30,
  },
}));

const HeaderItm = styled(Typography)(({ theme }) => ({
  fontFamily: 'Libre Franklin',
  fontSize: 20,
  color: 'black',

  margin: '0.3rem 0 1.5rem 0',

  [theme.breakpoints.down(1024)]: {
    fontSize: 18
  },
  [theme.breakpoints.down(770)]: {
    fontSize: 16
  },
  [theme.breakpoints.down(400)]: {
    fontSize: 15,
  },
}))

const SubHeading = ({ title, content }) => {
  return (
    <BoxHeader>
      <Header> {title} </Header>
      <div style={{ background: 'white', height: '3px', margin: '1rem 0', width: '8%' }} />
      <HeaderItm> {content} </HeaderItm>
    </BoxHeader>
  )
}

export default SubHeading