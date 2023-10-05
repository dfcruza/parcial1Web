import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import localeEnMessages from './locale/en.json';
import localeEsMessages from './locale/es.json';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Col, Row, Navbar } from 'react-bootstrap';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Formulario from './components/Form';
import CafeLista from './components/cafeList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <IntlProvider locale={navigator.language} messages={navigator.language.startsWith("en")?localeEnMessages:localeEsMessages}>
      <React.StrictMode>
      <Navbar>
        <Navbar.Brand href="#home" style={{fontFamily: "Indie Flower", marginLeft: "20px"}}>
          El aroma mágico
        </Navbar.Brand>
      </Navbar>
      <img src="https://0201.nccdn.net/1_2/000/000/138/986/banner-cafe%CC%81.jpg#RDAMDAID35806719" alt=' ' style={{width: "1240px", height: "320px", marginLeft:"20px"}}/>
      <div style={{backgroundColor: "#343a40", color: "white", height: "100px", marginTop: "20px"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Formulario />}/>
          <Route path="/cafes" element={<CafeLista />} />
        </Routes>
      </BrowserRouter>
      </div>
      <footer style={{ textAlign: "center", marginTop: "10vh"}}>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <p style={{marginTop: "15px"}}>© 2021 El aroma mágico</p>
            </Col>
            <Col xs={6} md={4}>
              <p style={{marginTop: "15px"}}>Contacto: 123456789</p>
            </Col>
          </Row>
        </Container>
      </footer>
      </React.StrictMode>
    </IntlProvider>
);

serviceWorkerRegistration.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
