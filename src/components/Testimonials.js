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

const BoxMaim = styled(Box)({
    background: '#d6e9f0',
    textAlign: 'center',
    padding: '2rem',
    paddingBottom: '2rem'
})

const BoxImg = styled(Box)({
    width: '9rem',
    aspectRatio: '1/1',
    overflow: 'hidden',
    borderRadius: '50%',
    margin: '0 auto 1rem'
});

const SwiperName = styled(Typography)({
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: '0.5rem'
})

const SwiperContent = styled(Typography)({
    fontWeight: 300,
    display: 'block',
    width: '80%',
    margin: '1rem auto 0'
})

const SwiperDate = styled(Typography)({
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 16,
    marginTop: '1rem'
})

function ShowCase() {
    return (
        <>
            <BoxMaim id='testimonials'>
                <Box style={{ width: '75%', display: 'flex', flexDirection: 'column', margin: '0 auto', }}>
                    <SubHeading title="Testimonials" content="We are always happy to receive feedback from our customers who live in cozy newly renovated houses." />

                    <Swiper
                        modules={[Pagination]}
                        grabCursor={true}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        style={{
                            width: '40%',
                            paddingBottom: '6rem',
                            marginTop: '1rem'
                        }}>
                        {TestimonialsData.map(({ avatar, name, text, date }, index) => {
                            return (
                                <SwiperSlide key={index}
                                    style={{
                                        background: '#f5f3e9',
                                        borderRadius: '2rem',
                                        padding: '4rem 0 4rem 0'
                                    }}>
                                    <BoxImg>
                                        <img src={avatar} alt='Testimonials Avatar' />
                                    </BoxImg>
                                    <SwiperName>{name}</SwiperName>
                                    <SwiperContent>{text}</SwiperContent>
                                    <SwiperDate> {date} </SwiperDate>
                                </SwiperSlide>
                            )
                        })
                        }

                    </Swiper>
                </Box>
            </BoxMaim>
        </>
    )
}

export default ShowCase