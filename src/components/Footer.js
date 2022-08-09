import React from 'react';
import { Box } from '@mui/system';
import styled from 'styled-components';
import { IconButton, Typography, Link } from '@mui/material';

import Companylogo from '../assets/companylogo.png';
import { BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs';
import { SiViber, SiGmail } from 'react-icons/si';

const BoxMain = styled(Box)({
    margin: '0 auto',
    padding: '2rem',
    width: '75%',
    display: 'flex',
    justifyContent: 'space-between',
});

const BoxCompany = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '30%',

});

const BoxButton = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'

});

const BoxContact = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
});

const BoxSocial = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: '1rem'
});

const BoxIcon = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
});

const LinkContact = styled(Link)({
    marginBottom: '10rem',
});

function Footer() {

    return (
        <Box style={{ background: '#d6e9f0' }}>
            <BoxMain>

                <BoxCompany>
                    <img src={Companylogo} alt='Company Logo' style={{ width: '120px', height: '100px', display: 'block' }} />
                    <Typography> MEO company </Typography>
                    <Typography style={{ fontSize: '16px', fontFamily: 'Popins', marginTop: '0.5rem' }}>
                        MEO company is a company that has been installing and renovating apartments in Kyiv & Kyiv region for 10 years.
                    </Typography>
                </BoxCompany>

                <BoxButton>
                    <Link href="#about" color="inherit" underline="hover" style={{ marginBottom: '0.8rem'}}  >
                        <Typography> About us </Typography>
                    </Link>
                    <Link href="#services" color="inherit" underline="hover" style={{ marginBottom: '0.8rem'}}  >
                        <Typography> Our Services </Typography>
                    </Link>
                    <Link href="#showCase" color="inherit" underline="hover" style={{ marginBottom: '0.8rem'}}  >
                        <Typography> Showcase </Typography>
                    </Link>
                    <Link href="#testimonials" color="inherit" underline="hover" style={{ marginBottom: '0.8rem'}} >
                        <Typography> Testimonials </Typography>
                    </Link>
                    <Link href="#contactUs" color="inherit" underline="hover">
                        <Typography> Contacts </Typography>
                    </Link>
                </BoxButton>

                <BoxContact>
                    <Box>
                        <Typography> Contact Us </Typography>
                    </Box>

                    <Box style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                        <LinkContact href='tel:+380978975064' color="inherit" underline="hover">
                            <Typography> +380 97 897 50 64 </Typography>
                        </LinkContact>
                        <LinkContact href='tel:+380978975064' color="inherit" underline="hover">
                            <Typography> +380 97 897 50 64 </Typography>
                        </LinkContact>
                        <LinkContact href='mailto:ogidj88@gmail.com' color="inherit" underline="hover">
                            <Typography> ogidj88@gmail.com </Typography>
                        </LinkContact>
                    </Box>
                </BoxContact>

                <BoxSocial>
                    <Box>
                        <Typography> Follow Us </Typography>
                    </Box>
                    <BoxIcon>
                        <IconButton aria-label='facebook.com' onClick={() => window.open('https://www.facebook.com/')}>
                            <BsFacebook style={{ color: '#74b6cf' }} />
                        </IconButton >
                        <IconButton aria-label='instagram.com' onClick={() => window.open('https://instagram.com/')}>
                            <BsInstagram style={{ color: '#74b6cf' }} />
                        </IconButton >
                        <IconButton aria-label='telegram.org' onClick={() => window.open('https://web.telegram.org/')}>
                            <BsTelegram style={{ color: '#74b6cf' }} />
                        </IconButton >
                        <IconButton aria-label='viber.com' onClick={() => window.open('https://www.viber.com/')}>
                            <SiViber style={{ color: '#74b6cf' }} />
                        </IconButton >
                        <IconButton aria-label='google.com' onClick={() => window.open('https://mail.google.com/')}>
                            <SiGmail style={{ color: '#74b6cf' }} />
                        </IconButton >
                    </BoxIcon>
                </BoxSocial>
            </BoxMain>

            <Box style={{ margin: '0 auto', paddingBottom: '2rem', width: '75%' }}>
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