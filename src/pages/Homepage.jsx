import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { kelasTerbaru, dataSwiper, kenapaKami, dataClient } from "../data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="hero-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4">
                Menerima segala Cetakan yang kalian butuhkan
              </h1>
              <p className="mb-4">
                Merdeka Sama menerima segala cetakan dari Map, Blanko, Papper Bag, dan lainnya. untuk info selanjutnya silahkan cek halaman Layanan Kami
              </p>
              <button>
                Layanan Kami
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src="src/assets/hero.png" alt="" />
            </Col>
          </Row>
        </Container>
      </header>

      <div className="land-2 w-100 d-flex align-items-center px-2">
        <Container className="land-2-box d-flex align-items-center ">
          <Row >
            <Col>
              <img src="src/assets/man.png" alt="" />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                "Kualitas cetakan dan Tepat Waktu selalu menjadi perhatian utama
                kami."
              </p>
              <h1>Riswandi - Direktur CV. Merdeka Sama</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="land-3 w-100 min-vh-75">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold fs-2">Kenapa Harus Kami?</h1>
              <p className="text-center fw-semibold fs-5">Merdeka Sama</p>    
            </Col>
          </Row>
          <Row>
              {kenapaKami.map((kenapa) => {
                return <Col key={kenapa.id}>
                  <img className="mb-4" src={kenapa.image} alt="" />
                  <div>
                    <h1 className="text-center fs-5 fw-bold">{kenapa.title}</h1>
                    <p className="text-center fs-6 fw-medium ">{kenapa.desc}</p>
                  </div>
                </Col>
              })}
          </Row>
        </Container>
      </div>

      <section className="land-4 w-100 min-vh-100 d-flex align-items-center justify-content-center">
        <Container>
          <Row className="land-4-box align-items-center ">
            <Col className="about text-center" lg={6}>
              <img src="src/assets/kantor1.jpg" width="200" alt="" />
              <img src="src/assets/kantor2.jpg" width="200" alt="" />
              <img src="src/assets/kantor3.jpg" width="200" alt="" />
              <img src="src/assets/kantor4.jpg" width="200" alt="" />
            </Col>
            <Col lg={6}>
            <h1>Tentang Kami</h1>
              <img
                className="line"
                src="src/assets/line.png"
                width="80"
                alt=""
              />
              <p>
                Di CV Merdeka Sama, Kami memiliki komitmen untuk menjamin Hasil
                kualitas percetakan yang baik, cepat dan tepat. Dan juga
                memperkokoh posisi dan daya saing perusahaan dimasa mendatang
                melalui hubungan kerja sama yang baik dengan para klien,serta
                peningkatan Sumber Daya Manusia.
              </p>
              <a href="/profil">Selengkapnya</a>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="layanan py-5 text-center">
  <Container>
    <Row>
      <Col>
        <h1 className="mt-3 mb-0 fw-bold">Layanan Kami</h1>
        <p className="mb-5">Geser untuk melihat semua layanan kami</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {dataSwiper.map((data) => (
            <SwiperSlide key={data.id} className="shadow">
              <img src={data.image} alt="" />
              <p className="pt-5 py-0 m-0 fw-bold">{data.skill}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
    </Row>
    <Row>
      <Col>
        <a className="btn mt-3 btn-success rounded-3">
          <img
            className="me-2"
            src="src/assets/whatsapp.png"
            width="30"
            alt=""
          />Pesan Sekarang
        </a>
      </Col>
    </Row>
  </Container>
</section>


      <section className="land-6 d-flex align-items-center py-5 px-5 justify-content-center w-100 min-vh-100">
        <Container className="align-items-center justify-content-center">
          <Row className="land-6-box d-flex align-items-center justify-content-center">
            <Col className="d-flex-column">
              <h1>Konsultasikan Kebutuhan Anda</h1>
              <img src="src/assets/line.png" width="80" alt="" />
              <p>
              Kami siap memberikan pilihan & solusi terbaik untuk cetakan pada perusahaan Anda. Kita bisa berkomunikasi melalui Telephone,  WhatsApp, Zoom Meeting ataupun mengunjungi langsung (Visit) perusahaan Bapak/Ibu untuk membicarakan berbagai kebutuhan.
              </p>
            </Col>
            <Col className="land-6-content align-items-center justify-content-center">
              <div className="cont align-items-center justify-content-center mb-5">
                <div className="text-center">
                  <img className="good" src="src/assets/delivery.png" width="80px" alt="" />
                </div>
                <div>
                  <div>
                    <h1>01 Pemesanan</h1>
                  </div>
                  <div>
                    <p>
                      Untuk estimasi lamanya pengerjaan produk akan dilampirkan
                      pada penawaran harga. Lama pengerjaan produk tergantung
                      pada ketersediaan bahan dan banyaknya pesanan. waktu
                      produksi sudah termasuk Quality Control.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cont align-items-center justify-content-center mb-5">
                <div className="text-center">
                  <img className="good " src="src/assets/process.png" width="80px" alt="" />
                </div>
                <div>
                    <h1>02 Pengerjaan</h1>
                  <div>
                    <p>
                      Untuk estimasi lamanya pengerjaan produk akan dilampirkan
                      pada penawaran harga. Lama pengerjaan produk tergantung
                      pada ketersediaan bahan dan banyaknya pesanan. waktu
                      produksi sudah termasuk Quality Control.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cont align-items-center justify-content-center mb-5">
                <div className="text-center">
                  <img className="good" src="src/assets/truck.png" width="80px" alt="" />
                </div>
                <div>
                  <div>
                    <h1>03 Pengiriman</h1>
                    <p>
                      Untuk estimasi lamanya pengerjaan produk akan dilampirkan
                      pada penawaran harga. Lama pengerjaan produk tergantung
                      pada ketersediaan bahan dan banyaknya pesanan. waktu
                      produksi sudah termasuk Quality Control.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="client py-5 text-center">
        <Container>
          <Row>
            <Col>
              <h1 className="mt-3 mb-0 fw-bold">Client Kami</h1>
              <p className="mb-5">Geser untuk melihat semua client kami</p>
            </Col>
          </Row>
          <Row className="">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >


              {dataClient.map((data) => {
                return (
                  
                  <SwiperSlide key={data.id} className="">
                    <img src={data.image} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Homepage;
