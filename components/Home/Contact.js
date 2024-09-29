import React, {useState} from 'react';
import Container from "react-bootstrap/Container";

function Team(props) {
    const [fileName, setFileName] = useState('');

    const handleFileSelect = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFileName(selectedFile.name);
        }
    };

    const triggerFileInput = () => {
        document.getElementById('file').click();
    };

    return (
        <section className="gray-bg" id={'contact'}>
            <Container>
                <div className={'d-flex justify-content-center align-items-center mb-5'}>
                    <img className="contact-thumb" src="./images/thumb.png" alt="Thumb"/>
                    <h1 className={"contact-title"}>GET IN TOUCH</h1>
                </div>
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="contact-info-card">
                            <h3 className="contact-info-title">Contact Info</h3>
                            <div className="contact-info-item">
                                <p className="title">Address</p>
                                <p> Location: Lane: 9, House: 496 <br/>
                                    Baridhara DOHS, Dhaka-1206, Bangladesh</p>
                            </div>
                            <div className="contact-info-item">
                                <p className="title">Email</p>
                                <p>contact@dreamcast.com</p>
                            </div>
                            <div className="location-wrap position-relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.200329701795!2d90.41029877511708!3d23.811474378628734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c74a097d581f%3A0xfc7092eafe627af!2sDreamcast%20Marketing%20and%20Communication!5e0!3m2!1sen!2sbd!4v1727600280576!5m2!1sen!2sbd"
                                    allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card contact-form-card">
                            <div className="card-body">
                                <h1 className="contact-form-title">Drop Your Message</h1>
                                <form>
                                    <div className="row g-4">
                                        <div className="col-xl-6 col-lg-12 col-sm-6">
                                            <input type="text" className="form-control" id="name" placeholder="Name"/>
                                        </div>
                                        <div className="col-xl-6 col-lg-12 col-sm-6">
                                            <input type="email" className="form-control" id="email"
                                                   placeholder="Email"/>
                                        </div>
                                        <div className="col-xl-7 col-lg-12 col-sm-7">
                                            <input type="text" className="form-control" id="subject"
                                                   placeholder="Phone Number"/>
                                        </div>
                                        <div className="col-xl-5 col-lg-12 col-sm-5">
                                            <div className="d-flex justify-content-center wrapper align-items-center">
                                                <input
                                                    type="file"
                                                    id="file"
                                                    className="file"
                                                    onChange={handleFileSelect}
                                                />
                                                <div className="d-flex align-items-center">
                                                    <div className="">
                                                        <img className="attach-btn me-2" src="./images/attach.png" alt="Attach" onClick={triggerFileInput}/>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        id="file-name"
                                                        className="form-control"
                                                        value={fileName}
                                                        placeholder="Attach your CV"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                    <textarea className="form-control" id="message" placeholder="Drop your message..."
                                              rows="4"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="mt-3">
                            <button type="submit" className="btn btn-primary rounded-0">SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>);
}

export default Team;