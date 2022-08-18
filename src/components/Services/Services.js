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
    padding: '2rem',
    width: '75%',

    [theme.breakpoints.down("md")]: {
        width: '90%',
    },

    [theme.breakpoints.down("sm")]: {
        width: '100%',
    }
}))

const StackCart = styled(Stack)({
    textAlign: 'center',
    minHeight: '100%',
    margin: '0 2rem',

})

const BoxButton = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem'
});

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
    }
}))

const Title = styled(Typography)(({ theme }) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 25,

    [theme.breakpoints.down(1570)]: {
        fontSize: 21
    },

    [theme.breakpoints.down("sm")]: {
        fontSize: 20
    },

    [theme.breakpoints.down(470)]: {
        fontSize: 17
    }
}))

const Text = styled(Typography)(({ theme }) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 18,

    [theme.breakpoints.down(1570)]: {
        fontSize: 15
    },

    [theme.breakpoints.down("sm")]: {
        fontSize: 14
    },

    [theme.breakpoints.down(470)]: {
        fontSize: "4px"
    }
}))

const Price = styled(Typography)(({ theme }) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 22,

    [theme.breakpoints.down(1570)]: {
        fontSize: 19
    },

    [theme.breakpoints.down("sm")]: {
        fontSize: 18
    },

    [theme.breakpoints.down(470)]: {
        fontSize: 10
    }
}))

const ButtonGet = styled(Button)(({ theme }) => ({
    fontFamily: 'Libre Franklin',
    marginRight: '1.5rem',
    background: '#024966',

    [theme.breakpoints.down("sm")]: {
        marginRight: '1.5rem',
        padding: '10px',
        fontSize: '13px',
    },

    [theme.breakpoints.down(460)]: {
        marginRight: '10px',
        padding: '5px',
        fontSize: '10px',

    }
}))

const ButtonAbout = styled(Button)(({ theme }) => ({
    fontFamily: 'Libre Franklin',
    background: 'none',
    color: 'white',
    border: '1px solid #0f2b36',

    [theme.breakpoints.down("sm")]: {
        padding: '10px',
        fontSize: '13px',
    },

    [theme.breakpoints.down(460)]: {
        padding: '5px',
        fontSize: '10px',

    }
}))

function Services2() {
    return (
        <Box id='services' style={{ background: '#96bed6' }}>
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
                                        background: '#fafafa',
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

export default Services2