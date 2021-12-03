import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import Pokemon from 'pokemon-images';

export default function PokemonList ({pokemon})
{

    return (
        <>
        <div class="d-flex flex-wrap justify-content-center mx-auto">
        {pokemon.map(p => (
          <div key={p}>
          <Row xs={1} md={2} className="g-4">
            <Col>
                <Card  className="mx-2 my-2" border="primary" style={{ width: '10rem', height: '12rem' }}>
                <Card.Header as="h5" align ="center" >{p}</Card.Header>
                <Card.Img src={Pokemon.getSprite(`${p}`)}  />
                <Card.Body>
                </Card.Body>
                </Card>
            </Col>
            </Row>
            </div>
        )
        )}
      </div>
      </>
    )
}