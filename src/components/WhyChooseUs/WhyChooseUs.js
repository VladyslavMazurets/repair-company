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

const BoxMaim = styled(Box)({
    background: 'url(' + ChooseImg + ')',
    backgroundPosition: '100% 70%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%'
})

const BoxImg = styled(Box)({
    margin: '20px 0 10px 0',
});

const SwiperHeader = styled(Typography)({
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 900,
    letterSpacing: 'normal',
    fontSize: 24,
    marginBottom: '1rem'
})

const SwiperContent = styled(Typography)({
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 17,
    margin: '0 2rem 3rem 2rem',
    textAlign: 'center'
})

function WhyChooseUs() {
    return (
        <>
            <BoxMaim>

                <SubHeading title="Why Choose Us" content="We will provide excellent-quality work at an affordable cost." />

                <Swiper
                    slidesPerView={3}
                    spaceBetween={50}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"

                    style={{ padding: ' 0 2rem 4rem 2rem', width: '60%' }}
                >
                    {ChooseUsData.map(({ img, title, text }, index) => {
                        return (
                            <SwiperSlide key={index}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: '#fafafa',
                                    borderTop: '8px solid #3a86b5'
                                }}>
                                <BoxImg>
                                    <img src={img} alt='Choose Img' />
                                </BoxImg>
                                <SwiperHeader> {title} </SwiperHeader>
                                <SwiperContent> {text} </SwiperContent>
                            </SwiperSlide>
                        )
                    })
                    }
                </Swiper>
            </BoxMaim>
        </>
    )
}

export default WhyChooseUs