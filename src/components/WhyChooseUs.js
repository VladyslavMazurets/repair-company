import React from 'react'
import { Box, styled } from '@mui/system'
import { Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";

import ChooseUsData from '../const/ChooseUsData';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import SubHeading from '../const/SubHeading';

const BoxHeader = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    margin: '0 0 2rem 0'
});

const BoxImg = styled(Box)({
    margin: '20px 0 10px 0',
});

const Header = styled(Typography)({
    fontFamily: 'Libre Franklin, sans-serif',
    fontWeight: 500,
    letterSpacing: 'normal',
    fontSize: 50,
    color: 'black',

    margin: '4rem 0 0 0'
})

const HeaderContent = styled(Typography)({
    fontFamily: 'Libre Franklin, sans-serif',
    fontWeight: 100,
    letterSpacing: 'normal',
    fontSize: 25,
    color: 'black',

    margin: '0.3rem 0 1rem 0'
})

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
        <Box style={{ background: '#aacfe6' }}>

            <SubHeading title="Why Choose Us" content="We will provide excellent-quality work at an affordable cost." />

            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"

                style={{ padding: ' 0 3rem 4rem 3rem' }}
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
                                height: '18rem',
                                borderTop: '7px solid #3a86b5'
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

        </Box>
    )
}

export default WhyChooseUs