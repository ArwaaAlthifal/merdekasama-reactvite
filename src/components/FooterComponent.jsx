import { Container, Row, Col } from "react-bootstrap";
import placeholderIcon from "../assets/placeholder.png";
import callIcon from "../assets/call.png";
import emailIcon from "../assets/message.png";

const FooterComponent = () => {
  return (
    <footer className="footer py-5 bg-light">
      <Container className="footer-con">
        <Row className="gy-4">
          <Col md={3}>
            <h1 className="fw-bold">MERDEKA</h1>
            <h1 className="fw-bold">SAMA</h1>
          </Col>

          <Col md={3}>
            <h5 className="fw-bold">Tentang Kami</h5>
            <p>
              Perusahaan yang ahli dalam bidang percetakan, dengan tenaga kerja profesional yang siap membantu Anda dalam berbagai kebutuhan cetak dan lainnya.
            </p>
          </Col>

          <Col md={3}>
            <h5 className="fw-bold">Informasi Kontak</h5>
            <div className="d-flex mb-3">
              <img src={placeholderIcon} alt="Office" width="30" height="30" className="me-2" />
              <div>
                <h6 className="mb-0">Office</h6>
                <p className="mb-0">Jl. H. Yahya No.7 Otista Raya, Jakarta Timur</p>
              </div>
            </div>

            <div className="d-flex mb-3">
              <img src={placeholderIcon} alt="Workshop" width="30" height="30" className="me-2" />
              <div>
                <h6 className="mb-0">Workshop</h6>
                <p className="mb-0">Jl. Wedana No. 13A Otista Raya, Jakarta Timur</p>
              </div>
            </div>

            <div className="d-flex mb-3">
              <img src={callIcon} alt="Phone" width="30" height="30" className="me-2" />
              <div>
                <h6 className="mb-0">Telepon</h6>
                <p className="mb-0">021-8190802</p>
              </div>
            </div>

            <div className="d-flex">
              <img src={emailIcon} alt="Email" width="30" height="30" className="me-2" />
              <div>
                <h6 className="mb-0">Email</h6>
                <p className="mb-0">merdeka_sm@yahoo.com</p>
              </div>
            </div>
          </Col>

          <Col md={3}>
            <h5 className="fw-bold">Navigasi</h5>
            <div className="d-grid gap-2">
              <a href="/">Beranda</a>
              <a href="/profil">Profil</a>
              <a href="/portofolio">Portofolio</a>
              <a href="/kontak">Kontak</a>
            </div>
          </Col>
        </Row>

        <hr className="my-4" />

        <div className="d-flex justify-content-between small">
          <p className="mb-0">&copy; 2023 - CV Merdeka Sama</p>
          <p className="mb-0">Developed by anak soleh</p>
        </div>
      </Container>
    </footer>
  );
};

export default FooterComponent;
