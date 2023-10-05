import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import localeEnMessages from './locale/en.json';
import localeEsMessages from './locale/es.json';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Col, Row, Navbar } from 'react-bootstrap';
import * as serviceWorker from './serviceWorker';
import Formulario from './components/Form';
import cafeLista from './components/cafeList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <IntlProvider locale={navigator.language} messages={navigator.language.startsWith("en")?localeEnMessages:localeEsMessages}>
      <Navbar>
        <Navbar.Brand href="#home" style={{fontFamily: "sans", marginLeft: "160px"}}>
          El aroma mágico
        </Navbar.Brand>
      </Navbar>
      <img src="https://img.freepik.com/fotos-premium/banner-fondo-completo-tostado-granos-cafe_771335-18607.jpg?w=2000" style={{width: "1240px", height: "340px", marginLeft:"100px"}}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Formulario/>}/>
          <Route path="/cafeList" element={<cafeLista />}/>
        </Routes>
      </BrowserRouter>
      <footer style={{backgroundColor: "#343a40", color: "white", height: "50px", marginTop: "50px"}}>
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
    </IntlProvider>
);

serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
