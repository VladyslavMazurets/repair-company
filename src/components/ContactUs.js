import React, { useState, useRef } from 'react'
import { Box } from '@mui/system'
import SubHeading from '../const/SubHeading'
import styled from '@emotion/styled'
import { Button, Stack, TextField, Typography, TextareaAutosize } from '@mui/material'

import Swal from 'sweetalert2'
import emailjs from 'emailjs-com';


import { MdEmail } from 'react-icons/md'
import { FaViber } from 'react-icons/fa'
import { SiTelegram } from 'react-icons/si'

import ContactBg from '../assets/contactbg.jpg';
import TelegramQr from '../assets/telegramqr.jpg';

const BoxBg = styled(Box)({
    background: 'url(' + ContactBg + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100% 50%',
    backgroundSize: '100%',
    padding: '2rem'
})

const BoxMain = styled(Box)({
    margin: '0 auto',
    padding: '2rem',
    width: '75%'
})

const BoxSocial = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

const BoxSocialItem = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',

    marginBottom: '2rem',
    padding: '1.5rem 6rem 1.5rem 6rem',

    border: '1px solid transparent',
    borderRadius: '1.2rem',
    background: '#acd6e6',
    transition: '0.5s',

    "&:hover": {
        background: 'white',
        border: '1px solid blue'
    }
})

const BoxIcon = styled(Box)({
    color: 'blue',
    fontSize: '1.8rem',
})

const TextArea = styled(TextareaAutosize)({
    fontSize: '1rem',
    width: '100%',
    marginTop: '1rem',
    padding: '1rem',
    border: '2px solid black',
    borderRadius: '0.5rem',

    resize: 'none',
    background: 'none',
    backgroundColor: 'white',
    transition: '0.3s',

    "&:hover": {
        border: '2px solid blue'
    }
})

const TypographySocial = styled(Typography)({
    fontFamily: 'Libre Franklin',
    fontSize: 15,
    fontWeight: 'normal',
})

const Input = styled(TextField)({

    '& label.Mui-focused': {
        color: 'blue',
    },

    '& .MuiOutlinedInput-root': {
        borderRadius: '0.5rem',
        backgroundColor: 'white',

        '& fieldset': {
            borderColor: 'black',
            borderWidth: '2px'
        },

        '&:hover fieldset': {
            borderColor: 'blue',
            borderWidth: '2px'
        },

        '&.Mui-focused fieldset': {
            borderColor: 'blue',
            borderWidth: '2px'
        },

    },
})

const ButtonSocial = styled(Button)({
    padding: '0.5rem',
    marginTop: '0.3rem',
    fontFamily: 'Libre Franklin',
    fontWeight: 'bold',
    transition: '0.8s',

    "&:hover": {
        color: 'black',
    }
})

const ButtonMail = styled(Button)({
    marginTop: '0.5rem',
    padding: '.5rem',

    fontFamily: 'Libre Franklin',
    fontWeight: 'bold',
    color: 'black',
    background: 'skyblue',

    border: '1px solid transparent',
    borderRadius: '0.5rem',
    transition: '0.8s',

    "&:hover": {
        background: 'white',
        border: '1px solid skyblue'
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
        e.target.reset({"values": {}}, setValueName(''));

    };

    return (

        <BoxBg id='contactUs'>
            <BoxMain>

                <SubHeading title='Contact Us' content='Call us or fill out the form below and describe your problem.' />

                <Stack direction='row' alignItems='flex-start' justifyContent="center" spacing={15}>
                    <Box>
                        <Stack spacing={3}>
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
                        </Stack>
                    </Box>

                    <form component='form' ref={form} onSubmit={sendEmail} style={{ marginTop: '2rem' }}>

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