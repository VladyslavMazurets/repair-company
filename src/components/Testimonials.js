import React from 'react'
import { Box, styled } from '@mui/system'
import { Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";

import SubHeading from '../const/SubHeading';
import TestimonialsData from '../const/TestimonialsData';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const BoxBg = styled(Box)({
    background: '#d6e9f0',
})

const BoxMain = styled(Box)(({ theme }) => ({
    margin: '0 auto',
    padding: '5rem 2rem',
    width: '75%',

    [theme.breakpoints.down(1200)]: {
        width: '85%',
    },

    [theme.breakpoints.down(900)]: {
        width: '100%',
    },

    [theme.breakpoints.down(380)]: {
        padding: '1,2rem'
    }
}))

const BoxCarts = styled(Box)(({theme}) => ({
    background: '#f5f3e9',
    borderRadius: '2rem',
    padding: '3rem 0',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width:'65%',

    [theme.breakpoints.down(800)]: {
        width: '85%',
    },

    [theme.breakpoints.down(500)]: {
        width: '100%',
    },
}))

const Img = styled("img")({
    width: '9rem',
    aspectRatio: '1/1',
    overflow: 'hidden',
    borderRadius: '50%',
    margin: '0 auto 1rem'
})

const SwiperName = styled(Typography)(({theme}) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 26,

    [theme.breakpoints.down(500)]: {
        fontSize: 20,
    },
}))

const SwiperContent = styled(Typography)(({theme}) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 16,
    width: '80%',
    margin: '2rem auto',

    [theme.breakpoints.down(500)]: {
        fontSize: 15,
    },
}))

const SwiperDate = styled(Typography)({
    fontFamily: 'Libre Franklin',
    fontSize: 14,
})

function ShowCase() {
    return (
        <>
            <BoxBg id='testimonials'>
                <BoxMain>

                    <SubHeading title="Testimonials" content="We are always happy to receive feedback from our customers who live in cozy newly renovated houses." />

                    <Swiper
                        modules={[Pagination]}
                        grabCursor={true}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        style={{
                            paddingBottom: '6rem',
                            marginTop: '1rem',
                        }}>
                        
                        {TestimonialsData.map(({ avatar, name, text, date }, index) => {
                            return (
                                <SwiperSlide key={index}
                                    style={{
                                        height: 'auto',
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                    <BoxCarts>
                                        <Img src={avatar} alt='Avatar' />
                                        <SwiperName>{name}</SwiperName>
                                        <SwiperContent>{text}</SwiperContent>
                                        <SwiperDate> {date} </SwiperDate>
                                    </BoxCarts>
                                </SwiperSlide>
                            )
                        })
                        }
                    </Swiper>
                </BoxMain>
            </BoxBg>
        </>
    )
}

export default ShowCase