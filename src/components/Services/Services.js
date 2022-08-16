import React from 'react'
import { Box } from '@mui/system'
import { Typography, Button } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';

import ServicesData from '../../const/ServicesData';
import '../Services/Services.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import styled from 'styled-components';
import SubHeading from '../../const/SubHeading';

const BoxMain = styled(Box)({
    padding: '2rem',
    margin: '0 auto',
    padding: '2rem',
    width: '75%',
})

const BoxImg = styled(Box)({
    margin: '2rem 0'
});

const BoxButton = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem'
});

function Services() {
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
                    className="mySwiper"

                    style={{ padding: ' 0 3rem 3.5rem 3rem' }}
                >
                    {
                        ServicesData.map(({ img, title, text, price }, index) => {
                            return (
                                <SwiperSlide key={index}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        background: '#fafafa',
                                        borderRadius: '20px'
                                    }}>
                                    <BoxImg>
                                        <img src={img} alt='Content img' width={100} height={100} />
                                    </BoxImg>
                                    <Typography style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 700, letterSpacing: 'normal', fontSize: 25, marginBottom: '2rem' }} > {title} </Typography>
                                    <Typography style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 18, margin: '0 2rem 2rem 2rem', textAlign: 'center' }}> {text} </Typography>
                                    <Typography style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 22, marginBottom: '2rem' }}> {price} </Typography>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <BoxButton>
                    <Button href='#contactUs'
                        style={{
                            fontFamily: 'Libre Franklin, sans-serif',
                            padding: '0.8rem',
                            marginRight: '1.5rem',
                            background: '#024966',
                        }} size='large' variant="contained"> Get free consultation </Button>

                    <Button href='#about' style={{
                        fontFamily: 'Libre Franklin, sans-serif',
                        padding: '0.8rem',
                        background: 'none',
                        color: 'white',
                        border: '2px solid white',
                    }} variant="outlined"> About Us </Button>
                </BoxButton>
            </BoxMain>
        </Box >
    )
}

export default Services