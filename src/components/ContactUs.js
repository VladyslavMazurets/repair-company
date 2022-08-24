import { React, useRef, useState } from 'react';
import { Box, styled } from '@mui/system';
import { Button, Stack, Typography, TextField, TextareaAutosize } from '@mui/material';

import { MdEmail } from 'react-icons/md';
import { FaViber } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';

import Swal from 'sweetalert2'
import emailjs from 'emailjs-com';

import SubHeading from '../const/SubHeading';
import ContactBg from '../assets/contactbg.jpg';
import TelegramQr from '../assets/telegramqr.jpg';

const BoxBg = styled(Box)({
    background: 'url(' + ContactBg + ')',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
})

const BoxMain = styled(Box)(({ theme }) => ({
    margin: '0 auto',
    padding: '4rem 2rem',
    width: '75%',

    [theme.breakpoints.down(1701)]: {
        width: '85%',
    },

    [theme.breakpoints.down(1500)]: {
        width: '100%',
    },

    [theme.breakpoints.down(1200)]: {
        width: '75%'
    },

    [theme.breakpoints.down(600)]: {
        width: '90%'
    },

    [theme.breakpoints.down(400)]: {
        width: '100%'
    },
}))

const BoxSocial = styled(Box)(({theme}) => ({
    width: '25%',
    
    [theme.breakpoints.down(1200)]: {
        width: '100%'
    }
}))

const BoxSocialItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    
    marginBottom: '2rem',
    padding: '1.5rem 3rem',

    border: '1px solid transparent',
    borderRadius: '1.2rem',
    background: '#acd6e6',
    transition: '0.5s',

    "&:hover": {
        background: 'white',
        border: '1px solid #5d95e3'
    },

    [theme.breakpoints.down(1200)]: {
        marginBottom: 0,
        marginTop: '1.5rem'
    },

    [theme.breakpoints.down(400)]: {
        padding: '0.5rem',

    }
}))

const BoxIcon = styled(Box)({
    color: '#5d95e3',
    fontSize: '1.8rem',
})

const ButtonSocial = styled(Button)({
    fontFamily: 'Libre Franklin',
    fontSize: 14,
    marginTop: '1rem',
    transition: '0.8s',

    "&:hover": {
        background: 'none',
        color: 'black',
    }
})

const ButtonMail = styled(Button)({
    marginTop: '0.5rem',
    padding: '.5rem',

    fontFamily: 'Libre Franklin',
    color: 'white',
    background: '#64ccf5',

    border: '1px solid inherit',
    borderRadius: '0.5rem',
    transition: '0.8s',

    "&:hover": {
        border: '1px solid #0f2b36',
        background: '#1c6785',
    }
})

const TypographySocial = styled(Typography)(({ theme }) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 17,
}))

const Input = styled(TextField)({

    '& label.Mui-focused': {
        color: 'black',
    },

    '& .MuiOutlinedInput-root': {
        borderRadius: '0.5rem',
        backgroundColor: 'white',

        '& fieldset': {
            borderColor: '#223d63',
            borderWidth: '2px'
        },

        '&:hover fieldset': {
            borderColor: '#5d95e3',
            borderWidth: '2px'
        },

        '&.Mui-focused fieldset': {
            borderColor: '#5d95e3',
            borderWidth: '2px'
        },

    },
})

const TextArea = styled(TextareaAutosize)({
    fontSize: 17,
    width: '100%',
    marginTop: '1rem',
    padding: '1rem',
    border: '2px solid #223d63',
    borderRadius: '0.5rem',

    resize: 'none',
    background: 'none',
    backgroundColor: 'white',
    transition: '0.3s',

    "&:hover": {
        border: '2px solid #5d95e3'
    }
})

function ContactUs() {

    const [valueName, setValueName] = useState('');
    const form = useRef();

    const ShowViber = () => {
        Swal.fire({
            title: 'Viber QR-code',
            imageUrl: TelegramQr,
            showCancelButton: true,
            showConfirmButton: false,
            cancelButtonColor: '#DD6B55',
        })
    }

    const ShowTelegram = () => {
        Swal.fire({
            title: 'Telegram QR-code',
            imageUrl: TelegramQr,
            showCancelButton: true,
            showConfirmButton: false,
            cancelButtonColor: '#DD6B55',
        })
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qv77142', 'template_pn7u2to', form.current, 'gE4_CBdCqC3xQNgET')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message sent sucessfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: "Something went wrong",
                    text: error.text,
                })
            });
        e.target.reset({ "values": {} }, setValueName(''));

    };

    return (
        <BoxBg id='contactUs'>
            <BoxMain>

                <SubHeading title='Contact Us' content='Call us or fill out the form below and describe your problem.' />

                <Stack
                    direction={{xs:'column', sm:'column', md:'column', lg:'row', xl:'row'}}
                    alignItems={{ lg:"flex-start", xl:'flex-start'}}
                    justifyContent="center"
                    spacing={{md: 8, lg: 10, xl: 15 }}
                >

                    <BoxSocial>
                        <BoxSocialItem>
                            <BoxIcon> <MdEmail /> </BoxIcon>
                            <TypographySocial> Email <br /> ogidj88@gmail.com </TypographySocial>
                            <ButtonSocial href='mailto:ogidj88@gmail.com' target='_blank'> Send a message </ButtonSocial>
                        </BoxSocialItem>

                        <BoxSocialItem>
                            <BoxIcon> <FaViber /> </BoxIcon>
                            <TypographySocial> Viber <br /> +380 97 897 50 64 </TypographySocial>
                            <ButtonSocial onClick={ShowViber}> Show QR-code </ButtonSocial>
                        </BoxSocialItem>

                        <BoxSocialItem>
                            <BoxIcon> <SiTelegram /> </BoxIcon>
                            <TypographySocial> Telegram <br /> +380 97 897 50 64 </TypographySocial>
                            <ButtonSocial onClick={ShowTelegram}> Show QR-code </ButtonSocial>
                        </BoxSocialItem>
                    </BoxSocial>

                    <form component='form' ref={form} onSubmit={sendEmail} style={{ marginTop: '1rem' }}>

                        <Input
                            label="Your Full Name"
                            type='text'
                            name='name'
                            value={valueName}
                            onChange={e => setValueName(e.target.value.replace(/[^a-zа-яё\s]/gi, ''))}
                            InputProps={{
                                inputProps: { minLength: 0, maxLength: 25 },
                            }}
                            fullWidth
                            margin='normal'
                            required
                        />

                        <Input
                            label="Your Email"
                            type='email'
                            name='email'
                            margin='normal'
                            fullWidth
                            required
                        />

                        <TextArea
                            name='text'
                            placeholder="Your Message"
                            minRows={15}
                            required
                        />

                        <ButtonMail type='submit' size='large' variant="outlined"> Send a message </ButtonMail>

                    </form>

                </Stack>
            </BoxMain>
        </BoxBg>
    )
}

export default ContactUs