import React from 'react';
import { Box, styled } from '@mui/system';
import { Typography, Button, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

import ServicesData from '../../const/ServicesData';
import '../Services/Services.css';

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import SubHeading from '../../const/SubHeading';

const BoxMain = styled(Box)(({ theme }) => ({
    margin: '0 auto',
    padding: '5rem 2rem',
    width: '75%',

    [theme.breakpoints.down(900)]: {
        width: '90%',
    },

    [theme.breakpoints.down(600)]: {
        width: '100%',
    },

    [theme.breakpoints.down(380)]: {
        padding: '1,2rem'
    }
}))

const StackCart = styled(Stack)({
    textAlign: 'center',
    minHeight: '100%',
    margin: '0 2rem',
})

const BoxButton = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3.5rem',

    [theme.breakpoints.down(360)]: {
        display: 'flex',
        flexDirection: 'column'
    }
}));

const Img = styled("img")(({ theme }) => ({
    width: 100,
    height: 100,
    marginTop: '1rem',

    [theme.breakpoints.down(1570)]: {
        width: 85,
        height: 85
    },

    [theme.breakpoints.down('sm')]: {
        width: 80,
        height: 80
    },

    [theme.breakpoints.down(470)]: {
        width: 60,
        height: 60
    },

    [theme.breakpoints.down(450)]: {
        display: 'none'
    }
}))

const Title = styled(Typography)(({ theme }) => ({
    fontFamily: 'Libre Franklin',
    fontWeight: 600,
    fontSize: 25,
    color: 'black',

    [theme.breakpoints.down(1570)]: {
        fontSize: 21
    },

    [theme.breakpoints.down(600)]: {
        fontSize: 20,
        padding: '0.7rem 0'
    },

    [theme.breakpoints.down(470)]: {
        fontSize: 17,        
    }
}))

const Text = styled(Typography)(({ theme }) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 18,
    color: 'black',

    [theme.breakpoints.down(1570)]: {
        fontSize: 15
    },

    [theme.breakpoints.down(600)]: {
        fontSize: 14
    },

    [theme.breakpoints.down(470)]: {
        fontSize: 12
    }
}))

const Price = styled(Typography)(({ theme }) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 22,
    color: 'black',

    [theme.breakpoints.down(1570)]: {
        fontSize: 19
    },

    [theme.breakpoints.down(600)]: {
        fontSize: 18
    },

    [theme.breakpoints.down(470)]: {
        fontSize: 14
    }
}))

const ButtonGet = styled(Button)(({ theme }) => ({
    fontFamily: 'Libre Franklin',
    marginRight: '1.5rem',
    background: '#0f2b36',
    letterSpacing: '0.1em',
    transition: '0.5s',

    "&:hover": {
        background: '#1c6785',
    },

    [theme.breakpoints.down("sm")]: {
        marginRight: '1.5rem',
        padding: '10px',
        fontSize: '13px',
    },

    [theme.breakpoints.down(460)]: {
        marginRight: '10px',
        padding: '5px',
        fontSize: '10px',

    },

    [theme.breakpoints.down(360)]: {
        margin: 0,
        marginBottom: '0.5rem',
    }
}))

const ButtonAbout = styled(Button)(({ theme }) => ({
    fontFamily: 'Libre Franklin',
    background: '#64ccf5',
    letterSpacing: '0.1em',
    color: 'white',
    border: '1px solid inherit',
    transition: '0.5s',

    "&:hover": {
        border: '1px solid #0f2b36',
        background: '#1c6785',
    },

    [theme.breakpoints.down("sm")]: {
        padding: '10px',
        fontSize: 13,
    },

    [theme.breakpoints.down(460)]: {
        padding: '5px',
        fontSize: 10,

    }
}))

function Services() {
    return (
        <Box id='services' style={{ background: '#d6e9f0' }}>
            <BoxMain>

                <SubHeading title="Services We Provide" content="Whatever work you need, we can handle with this." />

                <Swiper
                    slidesPerView={3}
                    spaceBetween={50}
                    slidesPerGroup={3}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    speed={1000}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        1124: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        1350: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        }
                    }}
                    className="mySwiper"
                    style={{
                        padding: ' 0 3rem 3.5rem 3rem'
                    }}
                >
                    {
                        ServicesData.map(({ img, title, text, price }, index) => {
                            return (
                                <SwiperSlide
                                    key={index}
                                    style={{
                                        background: '#fffef0',
                                        borderRadius: '20px',
                                        height: 'auto'
                                    }}>
                                    <StackCart
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={{
                                            xs: 1,
                                            sm: 3,
                                            md: 4,
                                            lg: 4
                                        }}

                                    >
                                        <Img src={img} alt='Content img' />
                                        <Title> {title} </Title>
                                        <Text> {text} </Text>
                                        <Price> {price} </Price>
                                    </StackCart>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <BoxButton>

                    <ButtonGet href='#contactUs' size='large' variant="contained">
                        Get free consultation
                    </ButtonGet>

                    <ButtonAbout href='#about' variant="outlined">
                        About Us
                    </ButtonAbout>
                </BoxButton>
            </BoxMain>
        </Box >
    )
}

export default Services