import React, { Component } from 'react'
import './Home.css';
import Logo from '../../img/logo.png'
import { Card } from 'react-bootstrap'


const Home = () => {
    return (
        <div>
            <div className='todo'>
                <Card className="cardPersonalizada">
                    <Card.Body>
                        <div className="centrarImg"></div>
                        <img src={Logo}></img>
                        <Card.Title>Hi all</Card.Title>
                        <Card.Text>
                            My name is Guillem Rubio and I am a full stak developer. </Card.Text>
                        <Card.Text>This is my app made with the js React framework. It is a spa (single page app) where you can find various information about cryptocurrencies.This app is a sample of what I am capable of doing with this technology. </Card.Text>
                        <Card.Text> I hope you like the app. </Card.Text>
                        <Card.Text>Thanks a lot.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Guillem Rubio Varón</small>
                    </Card.Footer>
                </Card>
            </div >
        </div >
    )
}

export default Home
