import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './Coins.css'
import { Link } from "react-router-dom"
import { Col, Card, Row } from 'react-bootstrap'


const Cards = ({ monedas, search }) => {

    const monedasFiltradas = monedas.filter((moneda) =>
        moneda.name.toLowerCase().includes(search.toLowerCase()));
        window.scroll(0, 0);
    return (
        <div className="containerCardsPersonalizado">
            
            <Row xs={1} xxl={5} xl={4} lg={3} md={2} className="g-2">
                {monedasFiltradas.map(moneda => { return (
                    <React.Fragment key={moneda.id}>
                    <Col classNamer="animacion">
                        <Card className="personalCard"  >
                            <div className='centrarDiv'>
                                <Card.Img variant="top" className='imagenPersonalizada' src={moneda.image} style={{ width: "8rem" }} />
                            </div>
                            <Card.Body className="miCardBody">
                                <div className='centrarNombre'>
                                    <Card.Title><h2>{moneda.symbol.toUpperCase()}</h2></Card.Title>
                                </div>
                                <Card.Text><b>{moneda.name.toUpperCase()}</b></Card.Text>
                                <Card.Text><b>Change in 24h: <span className={moneda.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}>{moneda.price_change_percentage_24h}</span>%</b></Card.Text>
                                <Card.Text><b>Market cap rank {moneda.market_cap_rank}</b></Card.Text>
                                <div className='dinero'>
                                    <h5>{moneda.current_price} <FontAwesomeIcon icon={faDollarSign} /></h5>
                                </div>
                            </Card.Body>
                            <Card.Footer className="miCardFooter"><Link to={"/CardDetail/" + moneda.id} ><div className='btn btn-dark ng-dark btnPersonalizado'><FontAwesomeIcon className="iconoColor" icon={faPlusCircle} /> INFO</div></Link></Card.Footer>
                        </Card>
                    </Col>
                    </React.Fragment>
                )
                })}
            </Row>
        </div>
    )
};

export default Cards
