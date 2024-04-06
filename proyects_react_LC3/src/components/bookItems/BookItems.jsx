import { Button, Card } from "react-bootstrap";

import PropTypes from 'prop-types'

const BookItems = ({ title, author, pageCount, rating, imageUrl }) => {

    return (

        
            <Card style={{ width: "22rem" }} className="m-3">
            <Card.Img
                height={400}
                variant="top"
                src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{author}</Card.Subtitle>
                <div>{rating?.length} estrellas</div>
                <p>{pageCount} páginas</p>
                <Button>Comprar</Button>
            </Card.Body>
            </Card>
        
);

    
}

BookItems.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pageCount: PropTypes.number,
    rating: PropTypes.array,
    imageUrl: PropTypes.string





}

export default BookItems


