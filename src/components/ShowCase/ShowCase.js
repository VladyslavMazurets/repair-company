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

const BoxMaim = styled(Box)({
    background: 'url(' + ShowCaseBg + ')',
    backgroundPosition: '100% 2%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%'
})

const BoxImg = styled(Box)({
    padding: '1rem 0 0.5rem 0'
});

const SwiperTitle = styled(Typography)({
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 'bold',
    fontSize: 19,
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
            <BoxMaim>

                <SubHeading title="Showcase" content="Every month, we repair new apartments in Kyiv and Kyiv region. We have something to show you." />

                <Swiper
                    slidesPerView={3}
                    spaceBetween={50}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"

                    style={{ padding: ' 0 3rem 6rem 3rem', width: '80%' }}
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
                                    <img src={img} alt='Choose Img' />
                                </BoxImg>
                                <SwiperTitle> {title} </SwiperTitle>
                                <SwiperDate> {date} </SwiperDate>
                            </SwiperSlide>
                        )
                    })
                    }
                </Swiper>
            </BoxMaim>
        </>
    )
}

export default ShowCase