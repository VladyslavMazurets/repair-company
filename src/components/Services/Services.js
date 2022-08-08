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

const BoxImg = styled(Box)({
    margin: '20px 0 20px 0',
    color: 'white'
});

const BoxButton = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '3rem'
});

function Services() {
    return (
        <Box style={{ background: '#96bed6' }}>

            <SubHeading title="Services We Provide" content="Whatever work you need, we can handle with this." />

            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                slidesPerGroup={3}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"

                style={{ padding: ' 0 3rem 4rem 3rem', width: '80%' }}
            >
                {
                    ServicesData.map(({ img, title, text, price }, index) => {
                        return (
                            <SwiperSlide key={index}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: '#fafafa',
                                    borderRadius: '20px'
                                }}>
                                <BoxImg>
                                    <img src={img} alt='Content img' width={130} height={130} />
                                </BoxImg>
                                <Typography style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 700, letterSpacing: 'normal', fontSize: 25, margin: '1rem 0 2rem 0' }} > {title} </Typography>
                                <Typography style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 18, margin: '0 2rem 3rem 2rem', textAlign: 'center' }}> {text} </Typography>
                                <Typography style={{ fontFamily: 'Open Sans, sans-serif', fontSize: 22, marginBottom: '2rem' }}> {price} </Typography>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <BoxButton>
                <Button
                    style={{
                        fontFamily: 'Libre Franklin, sans-serif',
                        padding: '0.8rem',
                        marginRight: '1.5rem',
                        background: '#024966',
                    }} size='large' variant="contained"> Get free consultation </Button>

                <Button style={{
                    fontFamily: 'Libre Franklin, sans-serif',
                    padding: '0.8rem',
                    background: 'none',
                    color: 'white',
                    border: '2px solid white',
                }} variant="outlined"> About Us </Button>
            </BoxButton>
        </Box >
    )
}

export default Services