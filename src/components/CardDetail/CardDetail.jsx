import './CardDetail.css'
import { useParams } from 'react-router'
import axios from 'axios';//para poder usar las apis
import { useEffect, useState } from 'react'; // ejecuta una funcion despues de cargar el componenete
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const CardDetail = () => {
    const params = useParams()
    console.log(params.id);

    const [monedas, setMonedas] = useState([])

    useEffect(() => {
        async function getData() {
            const res = await axios.get("https://api.coingecko.com/api/v3/coins/" + params.id);
            setMonedas(res.data);
        }

        getData();
    }, []);


    if (monedas.description && monedas.image) {
        return (

            <div>
                <div className='todo'>
                    <Card className="cardPersonalizada">
                        <Card.Body>
                            <div className='centrarDiv'>
                                <Card.Img variant="top" className='imagenPersonalizada' src={monedas.image.large} style={{ width: "8rem" }} />
                            </div>
                            <Card.Title> {monedas.name}</Card.Title>
                            <Card.Text> <b>GENESIS DATE: </b> {monedas.genesis_date}</Card.Text>
                            <Card.Text><b>HASHING ALGORITHM: </b> {monedas.hashing_algorithm}</Card.Text>
                            <Card.Text> <b>MARKET CAP RANK: </b>{monedas.market_cap_rank}</Card.Text>
                            <Card.Text> {monedas.description.en}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link to="/Cards/"><Button variant="dark">Go Cripto List</Button></Link>
                        </Card.Footer>
                    </Card>
                </div >
            </div>

        )

    } else {
        return "";
    }

}

export default CardDetail

