import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, FreeMode } from 'swiper/modules';
import Container from "react-bootstrap/Container";

function Clients(props) {
    return (
        <section className={"section"} id={'clients'}>
            <Container><h1 className="section-title mb-4 text--primary">Clients</h1></Container>
            <div className="py-4 client-bg">
                <Container>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={"30px"}
                        freeMode={false}
                        pagination={{
                            clickable: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 3,
                            },
                            640: {
                                slidesPerView: 4,
                            },
                            768: {
                                slidesPerView: 5,
                            },
                            1024: {
                                slidesPerView: 6,
                            },
                        }}
                        modules={[FreeMode,Autoplay]}
                        centeredSlides={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={false}
                        className="mySwiper header-swiper mt-2"
                    >
                        <SwiperSlide>
                            <img className="client-logo" src={`./images/clients/client-1.png`} alt="Clients"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="client-logo" src={`./images/clients/client-2.png`} alt="Clients"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="client-logo" src={`./images/clients/client-3.png`} alt="Clients"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="client-logo" src={`./images/clients/client-4.png`} alt="Clients"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="client-logo" src={`./images/clients/client-5.png`} alt="Clients"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="client-logo" src={`./images/clients/client-6.png`} alt="Clients"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="client-logo" src={`./images/clients/client-7.png`} alt="Clients"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="client-logo" src={`./images/clients/client-8.png`} alt="Clients"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="client-logo" src={`./images/clients/client-9.png`} alt="Clients"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="client-logo" src={`./images/clients/client-10.png`} alt="Clients"/>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </div>


        </section>
    );
}

export default Clients;