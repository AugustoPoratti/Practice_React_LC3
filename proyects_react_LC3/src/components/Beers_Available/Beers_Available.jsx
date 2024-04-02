
import PropTypes from 'prop-types'

function Beers_Available({beers}) {
  return (
    <div>
            {
                beers.filter(beer => beer.available === true)
                .map((beer, i) => (
                    <div key={i}>
                        <h2 >{beer.beerName}</h2>
                        <h3 >{beer.beerStyle}</h3>
                        <span>{beer.price * 1000}</span>
                    </div>
                ))   
            }
    </div>
  )
}

Beers_Available.propTypes = {
    beers: PropTypes.array,
}

export default Beers_Available

