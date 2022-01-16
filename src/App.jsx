import { useEffect, useState } from 'react'; // ejecuta una funcion despues de cargar el componenete
import './App.css';
import axios from 'axios';//para poder usar las apis
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Home from './components/Home/Home';
import Card from './components/Cards/Coins';
import CardDetail from './components/CardDetail/CardDetail';
import Logo from './img/icono.png'
import iconoBuscador from './img/iconoBuscador.png'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap'
import Exchanges from './components/Exchanges/Exchanges';

function App() {

  const [monedas, setMonedas] = useState([])
  const [exchanges, setExchanges] = useState([])

  const [search, setSearch] = useState('');

  const getData = async () => {

    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1");

    const res2 = await axios.get("https://api.coingecko.com/api/v3/exchanges");
    setMonedas(res.data)
    setExchanges(res2.data)
  }


  useEffect(() => {
    getData();
  }, [])


  return (

    <BrowserRouter className="App">
      <div className='container mt-5'>
        <Navbar bg="dark" className="fixed-top minav" variant="dark" expand="lg">
          <Container fluid>
            <img className="logo" src={Logo}></img><h2><span className="letraColor">G</span><span className='letraColorBlanco'>UILLE</span><span className="letraColor">C</span><span className='letraColorBlanco'>OIN</span></h2>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link className="nav-link" to="/" >Home</Link>
                <Link className="nav-link" to="/Cards" >Coins</Link>
                <Link className="nav-link" to="/Exchanges" >Exchanges</Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={e => setSearch(e.target.value)}
                />
                <img className="iconoBuscador" src={iconoBuscador}></img>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <hr />
        <Routes>
          <Route path="/Cards/" element={<Card monedas={monedas} search={search} />} />
          <Route path="/CardDetail/:id" element={<CardDetail />} />
          <Route path="/Exchanges/" element={<Exchanges exchanges={exchanges} search={search} />} />
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>


  );


}

export default App;

