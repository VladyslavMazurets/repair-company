import React from 'react';
import { Box } from '@mui/system';
import { Typography, styled } from '@mui/material';

import WorkData from '../const/WorkData';


import SubHeading from '../const/SubHeading';

const BoxMain = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  padding: '2rem',
  width: '75%',

  [theme.breakpoints.down(1000)]: {
    width: '90%',
  },

  [theme.breakpoints.down(700)]: {
    width: '100%',
  }
}))

const BoxItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  maxWidth: '75%',

  [theme.breakpoints.down(1100)]: {
    maxWidth: '90%',
  },

  [theme.breakpoints.down(700)]: {
    maxWidth: '100%',
  }
}));

const BoxContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  textAlign: 'center',
  flexDirection: 'column',
  maxWidth: '65%',

  [theme.breakpoints.down(1200)]: {
    maxWidth: '75%',
  },

  [theme.breakpoints.down(700)]: {
    maxWidth: '100%',
  }
}));

const BoxWork = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '1rem'
})

const BoxIcon = styled(Box)(({ theme }) => ({
  padding: '1.5rem 1.5rem .5rem 1.5rem',
  marginRight: '1rem',
  border: '1px solid inherit',
  borderRadius: '50%',
  background: 'white',
  fontSize: 50,

  [theme.breakpoints.down('md')]: {
    fontSize: 40,
    padding: '1.2rem 1.2rem .5rem 1.2rem',
  },

  [theme.breakpoints.down(500)]: {
    fontSize: 25,
    padding: '1rem 1rem .5rem 1rem',
  },


  [theme.breakpoints.down(390)]: {
    fontSize: 20,
    padding: '1rem 1rem .5rem 1rem',
  },

  [theme.breakpoints.down(325)]: {
    display: 'none'
  },
}))

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: 'Libre Franklin',
  fontSize: 26,
  paddingBottom: '1rem',

  [theme.breakpoints.down('md')]: {
    fontSize: 22
  },

  [theme.breakpoints.down(500)]: {
    fontSize: 16
  },

  [theme.breakpoints.down(380)]: {
    fontSize: 14
  },
}))

const Text = styled(Typography)(({ theme }) => ({
  fontFamily: 'Open Sans',
  fontSize: 17,
  padding: '0 2rem 2rem 2rem',

  [theme.breakpoints.down('md')]: {
    fontSize: 14,
    padding: '0 1rem 1rem 1rem',

  },

  [theme.breakpoints.down(500)]: {
    fontSize: 10
  },

  [theme.breakpoints.down(380)]: {
    fontSize: 9
  },
}))

function HowWeWork() {
  return (

    <Box style={{ background: '#b3d6e3' }}>
      <BoxMain>

        <SubHeading title="How We Work" content="Need a apartment repair? Contact us, and we'll do the work" />

        {WorkData.map(({ icon, title, text }, index) => {
          return (

            <BoxWork key={index}>
              <BoxItem>
                <BoxIcon> {icon} </BoxIcon>
                <Box style={{ background: 'white', height: '3px', margin: '1rem 0', width: '5%' }} />
                <BoxContent>
                  <Title> {title} </Title>
                  <Text> {text} </Text>
                </BoxContent>
              </BoxItem>
            </BoxWork>

          )
        })
        }

      </BoxMain>
    </Box>
  )
}

export default HowWeWork