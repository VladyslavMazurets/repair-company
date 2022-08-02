import React from 'react'
import { Box } from '@mui/system'
import SubHeading from '../const/SubHeading'
import styled from '@emotion/styled'
import { Button, Stack, TextField, Typography } from '@mui/material'
import TextareaAutosize from '@mui/base/TextareaAutosize';

import { MdEmail } from 'react-icons/md'
import { FaViber } from 'react-icons/fa'
import { SiTelegram } from 'react-icons/si'

const BoxMain = styled(Box)({
    background: '#d6e9f0',
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
    padding: '2rem 5rem 2rem 5rem',

    border: '1px solid transparent',
    borderRadius: '1.2rem',
    background: '#acd6e6'
})

const BoxIcon = styled(Box)({
    fontSize: '1.8rem',
})

const TextArea = styled(TextareaAutosize)({
    width: '100%',
    marginTop: '1.2rem',
    padding: '1rem',
    border: '2px solid blue',
    borderRadius: '0.5rem',

    resize: 'none',
    background: 'none'
})

const ButtonSocial = styled(Button)({
    marginTop: '0.3rem'
})

function ContactUs() {
    return (

        <BoxMain>

            <SubHeading title='Contact Us' content='Call us or fill out the form below and describe your problem.' />

            <Stack direction='row' alignItems='flex-start' justifyContent="center" spacing={15}>
                <Box>
                    <Stack spacing={3}>
                        <BoxSocial>
                            <BoxSocialItem>
                                <BoxIcon> <MdEmail /> </BoxIcon>
                                <Typography> Email <br /> ogidj88@gmail.com </Typography>
                                <ButtonSocial> Send a message </ButtonSocial>
                            </BoxSocialItem>

                            <BoxSocialItem>
                                <BoxIcon> <FaViber /> </BoxIcon>
                                <Typography> Viber <br /> +380 97 897 50 64 </Typography>
                                <ButtonSocial> Send a message </ButtonSocial>
                            </BoxSocialItem>

                            <BoxSocialItem>
                                <BoxIcon> <SiTelegram /> </BoxIcon>
                                <Typography> Telegram <br /> +380 97 897 50 64 </Typography>
                                <ButtonSocial> Send a message </ButtonSocial>
                            </BoxSocialItem>
                        </BoxSocial>
                    </Stack>
                </Box>

                <Box component='form' 
                style={{ }}>
                    
                    <TextField
                        required
                        label="Your Full Name"
                        type='text'
                        name='name'
                        margin="normal"
                        fullWidth
                    />

                    <TextField
                        required
                        label="Your Email"
                        type='email'
                        name='email'
                        margin="normal"
                        fullWidth
                    />

                    <TextArea
                        name='text'
                        placeholder="Your Message"
                        minRows={7}
                    />

                    <Button> Send a message </Button>

                </Box>

            </Stack>
        </BoxMain>
    )
}

export default ContactUs