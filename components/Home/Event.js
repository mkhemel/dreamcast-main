import React from 'react';
import Container from "react-bootstrap/Container";

function Event(props) {
    return (
        <section className="gray-bg section pt-0" id={'workEvent'}>
            <Container fluid={true}>
                <Container><h1 className="section-title mb-4 text--primary">Events</h1></Container>
                <div className="row g-2">
                    <div className="col-md-4 col-sm-6 col-6 event-card-wrap">
                        <div className="event-card" style={{backgroundImage: 'url(./images/work/batb.png)'}}>
                            <a href={'#'} className="event-card-content">
                                <h3 className="event-title">BATB</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-6 event-card-wrap">
                        <div className="event-card" style={{backgroundImage: 'url(./images/work/primebank.png)'}}>
                            <div className="event-card-content">
                                <h3 className="event-title"> Prime Bank PLC</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-6 event-card-wrap">
                        <div className="event-card" style={{backgroundImage: 'url(./images/work/bank.png)'}}>
                            <div className="event-card-content">
                                <h3 className="event-title">Commercial Bank of Ceylon PLC</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-6 event-card-wrap">
                        <div className="event-card" style={{backgroundImage: 'url(./images/work/ky.png)'}}>
                            <div className="event-card-content">
                                <h3 className="event-title">KY Steel</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-6 event-card-wrap">
                        <div className="event-card" style={{backgroundImage: 'url(./images/work/metlife.png)'}}>
                            <div className="event-card-content">
                                <h3 className="event-title">MetLife</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 col-6 event-card-wrap">
                        <div className="event-card" style={{backgroundImage: 'url(./images/work/agrani.png)'}}>
                            <div className="event-card-content">
                                <h3 className="event-title">Agrani Trading</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 col-6 event-card-wrap">
                        <div className="event-card" style={{backgroundImage: 'url(./images/work/daraz.png)'}}>
                            <div className="event-card-content">
                                <h3 className="event-title">Daraz</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="./images/work/go-on.png" alt="The Show must be Go on" className="goon-image"/>
            </Container>
        </section>);
}

export default Event;