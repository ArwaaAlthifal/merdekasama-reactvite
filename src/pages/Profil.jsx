import { kelasTerbaru, dataSwiper, kenapaKami } from "../data";
import kantor1 from "../assets/kantor1.png";
import kantor2 from "../assets/kantor2.png";
import kantor3 from "../assets/kantor3.png";
import kantor4 from "../assets/kantor4.png";
import heroImg from "../assets/hero.png";

import { Container, Row, Col } from "react-bootstrap";
const Profil = () => {
  return (
    <div className="profil">
      <section className="prof w-100">
        <h1 className="text-center fs-2 fw-bold">Profil</h1>
        <Container className="d-flex align-items-center">
          <Row className="prof-box d-flex align-items-center">
            <Col>
              <p>
                CV Merdeka Sama adalah perusahaan yang bergerak di bidang percetakan dengan pengalaman melayani berbagai kebutuhan cetak dari instansi pemerintahan, perusahaan swasta, hingga lembaga pendidikan. Kami mengedepankan kualitas, ketepatan waktu, dan pelayanan terbaik sebagai komitmen utama dalam setiap pekerjaan. Dengan dukungan tim profesional dan peralatan modern, kami siap menjadi mitra terpercaya dalam setiap kebutuhan cetak Anda.
              </p>
            </Col>
            <Col className="prof-set d-grid-column align-items-center">
              <img src={kantor1} width="280" alt="" />
              <img src={kantor2} width="280" alt="" />
              <img src={kantor3} width="280" alt="" />
              <img src={kantor4} width="280" alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="prof-2 w-100 py-5 px-5 justify-content-center align-items-center">
        <Row className="prof-2-box justify-content-center align-items-center">
          <Col lg={6} className="text-center px-0">
            <img className="text-center" src={heroImg} width="100%" alt="" />
          </Col>
          <Col lg={6} className="pe-5 ps-0 justify-content-center align-items-center">
            <h1 className="text-center mb-3 fw-bold fs-2">VISI</h1>
            <p className="fw-medium mb-5">
              Menjadi perusahaan percetakan terkemuka di Indonesia yang
              mengutamakan kualitas hasil dan pelayanan.
            </p>

            <h1 className="text-center mb-3 fw-bold fs-2">MISI</h1>
            <ul className="fw-medium ps-0">
              <li>
                Terus berinovasi melakukan pengembangan kualitas produk secara
                maksimal demi pelayanan terbaik.{" "}
              </li><br />
              <li>
                Menciptakan kondisi kerja yang aman, nyaman, disiplin, dan
                bertanggung jawab dalam bekerja.
              </li><br />
              <li>
                Memberi kualitas sumber daya manusia dan teknologi sesuai
                kebutuhan konsumen.
              </li><br />
              <li>
                Berusaha meningkatkan sarana dan prasaran sesuai perkembangan
                teknologi.
              </li>
            </ul>
          </Col>
        </Row>
      </section>

      <div className="py-5 land-3 w-100 min-vh-75">
        <Container>
          <Row className="p-0">
            <Col>
              <h1 className="text-center fw-bold fs-2">Kenapa Harus Kami?</h1>
              <p className="text-center fw-semibold fs-5">Merdeka Sama</p>
            </Col>
          </Row>
          <Row>
            {kenapaKami.map((kenapa) => {
              return (
                <Col key={kenapa.id}>
                  <img className="mb-4" src={kenapa.image} alt="" />
                  <div>
                    <h1 className="text-center fs-5 fw-bold">{kenapa.title}</h1>
                    <p className="text-center fs-6 fw-medium ">{kenapa.desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Profil;
