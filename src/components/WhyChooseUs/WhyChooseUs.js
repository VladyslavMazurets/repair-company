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
    backgroundPosition: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%'
})

const BoxMain = styled(Box)({
    margin: '0 auto',
    padding: '2rem',
    width: '75%',
})

const BoxImg = styled(Box)({
    margin: '2rem'
});

const SwiperHeader = styled(Typography)({
    fontFamily: 'Libre Franklin',
    fontWeight: 600,
    fontSize: 24,
    marginBottom: '1rem'
})

const SwiperContent = styled(Typography)({
    fontFamily: 'Libre Franklin',
    fontSize: 17,
    margin: '0 4rem 4rem 4rem',
    textAlign: 'center'
})

function WhyChooseUs() {
    return (
        <>
            <BoxChoose>
                <BoxMain>

                    <SubHeading title="Why Choose Us" content="We will provide excellent-quality work at an affordable cost." />

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={50}
                        pagination={{
                            clickable: true,
                        }}
                        grabCursor={true}
                        modules={[Pagination]}
                        className="mySwiper"

                        style={{ padding: '6rem 2rem 6rem 2rem' }}
                    >
                        {ChooseUsData.map(({ img, title, text }, index) => {
                            return (
                                <SwiperSlide key={index}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        background: '#fafafa',
                                        borderTop: '8px solid #3a86b5',
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
                </BoxMain>
            </BoxChoose>
        </>
    )
}

export default WhyChooseUs