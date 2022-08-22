import { React, useState } from 'react';
import { Box } from '@mui/system';
import { Button, styled, Typography, TextField, InputAdornment } from '@mui/material';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

import CallBg from '../assets/order_background.jpg';

const BoxBg = styled(Box)(({ theme }) => ({
    backgroundImage: 'url(' + CallBg + ')',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',

    height: '950px',

    [theme.breakpoints.down(380)]: {
        height: '750px',
    }
}))

const BoxMain = styled(Box)(({ theme }) => ({
    position: 'relative',
    padding: '2rem',
    left: '10%',
    top: '20%',

    [theme.breakpoints.down(1200)]: {
        left: '5%',
        top: '23%'
    },

    [theme.breakpoints.down(450)]: {
        left: 0,
        top: '15%'
    },

    [theme.breakpoints.down()]: {

    }
}))

const BoxContent = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '35%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    textAlign: 'left',

    [theme.breakpoints.down(1200)]: {
        width: '45%'
    },

    [theme.breakpoints.down(900)]: {
        width: '55%'
    },

    [theme.breakpoints.down(700)]: {
        width: '70%'
    },

    [theme.breakpoints.down(450)]: {
        width: '100%'
    }
}))

const BoxSend = styled(Box)({
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
})

const Header = styled(Typography)(({ theme }) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 54,

    [theme.breakpoints.down(1200)]: {
        fontSize: 45
    },

    [theme.breakpoints.down(700)]: {
        fontSize: 30

    },

    [theme.breakpoints.down()]: {

    }
}))

const Content = styled(Typography)(({ theme }) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 22,

    [theme.breakpoints.down(1200)]: {
        fontSize: 17
    },

    [theme.breakpoints.down(700)]: {
        fontSize: 15

    },

    [theme.breakpoints.down()]: {

    }
}))

const ButtonOrder = styled(Button)({
    width: '100%',
    background: 'none',
    fontFamily: 'Popins, sans-serif',
    fontWeight: 600,
    color: 'black',
    border: '1px solid black',
    transition: '0.5s',

    "&:hover": {
        background: 'white',
    }
})

function CallOrder() {

    const [value, setValue] = useState('');

    const sendPhoneNumber = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w9vskpw', 'template_cj6tf3a', e.target, 'gE4_CBdCqC3xQNgET')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Request sent successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: "Something went wrong",
                    text: error.text,
                })
            });
        e.target.reset(setValue(''));

    };

    return (
        <BoxBg id="callOrder">
            <BoxMain>
                <BoxContent>
                    <Header>
                        There is no one to repair your apartment?
                    </Header>
                    <div style={{ background: 'white', height: '3px', margin: '1.5rem 0', width: '15%' }} />
                    <Content>
                        Fill the form right now and we'll call you back to fix it as soon as possible.
                    </Content>
                    <BoxSend>
                        <form onSubmit={sendPhoneNumber}>

                            <TextField
                                label="Phone number"
                                type='tel'
                                name='phone'
                                InputProps={{
                                    inputProps: { minLength: 10, maxLength: 10 },
                                    startAdornment: <InputAdornment position='start'> +38 </InputAdornment>,
                                }}
                                margin="normal"
                                fullWidth
                                variant="outlined"
                                value={value}
                                onChange={e => setValue(e.target.value.replace(/\D/g, ''))}
                                error={((value.length) > 0) && ((value.length) < 10)}
                                required
                            />

                            <ButtonOrder type='sabmit' size='large' variant="outlined"> Send a request </ButtonOrder>

                        </form>
                    </BoxSend>
                </BoxContent>
            </BoxMain>
        </BoxBg>
    )
}

export default CallOrder