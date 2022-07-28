import React from 'react';
import { Box } from '@mui/system';
import { Typography, styled, Button, textFieldClasses } from '@mui/material';

import WorkData from '../const/WorkData';


import SubHeading from '../const/SubHeading';

const BoxItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  maxWidth: '50%'
}));

const BoxContent = styled(Box)({
  display: 'flex',
  textAlign: 'center',
  flexDirection: 'column',
  maxWidth: '60%'
});

const BoxMain = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '1rem'
})

const BoxIcon = styled(Box)({
  padding: '1.5rem 1.5rem 0.5rem 1.5rem',
  border: '1px solid white',
  borderRadius: '50%',
  background: 'white',
  fontSize: '50px',
})

const ItemHeader = styled(Typography)({
  fontFamily: 'Libre Franklin',
  fontWeight: 'bold',
  fontSize: 26,

  paddingBottom: '1rem'
})

const ItemContent = styled(Typography)({
  fontFamily: 'Open Sans',
  fontSize: 17,
  padding: '0 2rem 2rem 2rem'
})

function HowWeWork() {
  return (

    <Box style={{ background: '#85aec7' }}>

      <SubHeading title="How We Work" content="Need a apartment repair? Contact us, and we'll do the work" />

      {WorkData.map(({ icon, title, text }, index) => {
        return (

          <BoxMain key={index}>
            <BoxItem>
              <BoxIcon> {icon} </BoxIcon>
              <div style={{ background: 'white', height: '3px', margin: '1rem 0', width: '5%' }} />
              <BoxContent>
                <ItemHeader> {title} </ItemHeader>
                <ItemContent> {text} </ItemContent>
              </BoxContent>
            </BoxItem>
          </BoxMain>

        )
      })
      }

    </Box>
  )
}

export default HowWeWork