import React, { useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { ContactUs } from './Contact';
import InputGroup from "react-bootstrap/InputGroup";
import PlaceholderIcon from "../assets/placeholder.png";
import CallIcon from "../assets/call.png";
import MessageIcon from "../assets/message.png";
import LineIcon from "../assets/line.png";
import WhatsappIcon from "../assets/whatsapp.png";
const Kontak = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    EmailJSResponseStatus.sendForm(service_ebuzu0a, template_23680hd, form.current, gDLHTUhPnacpHAE2R)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  };
  return (
    
    <div className="kontak">
      <section className="heru w-100 min-vh-100 d-flex align-items-center bg-light">
        <Container>
          <h1 className='text-center fw-bold fs-2 mb-4'>Kontak</h1>
          <Row className="heru-box d-flex mb-4 py-4 px-4 rounded-5">
            <Col>
              <h1>Informasi Kontak</h1>
              <h4>
                Untuk informasi yang lebih lanjut silahkan hubungi kontak
                dibawah ini
              </h4>
              <div className="fot d-flex mb-3">
                <div className="d-flex text-align-left">
                  <img
                    src={PlaceholderIcon}
                    alt=""
                    width="30"
                    height="30"
                  />
                </div>
                <div>
                  <h6>Office</h6>
                  <p>JL. H. Yahya No.7 Otista Raya - Jakarta Timur</p>
                </div>
              </div>

              <div className="fot d-flex mb-3">
                <div className="d-flex text-align-left">
                  <img
                    src={PlaceholderIcon}
                    alt=""
                    width="30"
                    height="30"
                  />
                </div>
                <div>
                  <h6>Workshop</h6>
                  <p>JL. Wedana No. 13A Otista Raya - Jakarta Timur</p>
                </div>
              </div>

              <div className="fot d-flex mb-3">
                <div className="d-flex text-align-left">
                  <img
                    src={CallIcon}
                    alt=""
                    width="30"
                    height="30"
                  />
                </div>
                <div>
                  <h6>Phone</h6>
                  <p>021-8190802</p>
                </div>
              </div>

              <div className="fot d-flex mb-3">
                <div className="d-flex text-align-left">
                  <img
                    src={MessageIcon}
                    alt=""
                    width="30"
                    height="30"
                  />
                </div>
                <div>
                  <h6>Email</h6>
                  <p>merdeka_sm@yahoo.com</p>
                </div>
              </div>
            </Col>
            <Col>
            <h1>Form Kontak</h1>
              <ContactUs/>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='footkon py-5 px-5 text-center'>
          <div>
            <h1 className='text-center fw-bold fs-3'>Konsultasi, Pertanyaan dan Pemesanan Hubungi kami</h1>
            <img className="m-0 p-0" src="src/assets/line.png" width="100" alt="" />
          </div>
          <div className='footkon-btn text-center align-items-center justify-content-center pt-5 d-flex'>
            <button><img className="me-2 " src={WhatsappIcon} width="30" alt="" />Whatsapp Kami</button>
            <button className='bg-danger'><img className="me-2 " src="src/assets/message.png" width="30" alt="" />Email Kami</button>
          </div>
        </section>
    </div>

  );
};

export default Kontak;