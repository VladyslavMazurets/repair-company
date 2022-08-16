import React from 'react';
import { Box } from '@mui/system';
import { Typography, styled } from '@mui/material';


const BoxHeader = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem'
  });

  const Header = styled(Typography)({
    fontFamily: 'Libre Franklin',
    fontSize: 54,
    color: 'black',
  
    marginTop: '2rem'
  });

  const HeaderItm = styled(Typography)({
    fontFamily: 'Libre Franklin',
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