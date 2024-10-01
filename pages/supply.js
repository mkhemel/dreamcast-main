import React from 'react';
import Container from "react-bootstrap/Container";
import Head from "next/head";
import Layout from "@/components/Layout";

function Supply(props) {
    return (<>
        <Head>
            <title>Dreamcast - Supply</title>
            <meta name="description" content="Generated by create next app"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.png"/>
        </Head>
        <main>
            <Layout>
                <section className="gray-bg work-page" id={'workSupply'}>
                    <Container>
                        <div className="row g-4 pt-2">
                            <div className="col-md-4 col-6">
                                <img className="w-100" src="./images/work/supply-1.png" alt="Supply"/>
                            </div>
                            <div className="col-md-4 col-6">
                                <img className="w-100" src="./images/work/supply-2.png" alt="Supply"/>
                            </div>
                            <div className="col-md-4 col-6">
                                <img className="w-100" src="./images/work/supply-3.png" alt="Supply"/>
                            </div>
                            <div className="col-md-4 col-6">
                                <img className="w-100" src="./images/work/supply-4.png" alt="Supply"/>
                            </div>
                            <div className="col-md-4 col-6">
                                <img className="w-100" src="./images/work/supply-5.png" alt="Supply"/>
                            </div>
                            <div className="col-md-4 col-6">
                                <img className="w-100" src="./images/work/supply-6.png" alt="Supply"/>
                            </div>
                        </div>
                        <img src="./images/work/go-on.png" alt="The Show must be Go on" className="goon-image"/>
                    </Container>
                </section>
            </Layout>
        </main>
    </>);
}

export default Supply;