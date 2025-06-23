import { Container, Row, Col } from "react-bootstrap";

import {dataSwiper} from "../data/index";

const Portofolio = () => {
  return (
    <div className="portofolio w-100 min-vh-100">

      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold fs-2">Portofolio</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe hic iusto quisquam similique dolorem est deleniti cum quaerat illum ipsam officiis necessitatibus a, vitae itaque, impedit reiciendis nulla officia sint?</p>
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
