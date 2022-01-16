
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import '../Cards/Coins.css'
import { Link } from "react-router-dom"
import { Col, Card, Row } from 'react-bootstrap'

const Exchanges = ({exchanges, search}) => {
    const exchangesFiltrados = exchanges.filter((exchange) =>
    exchange.name.toLowerCase().includes(search.toLowerCase()));
    window.scroll(0, 0);

    return (
        <div className="containerCardsPersonalizado">
            <Row xs={1} xxl={5} xl={4} lg={3} md={2} className="g-2">
                {exchangesFiltrados.map(exchange => { return (
                    <React.Fragment key={exchange.id}>
                    <Col>
                        <Card className="personalCard"  >
                            <div className='centrarDiv'>
                                <Card.Img variant="top" className='imagenPersonalizada' src={exchange.image} style={{ width: "8rem" }} />
                            </div>
                            <Card.Body className="miCardBody">
                                <div className='centrarNombre'>
                                    <Card.Title><h2>{exchange.id.toUpperCase()}</h2></Card.Title>
                                </div>
                                <Card.Text><b>{exchange.name.toUpperCase()}</b></Card.Text>
                                <Card.Text><b>Year: <span>{exchange.year_established}</span></b></Card.Text>
                                <Card.Text><b>Country:  {exchange.country}</b></Card.Text>                          
                            </Card.Body>
                            <Card.Footer className="miCardFooter"><a href={exchange.url}><div className='btn btn-dark ng-dark btnPersonalizado'><FontAwesomeIcon className="iconoColor" icon={faLink} /> WebSite</div></a></Card.Footer>
                        </Card>
                    </Col>
                    </React.Fragment>
                )
                })}
            </Row> 
        
        </div>
    )
}

export default Exchanges;

