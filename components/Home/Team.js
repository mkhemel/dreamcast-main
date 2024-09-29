import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Container from "react-bootstrap/Container";

function Team(props) {
    return (
        <section className="gray-bg" id={'teams'}>
            <Container>
                <div className={'row justify-content-center'}>
                    <div className="col-lg-11">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            initialSlide={1}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 70,
                                depth: 120,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={false}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper team-swiper"
                        >
                            <SwiperSlide>
                                <img src={`./images/team-1.png`} alt="team"/>
                                <div className="d-flex justify-content-center">
                                    <div className="team-info">
                                        <h4 className="team-name"> Mohiuddin Chowdhury Shaon</h4>
                                        <p className="team-position">Managing Director</p>
                                        <p className="team-description"> Dreamcast Marketing & Communication Ltd.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={`./images/team-2.png`} alt="team"/>
                                <div className="d-flex justify-content-center">
                                    <div className="team-info">
                                        <h4 className="team-name"> Mohiuddin Chowdhury Shaon</h4>
                                        <p className="team-position">Managing Director</p>
                                        <p className="team-description"> Dreamcast Marketing & Communication Ltd.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={`./images/team-2.png`} alt="team"/>
                                <div className="d-flex justify-content-center">
                                    <div className="team-info">
                                        <h4 className="team-name"> Mohiuddin Chowdhury Shaon</h4>
                                        <p className="team-position">Managing Director</p>
                                        <p className="team-description"> Dreamcast Marketing & Communication Ltd.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Container>
        </section>);
}

export default Team;