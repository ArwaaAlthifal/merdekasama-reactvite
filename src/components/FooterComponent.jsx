import { Container, Row, Col } from "react-bootstrap";
const FooterComponent = () => {
  return (
    <div className="footer d-flex">
      <Container className="footer-con">
        <Row className="foot">
          <Col>
            <h1>MERDEKA</h1>
            <h1>SAMA</h1>
          </Col>
          <Col>
            <h1>Merdeka Sama</h1>
            <p>
              Perusahaan yang ahli dalam bidang percetakan yang memiliki tenaga
              kerja yang profesional yang dapat membantu anda dalam bidang
              percetakan dan lain"
            </p>
          </Col>

          <Col>
            <h1>Informasi Kontak</h1>
            <p>Hubungi kami untuk Informasi lebih lanjut</p>

            <div className="fot d-flex">
              <div className="d-flex text-align-left">
                <img
                  src="src/assets/placeholder.png"
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

            <div className="fot d-flex">
              <div className="d-flex text-align-left">
                <img
                  src="src/assets/placeholder.png"
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

            <div className="fot d-flex">
              <div className="d-flex text-align-left">
                <img src="src/assets/call.png" alt="" width="30" height="30" />
              </div>
              <div>
                <h6>Phone</h6>
                <p>021-8190802</p>
              </div>
            </div>

            <div className="fot d-flex">
              <div className="d-flex text-align-left">
                <img
                  src="src/assets/message.png"
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

          <Col className="lainnya">
            <h1>Lainnya</h1>
            <div className="d-grid">
              <a href="">Beranda</a>
              <a href="/profil">Profil</a>
              <a href="/portofolio">Portofolio</a>
              <a href="/kontak">Kontak</a>
            </div>
          </Col>
        </Row>

        <div className="d-flex justify-content-between">
          <h6>&copy; Copyright 2023 - CV Merdeka Sama</h6>
          <h6>Developed by anak soleh</h6>
        </div>
      </Container>
    </div>
  );
};

export default FooterComponent;
