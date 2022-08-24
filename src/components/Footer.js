import React from 'react';
import { Box, styled } from '@mui/system'
import { Typography, Link, IconButton } from '@mui/material';

import Companylogo from '../assets/companylogo.png';
import { BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs';
import { SiViber} from 'react-icons/si';

const BoxMain = styled(Box)(({ theme }) => ({
    margin: '0 auto',
    padding: '2rem',
    width: '75%',

    [theme.breakpoints.down(1200)]: {
        width: '85%',
    },

    [theme.breakpoints.down(1000)]: {
        width: '95%',
        padding: '1.5rem'
    },

    [theme.breakpoints.down(380)]: {
        padding: '1,2rem'
    }
}));

const BoxFooter = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.down(700)]: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem'
    },
}))

const BoxCompany = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '30%',

    [theme.breakpoints.down(700)]: {
        alignItems: 'center',
        textAlign: 'center',
        width: 'auto'
    },
}));

const BoxLink = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

});

const BoxContact = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
});

const BoxNumber = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
})

const BoxSocial = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
});

const BoxIcon = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
});

const BoxCreated = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.down(700)]: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
    },
}))

const Img = styled("img")(({ theme }) => ({
    width: '120px',
    height: '100px',
    display: 'block',

    [theme.breakpoints.down(1000)]: {
        width: '100px',
        height: '80px',
    },
}))

const SocialIcon = styled(IconButton)(({theme}) => ({
    color: '#4086a1',
    fontSize: 25,
    marginBottom: '1rem',
    transition: '0.35s',

    "&:hover": {
        color: 'white',
        background: 'none'
    },

    [theme.breakpoints.down(900)]: {
        fontSize: 22,
    },
}))

const Title = styled(Typography)(({theme}) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 20,

    [theme.breakpoints.down(900)]: {
        fontSize: 17,
    },

    [theme.breakpoints.down(700)]: {
        marginBottom: '1.5rem'
    },
}))

const Text = styled(Typography)(({theme}) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 16,
    margin: '1rem 0',

    [theme.breakpoints.down(900)]: {
        fontSize: 14,
    },

    [theme.breakpoints.down(700)]: {
        margin: 0
    },
}))

const TypoLink = styled(Typography)(({theme}) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 18,

    [theme.breakpoints.down(900)]: {
        fontSize: 16,
    },
}))

const TypoNumber = styled(Typography)(({theme}) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 16,

    [theme.breakpoints.down(900)]: {
        fontSize: 14,
    },
}))

const TypoCreated = styled(Typography)(({theme}) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 18,

    [theme.breakpoints.down(900)]: {
        fontSize: 16,
    },
}))

function Footer() {

    return (
        <Box style={{ background: '#d6e9f0' }}>
            <BoxMain>
                <BoxFooter>
                    <BoxCompany>
                        <Link href="#">
                            <Img src={Companylogo} alt='Company Logo' />
                        </Link>
                        <Title> MEO company </Title>
                        <Text>
                            MEO company is a company that has been installing and renovating apartments in Kyiv & Kyiv region for 10 years.
                        </Text>
                    </BoxCompany>

                    <BoxLink>
                        <Link href="#about" color="inherit" underline="hover" style={{ marginBottom: '0.8rem' }}  >
                            <TypoLink> About us </TypoLink>
                        </Link>
                        <Link href="#services" color="inherit" underline="hover" style={{ marginBottom: '0.8rem' }}  >
                            <TypoLink> Our Services </TypoLink>
                        </Link>
                        <Link href="#showCase" color="inherit" underline="hover" style={{ marginBottom: '0.8rem' }}  >
                            <TypoLink> Showcase </TypoLink>
                        </Link>
                        <Link href="#testimonials" color="inherit" underline="hover" style={{ marginBottom: '0.8rem' }} >
                            <TypoLink> Testimonials </TypoLink>
                        </Link>
                        <Link href="#contactUs" color="inherit" underline="hover">
                            <TypoLink> Contacts </TypoLink>
                        </Link>
                    </BoxLink>

                    <BoxContact>
                        <Title> Contact Us </Title>
                        <BoxNumber>
                            <Link href='tel:+380978975064' color="inherit" underline="hover" style={{ marginBottom: '0.5rem' }}>
                                <TypoNumber> +380 97 897 50 64 </TypoNumber>
                            </Link>
                            <Link href='tel:+380978975064' color="inherit" underline="hover" style={{ marginBottom: '0.5rem' }}>
                                <TypoNumber> +380 97 897 50 64 </TypoNumber>
                            </Link>
                            <Link href='mailto:ogidj88@gmail.com' color="inherit" underline="hover">
                                <TypoNumber> ogidj88@gmail.com </TypoNumber>
                            </Link>
                        </BoxNumber>
                    </BoxContact>

                    <BoxSocial>
                        <Title> Follow Us </Title>
                        <BoxIcon>
                            <SocialIcon aria-label='facebook.com' onClick={() => window.open('https://www.facebook.com/profile.php?id=100001731765715')}>
                                <BsFacebook />
                            </SocialIcon >
                            <SocialIcon aria-label='instagram.com' onClick={() => window.open('https://www.instagram.com/evgenmazurets/')}>
                                <BsInstagram />
                            </SocialIcon >
                            <SocialIcon aria-label='telegram.org' onClick={() => window.open('https://web.telegram.org/k/#555445824')}>
                                <BsTelegram />
                            </SocialIcon >
                            <SocialIcon aria-label='viber.com' onClick={() => window.open('https://www.viber.com/')}>
                                <SiViber />
                            </SocialIcon >
                        </BoxIcon>
                    </BoxSocial>
                </BoxFooter>

                <div style={{ background: 'black', height: '1px', margin: '1rem 0' }} />

                <BoxCreated>
                    <TypoCreated> © Created by Vladyslav Mazurets</TypoCreated>
                    <TypoCreated> All rights Reserved </TypoCreated>
                </BoxCreated>

            </BoxMain>


        </Box>
    )
}

export default Footer