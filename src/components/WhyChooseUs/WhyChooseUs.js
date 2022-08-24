import React from 'react'
import { Box, styled } from '@mui/system'
import { Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";

import ChooseUsData from '../../const/ChooseUsData';
import ChooseImg from '../../assets//ChooseUs/choose_background.jpg';
import '../WhyChooseUs/WhyChooseUs.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import SubHeading from '../../const/SubHeading';

const BoxChoose = styled(Box)({
    background: 'url(' + ChooseImg + ')',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
})

const BoxMain = styled(Box)(({ theme }) => ({
    margin: '0 auto',
    padding: '2rem',
    width: '75%',

    [theme.breakpoints.down("md")]: {
        width: '90%',
    },

    [theme.breakpoints.down("sm")]: {
        width: '100%',
    },

    [theme.breakpoints.down(380)]: {
        padding: '1,2rem'
    }
}))

const BoxCarts = styled(Box)((theme) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
}))

const Img = styled("img")(({ theme }) => ({
    margin: '2rem',

    [theme.breakpoints.down(1570)]: {
        width: 85,
        height: 85
    },

    [theme.breakpoints.down(1350)]: {
        margin: '1.5rem'
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
    fontSize: 24,
    marginBottom: '1rem',

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
    fontSize: 17,
    margin: '0 4rem 4rem 4rem',

    [theme.breakpoints.down(1570)]: {
        fontSize: 15,
        margin: '0 3rem 3rem 3rem',
    },

    [theme.breakpoints.down(1350)]: {
        margin: '0 2rem 2rem 2rem'
    },

    [theme.breakpoints.down("sm")]: {
        fontSize: 14
    },

    [theme.breakpoints.down(470)]: {
        fontSize: 13
    }
}))

function WhyChooseUs() {
    return (
        <>
            <BoxChoose>
                <BoxMain>

                    <SubHeading title="Why Choose Us" content="We will provide excellent-quality work at an affordable cost." />

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={35}
                        pagination={{
                            clickable: true,
                        }}
                        grabCursor={true}
                        modules={[Pagination]}
                        className="mySwiper"
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
                        style={{
                            padding: '2rem 2rem 6rem 2rem',
                        }}
                    >
                        {ChooseUsData.map(({ img, title, text }, index) => {
                            return (
                                <SwiperSlide
                                    key={index}
                                    style={{
                                        height: 'auto',
                                        background: '#fafafa',
                                        borderTop: '8px solid #3a86b5',
                                    }}>
                                    <BoxCarts>
                                        <Img src={img} alt='Choose Img' />
                                        <Title> {title} </Title>
                                        <Text> {text} </Text>
                                    </BoxCarts>
                                </SwiperSlide>
                            )
                        })
                        }
                    </Swiper>
                </BoxMain>
            </BoxChoose>
        </>
    )
}

export default WhyChooseUs