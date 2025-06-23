import { Container, Row, Col } from "react-bootstrap";

import {dataSwiper} from "../data/index";

const Portofolio = () => {
  return (
    <div className="portofolio w-100 min-vh-100">

      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold fs-2">Portofolio</h1>
            <p className="text-center">CV Merdeka Sama telah berpengalaman dalam menangani berbagai proyek percetakan untuk instansi pemerintah maupun swasta. Kami menghadirkan hasil cetak dengan kualitas tinggi, ketepatan waktu, dan harga yang kompetitif. Portofolio kami mencakup produk seperti majalah, buku, banner, map, blanko, dan media cetak lainnya. Kepercayaan klien adalah komitmen kami, dan setiap proyek dikerjakan dengan standar profesionalisme terbaik.</p>
          </Col>
        </Row>
        <Row>
          {dataSwiper.map((data) =>{
            return <Col key={data.id}>
              <img src={data.image} alt="" />
              <div>
                <i className=""></i>
              </div>
            </Col>
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Portofolio
