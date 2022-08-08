import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import styled from 'styled-components';
import { IconButton, Typography } from '@mui/material';

import Companylogo from '../assets/companylogo.png';
import { BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs';
import { SiViber, SiGmail } from 'react-icons/si';

const BoxMain = styled(Box)({
    margin: '0 auto',
    padding: '2rem',
    width: '75%',
    display: 'flex',
    justifyContent: 'space-between',
})

const BoxCompany = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '30%',

})

const BoxButton = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'

})

const BoxContact = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
})

const BoxSocial = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: '2.5rem'
})

const BoxIcon = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
})

function Footer() {

    return (
        <Box>
            <BoxMain>

                <BoxCompany>
                    <img src={Companylogo} alt='Company Logo' style={{ width: '120px', height: '100px' }} />
                    <Typography> MEO company </Typography>
                    <Typography style={{ fontSize: '14px', marginTop: '0.5rem' }}> MEO company is a company that has been installing and renovating apartments in Kyiv & Kyiv region for 10 years. </Typography>
                </BoxCompany>

                <BoxButton>
                    <Link style={{ textDecoration: 'none', marginBottom: '0.8rem', color: 'black' }} to='/about' > <Typography> About us </Typography> </Link>
                    <Link style={{ textDecoration: 'none', marginBottom: '0.8rem', color: 'black' }} to='' > <Typography> Our Services </Typography> </Link>
                    <Link style={{ textDecoration: 'none', marginBottom: '0.8rem', color: 'black' }} to='' > <Typography> Showcase </Typography> </Link>
                    <Link style={{ textDecoration: 'none', marginBottom: '0.8rem', color: 'black' }} to=''> <Typography> Testimonials </Typography> </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='' > <Typography> Contacts </Typography> </Link>
                </BoxButton>

                <BoxContact>
                    <Box>
                        <Typography> Contact Us </Typography>
                    </Box>

                    <Box style={{ display: 'flex', textAlign: 'center' }}>
                        <Typography>
                            Tel: +380 97 897 50 64 <br />
                            Tel: +380 97 897 50 64 <br />
                            Email: ogidj88@gmail.com
                        </Typography>
                    </Box>
                </BoxContact>

                <BoxSocial>
                    <Box>
                        <Typography> Follow Us </Typography>
                    </Box>
                    <BoxIcon>
                        <IconButton to='/about'> <BsFacebook style={{ color: '#74b6cf' }} /> </IconButton >
                        <IconButton to='/about'> <BsInstagram style={{ color: '#74b6cf' }} /> </IconButton >
                        <IconButton to='/about'> <BsTelegram style={{ color: '#74b6cf' }} /> </IconButton >
                        <IconButton to='/about'> <SiViber style={{ color: '#74b6cf' }} /> </IconButton >
                        <IconButton to='/about'> <SiGmail style={{ color: '#74b6cf' }} /> </IconButton >
                    </BoxIcon>
                </BoxSocial>
            </BoxMain>

            <Box style={{margin: '2rem auto', width: '75%'}}>
                <Box>
                    <div style={{ background: 'black', height: '1px', margin: '1rem 0' }} />
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography> © Created by Vladyslav Mazurets</Typography>
                    <Typography> All rights Reserved </Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default Footer