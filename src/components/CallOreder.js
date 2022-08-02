import { React, useState } from 'react';
import { Box } from '@mui/system';
import { Button, styled, Typography, TextField, InputAdornment } from '@mui/material';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

import CallBg from '../assets/order_background.jpg';

const BoxMain = styled(Box)({
    backgroundImage: 'url(' + CallBg + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100% 30%',
    backgroundSize: '100%',

    width: '100%',
    height: '800px'
})

const BoxContent = styled(Box)({
    position: 'relative',
    top: '15%',
    left: '15%',
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    textAlign: 'left',
})

const BoxSend = styled(Box)({
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
})

const Header = styled(Typography)({
    fontFamily: 'Popins, sans-serif',
    fontWeight: 700,
    fontSize: 54,
})

const Content = styled(Typography)({
    fontFamily: 'Popins',
    fontWeight: 400,
    fontSize: 22,
})

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

function CallOreder() {

    const [value, setValue] = useState('');

    const sendPhoneNumber = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w9vskpw', 'template_cj6tf3a', e.target, 'gE4_CBdCqC3xQNgET')
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
        e.target.reset({ "values": {} });

    };

    return (
        <BoxMain>
            <BoxContent>
                <Header> There is no one to repair your apartment? </Header>
                <div style={{ background: 'white', height: '3px', margin: '1.5rem 0', width: '15%' }} />
                <Content> Fill the form right now and we'll call you back to fix it as soon as possible. </Content>
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
    )
}

export default CallOreder