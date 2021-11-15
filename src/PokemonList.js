import React from 'react'
import { Row, Col,Card } from 'react-bootstrap';
var v = 1

export default function PokemonList ({pokemon})
{
    return (
        <div>
            {pokemon.map(p => (
                <div key={p}>
                    {v++}
                <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card border="primary" style={{ width: '10rem', height: '12rem' }}>
                    <Card.Header as="h5">{p}</Card.Header>
                    <Card.Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${v}.png`} fluid={true} />
                    <Card.Body>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
                </div>
            ))}
        </div>
    )
}