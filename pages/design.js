import React from 'react';
import Container from "react-bootstrap/Container";
import Head from "next/head";
import Layout from "@/components/Layout";

function Design() {
    return (<>
        <Head>
            <title>Dreamcast - Activation</title>
            <meta name="description" content="Generated by create next app"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.png"/>
        </Head>
        <main>
            <Layout>
                <section className="gray-bg work-page" id={'workDesign'}>
                    <Container fluid={true}>
                        <div className="gallery">
                            <div className="gallery__item gallery__item--hor">
                                <img src="./images/design/design-6.png" alt="Design"/>
                            </div>
                            <div className="gallery__item">
                                <img src="./images/design/design-4.png" alt="Design"/>
                            </div>
                            <div className="gallery__item">
                                <img src="./images/design/design-3.png" alt="Design"/>
                            </div>
                            <div className="gallery__item gallery__item--hor">
                                <img src="./images/design/design-5.png" alt="Design"/>
                            </div>
                            <div className="gallery__item">
                                <img src="./images/design/design-2.png" alt="Design"/>
                            </div>
                            <div className="gallery__item">
                                <img src="./images/design/design-7.png" alt="Design"/>
                            </div>
                            <div className="gallery__item">
                                <img src="./images/design/design-1.png" alt="Design"/>
                            </div>
                            <div className="gallery__item">
                                <img src="./images/design/design-8.png" alt="Design"/>
                            </div>
                            <div className="gallery__item gallery__item--hor-3">
                                <img src="./images/design/design-9.png" alt="Design"/>
                            </div>
                            <div className="gallery__item">
                                <img src="./images/design/design-10.png" alt="Design"/>
                            </div>
                        </div>
                        <img src="./images/work/go-on.png" alt="The Show must be Go on" className="goon-image"/>
                    </Container>
                </section>
            </Layout>
        </main>
    </>);
}

export default Design;