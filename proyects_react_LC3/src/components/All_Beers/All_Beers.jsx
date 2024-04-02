
import PropTypes from 'prop-types';


const AllBeers = ({beers}) => {
    return (
        <div className='text-white'>
            {
                beers.map((beer, i) => (
                    <div key={i}>
                        <h2 >{beer.beerName}</h2>
                        <h3 >{beer.beerStyle}</h3>
                        <span>{beer.price * 1000}</span>
                    </div>
                ))
            }
        </div>
    );
};


AllBeers.propTypes = {
    beers: PropTypes.array,
};


export default AllBeers;

