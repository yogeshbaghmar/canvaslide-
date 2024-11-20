

import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import Header from './component/header'


function App() {

  return (
    <>
    <Container fluid className='m-0 p-0'>
      <Header />
      <div className="backimg">
        <div className='ps-5 pt-5'>
        <h1 className='text-white fw-bolder'>Work with us</h1>
        <p className='text-white'>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat <br /> commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        <ul className='text-white d-flex'>
          <li>Open roles →</li>
          <li>Internship program →</li>
          <li>Our values →</li>
          <li>Meet our leadership →</li>
        </ul>
        <Row className='text-white p-0 m-0 ' lg={4} sm={1}>
          <Col>
            <h3>12</h3>
            <p>Offices worldwide</p>
          </Col>
          <Col>
            <h3>12</h3>
            <p>Offices worldwide</p>
          </Col>
          <Col>
             <h3>12</h3>
            <p>Offices worldwide</p>
          </Col>
          <Col>
            <h3>12</h3>
            <p>Offices worldwide</p>
          </Col>
        </Row>
      </div>
      </div>
      </Container>

    </>
  )
}

export default App
