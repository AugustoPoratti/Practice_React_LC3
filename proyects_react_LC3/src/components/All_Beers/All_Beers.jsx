import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'; // Importa el componente Row de Bootstrap

const BeersList = ({ beers }) => {
  return (
    <div className="beer">
      <Row className="justify-content-center"> {/* Centra las filas horizontalmente */}
        {beers.map((beer) => (
          <div key={beer.id} className="col-sm-4 mb-3"> {/* Tamaño de columna y margen inferior */}
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title><h3>{beer.beerName}</h3></Card.Title>
                <Card.Text>
                  <p>Estilo: {beer.beerStyle}</p>
                  <h5>Precio: ${beer.price * 1000}</h5>
                  <p>{beer.available ? "Disponible" : "No Disponible"}</p>
                </Card.Text>
                <Button variant="primary">Ver Info</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
    </div>
  )
}

BeersList.propTypes = {
  beers: PropTypes.array
};

export default BeersList;

