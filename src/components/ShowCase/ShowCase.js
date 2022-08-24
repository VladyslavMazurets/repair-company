import React from 'react'
import { Box, styled } from '@mui/system'
import { Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";

import ShowCaseBg from '../../assets/schowcase_bg.jpg';
import SubHeading from '../../const/SubHeading';
import ShowCaseData from '../../const/ShowCaseData';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

const BoxShow = styled(Box)({
    background: 'url(' + ShowCaseBg + ')',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
})

const BoxMaim = styled(Box)(({theme}) => ({
    margin: '0 auto',
    padding: '5rem 2rem 6rem 2rem',
    width: '95%',

    [theme.breakpoints.down(1124)]: {
       width: '75%'
    },

    [theme.breakpoints.down(700)]: {
        width: '85%'
    },

    [theme.breakpoints.down(530)]: {
        width: '100%',
        padding: '3rem 1rem 3rem 1rem',
    },
}))

const BoxCarts = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    padding: '0.5rem'
})

const Img = styled("img")({
    margin: '1.5rem',
    width: '100%',
})

const SwiperTitle = styled(Typography)(({theme}) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 22,
    marginBottom: '0.5rem',

    [theme.breakpoints.down(1570)]: {
        fontSize: 21
    },

    [theme.breakpoints.down("sm")]: {
        fontSize: 19
    },

    [theme.breakpoints.down(470)]: {
        fontSize: 16
    }
}))

const SwiperDate = styled(Typography)(({theme}) => ({
    fontFamily: 'Libre Franklin',
    fontSize: 14,
    marginBottom: '1rem',

    [theme.breakpoints.down(500)]: {
        fontSize: 12
    }
}))

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
                        speed={1000}
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

                        style={{ padding: ' 2rem 3rem 6rem 3rem' }}
                    >
                        {ShowCaseData.map(({ img, title, date }, index) => {
                            return (
                                <SwiperSlide key={index}
                                    style={{
                                        background: '#fffef0',
                                        height: 'auto'
                                    }}>
                                    <BoxCarts>
                                        <Img src={img} alt='Choose Img' />
                                        <SwiperTitle> {title} </SwiperTitle>
                                        <SwiperDate> {date} </SwiperDate>
                                    </BoxCarts>
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