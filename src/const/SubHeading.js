import React from 'react';
import { Box } from '@mui/system';
import { Typography, styled } from '@mui/material';


const BoxHeader = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2rem'
  });

  const Header = styled(Typography)({
    fontFamily: 'Libre Franklin, sans-serif',
    fontWeight: 500,
    fontSize: 50,
    color: 'black',
  
    margin: '4rem 0 0 0'
  });

  const HeaderItm = styled(Typography)({
    fontFamily: 'Libre Franklin, sans-serif',
    fontSize: 20,
    color: 'black',
  
    margin: '0.3rem 0 1.5rem 0'
  })

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