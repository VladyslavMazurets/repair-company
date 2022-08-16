import React from 'react'
import { Box, styled } from '@mui/system'
import { Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";

import ShowCaseBg from '../../assets/schowcase_bg.jpg';
import SubHeading from '../../const/SubHeading';
import ShowCaseData from '../../const/ShowCaseData';
import '../ShowCase/ShowCase.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

const BoxShow = styled(Box)({
    padding: '2rem 2rem 5rem 2rem',
    background: 'url(' + ShowCaseBg + ')',
    backgroundPosition: '100% 2%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
})

const BoxMaim = styled(Box)({
    margin: '0 auto',
    padding: '2rem',
    width: '75%',
})

const BoxImg = styled(Box)({
    padding: '1.5rem'
});

const SwiperTitle = styled(Typography)({
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: '0.5rem'
})

const SwiperDate = styled(Typography)({
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 16,
    marginBottom: '1rem'
})

function ShowCase() {
    return (
        <>
            <BoxShow id='showCase'>
                <BoxMaim>

                    <SubHeading title="Showcase" content="Every month, we repair new apartments in Kyiv and Kyiv region. We have something to show you." />

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={50}
                        loopFillGroupWithBlank={true}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"

                        style={{ padding: ' 2rem 3rem 6rem 3rem' }}
                    >
                        {ShowCaseData.map(({ img, title, date }, index) => {
                            return (
                                <SwiperSlide key={index}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: '#fffef0',
                                    }}>
                                    <BoxImg>
                                        <img style={{ display: 'block' }} src={img} alt='Choose Img' />
                                    </BoxImg>
                                    <SwiperTitle> {title} </SwiperTitle>
                                    <SwiperDate> {date} </SwiperDate>
                                </SwiperSlide>
                            )
                        })
                        }
                    </Swiper>
                </BoxMaim>
            </BoxShow>
        </>
    )
}

export default ShowCase